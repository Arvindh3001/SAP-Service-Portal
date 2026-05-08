import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class TechnicianCaseEdit extends BaseController {

	public onBack(): void {
		this.navTo("technicianCase");
	}

	public onNavHome(): void {
		this.navTo("technicianHome");
	}

	public onVoiceAssistant(): void {
		this.navTo("aiVoiceAssistant");
	}

	public onSave(): void {
		MessageToast.show("Case updated successfully!");
		this.navTo("technicianCase");
	}

	public onAddPart(): void {
		MessageToast.show("Add part dialog (prototype)");
	}
}
