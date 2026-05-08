import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import Button from "sap/m/Button";
import HBox from "sap/m/HBox";
import { Button$PressEvent } from "sap/m/Button";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class AiVoiceOnboarding extends BaseController {

	public onInit(): void {
		this.getView()?.setModel(new JSONModel({ isListening: true }), "local");
	}

	public onBack(): void {
		this.navTo("login");
	}

	public onNext(): void {
		this.navTo("technicianKyc");
	}

	public onMicToggle(): void {
		const oModel = this.getView()?.getModel("local") as JSONModel;
		const bListening = oModel.getProperty("/isListening") as boolean;
		oModel.setProperty("/isListening", !bListening);
	}

	public onLangSelect(oEvent: Button$PressEvent): void {
		const oBtn = oEvent.getSource() as Button;
		const oLangRow = oBtn.getParent() as HBox;
		(oLangRow.getItems() as Button[]).forEach((item: Button) => {
			item.removeStyleClass("spLangBtnActive");
			item.addStyleClass("spLangBtn");
		});
		oBtn.removeStyleClass("spLangBtn");
		oBtn.addStyleClass("spLangBtnActive");
	}
}
