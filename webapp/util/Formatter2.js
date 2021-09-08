sap.ui.define([
	"sap/ui/core/library"
] , function (coreLibrary) {
	"use strict";

	// shortcut for sap.ui.core.ValueState
	var ValueState = coreLibrary.ValueState;

	return {

		quantityState: function(iValue) {
			if (iValue > 2) {
				return ValueState.Error;
			} else if (iValue > 1 && iValue < 2) {
				return ValueState.Warning;
			} else {
				return ValueState.Success;
			}
		}

	};

});