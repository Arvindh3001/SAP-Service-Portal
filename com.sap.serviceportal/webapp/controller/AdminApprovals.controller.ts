import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class AdminApprovals extends BaseController {

	public onNavHome(): void {
		this.navTo("main");
	}

	public onApprove(): void {
		MessageToast.show("Request approved.");
	}

	public onReject(): void {
		MessageToast.show("Request rejected.");
	}
}
