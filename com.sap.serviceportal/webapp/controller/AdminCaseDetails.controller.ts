import BaseController from "./BaseController";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class AdminCaseDetails extends BaseController {

	public onNavHome(): void {
		this.navTo("main");
	}

	public onEditCase(): void {
		// Navigate to case edit — extend when edit view is ready
		this.navTo("main");
	}

	public onAssignTechnician(): void {
		this.navTo("aiAutoAssignment");
	}
}
