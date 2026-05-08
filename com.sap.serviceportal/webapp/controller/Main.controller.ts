import BaseController from "./BaseController";
import { Button$PressEvent } from "sap/m/Button";
import { ColumnListItem$PressEvent } from "sap/m/ColumnListItem";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class Main extends BaseController {

	public onCasePress(oEvent: ColumnListItem$PressEvent): void {
		this.navTo("caseDetails");
	}

	public onActiveCasePress(oEvent: ColumnListItem$PressEvent): void {
		this.navTo("caseDetails");
	}

	public onNewCase(): void {
		this.navTo("caseDetails");
	}

	public onTechnicians(oEvent: Button$PressEvent): void {
		this.navTo("technicianMgmt");
	}

	public onAllocate(oEvent: Button$PressEvent): void {
		this.navTo("aiAutoAssignment");
	}

	public onApprovals(oEvent: Button$PressEvent): void {
		this.navTo("adminApprovals");
	}

	public onReports(): void {
		// Reports screen — future
	}
}
