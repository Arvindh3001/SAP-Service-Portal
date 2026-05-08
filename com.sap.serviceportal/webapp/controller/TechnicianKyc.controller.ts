import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class TechnicianKyc extends BaseController {

	public onBack(): void {
		this.navTo("onboardingPersonal");
	}

	public onNext(): void {
		this.navTo("skillsZone");
	}

	public onUpload(): void {
		MessageToast.show("Document upload simulated (prototype)");
	}
}
