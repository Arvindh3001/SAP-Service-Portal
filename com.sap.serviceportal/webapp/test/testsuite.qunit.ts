export default {
	name: "QUnit test suite for the UI5 Application: com.sap.serviceportal",
	defaults: {
		page: "ui5://test-resources/com/sap/serviceportal/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		sinon: {
			version: 4
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon"
		},
		coverage: {
			only: ["com/sap/serviceportal/"],
			never: ["test-resources/com/sap/serviceportal/"]
		},
		loader: {
			paths: {
				"com/sap/serviceportal": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for com.sap.serviceportal"
		},
		"integration/opaTests": {
			title: "Integration tests for com.sap.serviceportal"
		}
	}
};
