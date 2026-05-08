import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class LearningJourneys extends BaseController {

	public onBack(): void {
		this.navTo("technicianHome");
	}

	public onStartCourse(): void {
		MessageToast.show("Course starting...");
	}

	public onContinue(): void {
		this.navTo("technicianHome");
	}
}
