import BaseController from "./BaseController";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class OnboardingPersonal extends BaseController {

	public onNavHome(): void {
		this.navTo("main");
	}

	public onBack(): void {
		this.navTo("aiVoiceOnboarding");
	}

	public onNext(): void {
		this.navTo("technicianKyc");
	}
}
