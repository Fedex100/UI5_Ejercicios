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
                
                var nNumero1 = parseInt(oModel.getProperty("/recipient/numero1"));
                var nNumero2 = parseInt(oModel.getProperty("/recipient/numero2"));  
                var nResultado = nNumero1 + nNumero2;
                
                oModel.setProperty("/recipient/resultado", nResultado);  
                debugger;
                this.getView().byId("numero1Id").setEnabled(false);
                this.getView().byId("numero2Id").setEnabled(false);
                
               
                MessageToast.show(nResultado);
			}
		});
	});
