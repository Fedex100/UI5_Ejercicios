sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
  
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageBox) {
		"use strict";

		return Controller.extend("ejer5.ejer5.controller.Main", {
            onPress: function () {
                var sCiudad = this.getView().byId("womboCombo").getValue()
                this.onInfoMessageBoxPress(sCiudad);
                },
            
            onInfoMessageBoxPress: function (msg) {
			MessageBox.information(msg);
		},
		});
	});
