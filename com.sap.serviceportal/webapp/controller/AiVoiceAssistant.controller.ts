import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import Button from "sap/m/Button";
import Input from "sap/m/Input";
import HBox from "sap/m/HBox";
import Event from "sap/ui/base/Event";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class AiVoiceAssistant extends BaseController {

	public onInit(): void {
		this.getView()?.setModel(new JSONModel({ isListening: true }), "local");
	}

	public onBack(): void {
		this.getRouter().navTo("technicianCase");
	}

	public onMicToggle(): void {
		const oModel = this.getView()?.getModel("local") as JSONModel;
		const bListening = oModel.getProperty("/isListening") as boolean;
		oModel.setProperty("/isListening", !bListening);
	}

	public onEditAction(oEvent: Event): void {
		const oBtn = oEvent.getSource() as Button;
		const oRow = oBtn.getParent() as HBox;

		// Find the Input sibling in this action row
		const oInput = oRow.getItems().find(item => item.isA("sap.m.Input")) as Input | undefined;
		if (!oInput) return;

		const bEditing = oInput.getEditable();
		if (bEditing) {
			// Save: switch back to read-only
			oInput.setEditable(false);
			oBtn.setIcon("sap-icon://write-new");
			MessageToast.show("Change saved.");
		} else {
			// Enter edit mode
			oInput.setEditable(true);
			oBtn.setIcon("sap-icon://accept");
			oInput.focus();
		}
	}

	public onApply(): void {
		MessageToast.show("Updates applied to case!");
		this.navTo("technicianCase");
	}
}
