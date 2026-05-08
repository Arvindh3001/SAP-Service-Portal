import BaseController from "./BaseController";
import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class OnboardingReview extends BaseController {

	public onNavHome(): void {
		this.navTo("login");
	}

	public onBack(): void {
		this.navTo("skillsZone");
	}

	public onEditPersonal(): void {
		this.navTo("onboardingPersonal");
	}

	public onEditSkills(): void {
		this.navTo("skillsZone");
	}

	public onSubmit(): void {
		MessageBox.confirm(
			"Are you sure you want to submit your application?",
			{
				title: "Submit Application",
				onClose: (sAction: string) => {
					if (sAction === MessageBox.Action.OK) {
						MessageToast.show("Application submitted! Welcome to the SAP Service Network.");
						this.navTo("technicianHome");
					}
				}
			}
		);
	}
}
