sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "Ejer/ejer14/util/Formatter"
],
	
	function (Controller, Fragment, Formatter) {
		"use strict";

		return Controller.extend("Ejer.ejer14.controller.App", {
            Formatter: Formatter,

            onInit: function () {
                
            },
            
            btnSiguiente : function () {
                var sNamCard = this.getView().getModel('oModel1').getProperty("/recipient/namCard");
                
                if (sNamCard === "" ){
                    alert("Debes ingresa un valor")
                    }
                else{
                    this.getView().byId("namCardId").setEditable(false);
                    this.getView().byId("numCardId").setEditable(false);
                    this.getView().byId("secCodeId").setEditable(false);
                    this.getView().byId("expDateId").setEditable(false);
                    this.getView().byId("selFechaId").setEditable(false);
                    
                    this.getView().byId("Panel_2").setVisible(true);
                    this.getView().byId("Panel_1").setVisible(false);
                    

                }   
                
        },

            terminar : function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                
                var sAddr = this.getView().getModel('oModel2').getProperty("/recipient/addr");
                var sCity = this.getView().getModel('oModel2').getProperty("/recipient/city");
                var sZipCode = this.getView().getModel('oModel2').getProperty("/recipient/zipCod");
                var sCountry = this.getView().getModel('oModel2').getProperty("/recipient/country");
                
                if (sAddr === "" || sCity === "" || sZipCode === "" || sCountry=== ""){
                    alert("Debes ingresa un valor")
                    }
                else{
                    this.getView().byId("namCardId").setEditable(false);
                    this.getView().byId("numCardId").setEditable(false);
                    this.getView().byId("secCodeId").setEditable(false);
                    this.getView().byId("expDateId").setEditable(false);
                    this.getView().byId("selFechaId").setEditable(false);
                    
                    this.getView().byId("Panel_2").setVisible(true);
                    this.getView().byId("Panel_1").setVisible(false);
                    
                this.onDialog();
                }

        },
            cheqAddr: function () {
                
                let cheq = this.getView().byId("deliAddrId");
                
                if (cheq === true){
                    console.log("Se deberá entregar en otra direccion");
                }
                else {
                    console.log("Se deberá entregar en la misma direccion");
                }
            },
            
            
            onDialog: function() {
                
                let oView = this.getView();

                if (!this._oFragment) {
                   Fragment.load({
                        id: oView.getId(),
                        name:  "Ejer.ejer14.fragments.CargaDatos",
                        controller: this
                    }).then(function (oDialog) {
                        this._oFragment = oDialog;
                        this.getView().addDependent(this._oFragment);
                        this._oFragment.open();
                    }.bind(this));
                    return;
                }
                
                this._oFragment.open();

            },

            onCloseDialog : function () {
			this.byId("cargaDatos").close();
        }
        
        
		});
	});
