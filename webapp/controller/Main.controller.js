sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("ejer2.ejer2.controller.Main", {
            onPress: function () {
                
                var oModel = this.getView().getModel("oModel");
            
                var sNombre = oModel.getProperty("/recipient/nombre");
                var sApellido = oModel.getProperty("/recipient/apellido");
                var nDni = oModel.getProperty("/recipient/dni");
                var sSexo = oModel.getProperty("/recipient/sexo");
                var sEmail = oModel.getProperty("/recipient/email");
                
                alert("Nombre: " + sNombre + "\r\n" + "Apellido: " + sApellido + "\r\n" + "DNI: " + nDni + "\r\n" + "Sexo: " + sSexo + "\r\n" + "Email: " + sEmail);   
            },
            onPress2: function() {
                
                this.getView().byId("nombreId").setEnabled(false);
                this.getView().byId("apellidoId").setEnabled(false);
                this.getView().byId("dniId").setEnabled(false);
                this.getView().byId("sexoId").setEnabled(false);
                this.getView().byId("emailId").setEnabled(false);
                
                this.getView().byId("formulario2").setVisible(true);
                
                this.getView().byId("nombreId2").setEnabled(true);
                this.getView().byId("apellidoId2").setEnabled(true);
                this.getView().byId("dniId2").setEnabled(true);
                this.getView().byId("sexoId2").setEnabled(true);
                this.getView().byId("emailId2").setEnabled(true);
                
                this.getView().byId("botonInformativo").setEnabled(false);

            },
             onPress3: function() {
                
                this.getView().byId("nombreId").setEnabled(true);
                this.getView().byId("apellidoId").setEnabled(true);
                this.getView().byId("dniId").setEnabled(true);
                this.getView().byId("sexoId").setEnabled(true);
                this.getView().byId("emailId").setEnabled(true);
                
                this.getView().byId("formulario2").setVisible(false);
                
                this.getView().byId("botonInformativo").setEnabled(true);

            }
		});
	});
