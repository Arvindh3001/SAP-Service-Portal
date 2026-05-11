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
import FlexBox from "sap/m/FlexBox";
import HBox from "sap/m/HBox";
import Text from "sap/m/Text";
import Title from "sap/m/Title";
import Avatar from "sap/m/Avatar";
import Button from "sap/m/Button";
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
			const oServiceModel = this.getModel("service");
			const sControllerName = this.getMetadata().getName() as string;
			const bIsTechnician = sControllerName.indexOf("Technician") !== -1;

			let sName     = bIsTechnician ? "Ravi Kumar"          : "Arvindh S";
			let sEmail    = bIsTechnician ? "ravi.kumar@sap.com"  : "arvindh.s@sap.com";
			let sInitials = bIsTechnician ? "RK"                  : "AS";

			if (oServiceModel) {
				if (bIsTechnician) {
					sName     = (oServiceModel.getProperty("/technicianUser/displayName") as string) || sName;
					sEmail    = (oServiceModel.getProperty("/technicianUser/email")       as string) || sEmail;
					sInitials = (oServiceModel.getProperty("/technicianUser/initials")    as string) || sInitials;
				} else {
					sName     = (oServiceModel.getProperty("/currentUser/displayName") as string) || sName;
					sEmail    = (oServiceModel.getProperty("/currentUser/email")       as string) || sEmail;
					sInitials = (oServiceModel.getProperty("/currentUser/initials")    as string) || sInitials;
				}
			}

			this._oUserPopover = new Popover({
				showHeader: false,
				placement: "Bottom",
				contentWidth: "280px",
				content: [
					new VBox({
						items: [

							// ── Profile header ──────────────────────────
							new VBox({
								items: [
									new FlexBox({
										justifyContent: "Center",
										items: [
											new Avatar({
												initials: sInitials,
												size: "L",
												backgroundColor: "Accent6"
											}).addStyleClass("spUserPopoverAvatar")
										]
									}),
									new Title({
										text: sName,
										width: "100%",
										textAlign: "Center"
									}).addStyleClass("spUserPopoverName"),
									new Text({
										text: sEmail,
										width: "100%",
										textAlign: "Center"
									}).addStyleClass("spUserPopoverEmail")
								]
							}).addStyleClass("spUserPopoverHeader"),

							// ── Menu items ───────────────────────────────
							new List({
								showSeparators: "None",
								items: [
									new StandardListItem({
										icon: "sap-icon://action-settings",
										title: "Settings",
										type: "Active"
									}),
									new StandardListItem({
										icon: "sap-icon://customize",
										title: "Start Adaptation",
										type: "Active"
									}),
									new StandardListItem({
										icon: "sap-icon://log",
										title: "Sign In as Another User",
										type: "Active"
									}),
									new StandardListItem({
										icon: "sap-icon://technical-object",
										title: "System Settings",
										type: "Active"
									})
								]
							}),

							// ── Footer: Sign Out ─────────────────────────
							new HBox({
								justifyContent: "End",
								items: [
									new Button({
										text: "Sign Out",
										icon: "sap-icon://sys-exit",
										type: "Transparent",
										press: () => {
											this._oUserPopover.close();
											this.navTo("login");
										}
									}).addStyleClass("spUserPopoverSignOut")
								]
							}).addStyleClass("spUserPopoverFooter")

						]
					})
				]
			}).addStyleClass("spUserPopover");

			this.getView()!.addDependent(this._oUserPopover);
		}

		this._oUserPopover.openBy(oSource);
	}
}
