import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import Event from "sap/ui/base/Event";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class Login extends BaseController {

	public onInit(): void {
		this.getView()?.setModel(new JSONModel({ isTechnician: true }), "local");
	}

	public onRoleToggle(oEvent: Event): void {
		const sKey = (oEvent.getParameter("item") as any).getKey();
		(this.getView()?.getModel("local") as JSONModel).setProperty("/isTechnician", sKey === "technician");
	}

	public onSignIn(): void {
		const bTechnician = (this.getView()?.getModel("local") as JSONModel).getProperty("/isTechnician") as boolean;
		this.navTo(bTechnician ? "technicianHome" : "main");
	}

	public onRegister(): void {
		this.navTo("aiVoiceOnboarding");
	}
}
