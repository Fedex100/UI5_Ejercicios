sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("ejer5.ejer5.controller.App", {
			onInit: function () {
                var modeloCiudades = {
                        ciudades: [
                            {
                                "name": "Buenos Aires"
                            },
                            {
                                "name": "Rosario"
                            },
                            {
                                "name": "Ushuaia"
                            },
                            {
                                "name": "Bariloche"
                            }]
                };

                var oToolsModel = new JSONModel(modeloCiudades);
                this.getView().setModel(oToolsModel, "oToolsModel");
            }      
			
		});
	});
