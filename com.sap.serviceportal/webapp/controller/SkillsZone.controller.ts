import BaseController from "./BaseController";
import MessageToast from "sap/m/MessageToast";
import Button from "sap/m/Button";
import HBox from "sap/m/HBox";
import Input from "sap/m/Input";
import { Button$PressEvent } from "sap/m/Button";

/**
 * @namespace com.sap.serviceportal.controller
 */
export default class SkillsZone extends BaseController {

	public onBack(): void {
		this.navTo("technicianKyc");
	}

	public onNext(): void {
		this.navTo("onboardingReview");
	}

	public onSkillToggle(oEvent: Button$PressEvent): void {
		const oBtn = oEvent.getSource() as Button;
		if (oBtn.hasStyleClass("spSkillChipOn")) {
			oBtn.removeStyleClass("spSkillChipOn");
			oBtn.addStyleClass("spSkillChipOff");
			oBtn.setType("Default" as any);
			oBtn.setText(oBtn.getText().replace("✓  ", ""));
		} else {
			oBtn.removeStyleClass("spSkillChipOff");
			oBtn.addStyleClass("spSkillChipOn");
			oBtn.setType("Emphasized" as any);
			oBtn.setText("✓  " + oBtn.getText());
		}
		MessageToast.show("Skill updated — review in the selection summary below.");
	}

	public onAddCustomSkill(): void {
		const oInput = this.byId("customSkillInput") as Input;
		const sValue = oInput.getValue().trim();

		if (!sValue) {
			MessageToast.show("Please enter a skill name.");
			return;
		}

		const oRow = this.byId("customSkillChipsRow") as HBox;
		const oNewBtn = new Button({
			text: sValue,
			type: "Default" as any,
			press: this.onSkillToggle.bind(this)
		});
		oNewBtn.addStyleClass("spSkillChipOff");
		oRow.addItem(oNewBtn);

		oInput.setValue("");
		MessageToast.show(`"${sValue}" added to your skills.`);
	}
}

