sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("ejer1.ejer1.controller.Main", {
            onPress: function () {
                MessageToast.show("Hola mundillo");
			}
		});
	});
