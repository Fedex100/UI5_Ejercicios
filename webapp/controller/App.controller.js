sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("ejer2.ejer2.controller.App", {
			onInit: function () {
                var oData = {
                        recipient : {
                            numero1: 0,
                            numero2: 0,
                            resultado:0
                        }
            };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "oModel");
            }      
		});
	});
