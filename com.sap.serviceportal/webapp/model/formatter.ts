import { ValueState } from "sap/ui/core/library";

export default {
	formatPriorityState: (sPriority: string): ValueState => {
		switch (sPriority) {
			case "High":   return ValueState.Error;
			case "Medium": return ValueState.Warning;
			case "Low":    return ValueState.None;
			default:       return ValueState.None;
		}
	},

	formatStageState: (sStage: string): ValueState => {
		switch (sStage) {
			case "In Progress":
			case "On Site":
			case "Parts Pending": return ValueState.Warning;
			case "En Route":      return ValueState.Information;
			case "Completed":     return ValueState.Success;
			default:              return ValueState.None;
		}
	},

	formatStatusBoxClass: (bActive: boolean): string => {
		return bActive ? "spStatusBox spStatusBox--orange" : "spStatusBox spStatusBox--gray";
	}
};
