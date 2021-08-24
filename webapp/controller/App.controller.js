sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageBox) {
		"use strict";

		return Controller.extend("ejer6.ejer6.controller.App", {
            
            onInit: function () {
            
                var oContactos = {
                        empresa: {
                            nombre: "Accenture",
                            informacion: {
                                empleados: 3
                            },
                            contactos: [
                                {
                                    nombre: "Barbara",
                                    telefono: "11152954873"
                                },
                                {
                                    nombre: "Jose",
                                    telefono: "111546954734"
                                },
                                {
                                    nombre: "Cristina",
                                    telefono: "11152989275"
                                }
                            ],
                            selContacto:""
                        }
                    }
                    var oEmpresaModel = new JSONModel();
                    oEmpresaModel.setData(oContactos);
                    this.getView().setModel(oEmpresaModel, "oContactos");

                }, 
               
                onPress: function (oEvent) {
                    let telefonoKey = this.getView().byId("campoSelec").getSelectedKey();
                    MessageBox.information(telefonoKey);  
                }
            
            
		});
	});
