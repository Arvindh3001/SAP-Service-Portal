import BaseController from "./BaseController";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class TechnicianHome extends BaseController {

	public onViewCases(): void {
		this.navTo("technicianCase");
	}

	public onOpenCase(): void {
		this.navTo("technicianCase");
	}

	public onMicCase(): void {
		this.navTo("aiVoiceAssistant");
	}

	public onJobPress(): void {
		this.navTo("technicianCase");
	}

	public onLearning(): void {
		this.navTo("learningJourneys");
	}
}
