import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class AiAutoAssignment extends BaseController {

	public onNavHome(): void {
		this.navTo("main");
	}

	public onAcceptAssignment(): void {
		MessageToast.show("Assignment accepted! Ravi Kumar has been notified.");
		this.navTo("main");
	}

	public onOverride(): void {
		MessageToast.show("Override mode — select an alternative technician below.");
	}

	public onSelectTechnician(): void {
		MessageToast.show("Technician assigned successfully.");
		this.navTo("main");
	}
}
