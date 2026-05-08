import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class TechnicianManagement extends BaseController {

	public onNavHome(): void {
		this.navTo("main");
	}

	public onAddTechnician(): void {
		this.navTo("aiVoiceOnboarding");
	}

	public onEditTechnician(): void {
		MessageToast.show("Edit technician — coming soon.");
	}

	public onViewProfile(): void {
		MessageToast.show("Technician profile — coming soon.");
	}

	public onAssignCase(): void {
		this.navTo("aiAutoAssignment");
	}
}
