import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class TechnicianCaseDetails extends BaseController {

	public onNavHome(): void {
		this.navTo("technicianHome");
	}

	public onEdit(): void {
		this.navTo("technicianCaseEdit");
	}

	public onComplete(): void {
		MessageToast.show("Case marked as complete!");
		this.navTo("technicianHome");
	}

	public onAddNote(): void {
		MessageToast.show("Note added to case timeline.");
	}
}
