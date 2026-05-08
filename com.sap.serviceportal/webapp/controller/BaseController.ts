import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import AppComponent from "../Component";
import Model from "sap/ui/model/Model";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";
import Router from "sap/ui/core/routing/Router";
import History from "sap/ui/core/routing/History";
import Popover from "sap/m/Popover";
import List from "sap/m/List";
import StandardListItem from "sap/m/StandardListItem";
import VBox from "sap/m/VBox";
import Text from "sap/m/Text";
import Event from "sap/ui/base/Event";
import Control from "sap/ui/core/Control";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default abstract class BaseController extends Controller {

	private _oUserPopover: Popover;

	public getOwnerComponent(): AppComponent {
		return super.getOwnerComponent() as AppComponent;
	}

	public getRouter(): Router {
		return UIComponent.getRouterFor(this);
	}

	public getResourceBundle(): Promise<ResourceBundle> {
		const oModel = this.getOwnerComponent().getModel("i18n") as ResourceModel;
		return oModel.getResourceBundle() as Promise<ResourceBundle>;
	}

	public getModel(sName?: string): Model {
		return this.getView().getModel(sName);
	}

	public setModel(oModel: Model, sName?: string): BaseController {
		this.getView().setModel(oModel, sName);
		return this;
	}

	public navTo(sName: string, oParameters?: object, bReplace?: boolean): void {
		this.getRouter().navTo(sName, oParameters, undefined, bReplace);
	}

	public onNavBack(): void {
		const sPreviousHash = History.getInstance().getPreviousHash();
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			this.getRouter().navTo("main", {}, undefined, true);
		}
	}

	public onAvatarPress(oEvent: Event): void {
		const oSource = oEvent.getSource() as Control;

		if (!this._oUserPopover) {
			// Resolve display name from whichever model path is populated
			const oServiceModel = this.getModel("service");
			let sName = "User";
			let sRole = "";
			if (oServiceModel) {
				const sTechName  = oServiceModel.getProperty("/technicianUser/name") as string;
				const sAdminName = oServiceModel.getProperty("/currentUser/name") as string;
				sName = sTechName || sAdminName || "User";
				sRole = sTechName ? "Technician" : "Admin";
			}

			this._oUserPopover = new Popover({
				showHeader: false,
				placement: "Bottom",
				contentWidth: "220px",
				content: [
					new VBox({
						items: [
							// User info header
							new VBox({
								items: [
									new Text({ text: sName }).addStyleClass("spPopoverName"),
									new Text({ text: sRole }).addStyleClass("spPopoverRole")
								]
							}).addStyleClass("spPopoverHeader"),

							// Actions list
							new List({
								showSeparators: "None",
								items: [
									new StandardListItem({
										icon: "sap-icon://person-placeholder",
										title: "My Profile",
										type: "Inactive"
									}),
									new StandardListItem({
										icon: "sap-icon://action-settings",
										title: "Settings",
										type: "Inactive"
									}),
									new StandardListItem({
										icon: "sap-icon://log",
										title: "Logout",
										type: "Active",
										press: () => {
											this._oUserPopover.close();
											this.navTo("login");
										}
									})
								]
							})
						]
					})
				]
			});

			this.getView()!.addDependent(this._oUserPopover);
		}

		this._oUserPopover.openBy(oSource);
	}
}
