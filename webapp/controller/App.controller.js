sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("ejer4.ejer4.controller.App", {
			onInit: function () {
                    var oData = {
                        recipient : {
                            nombre: "",
                            apellido: "",
                            dni: 0,
                            sexo: "",
                            email: "",
                        }
            };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "oModel");
			}
		});
	});
