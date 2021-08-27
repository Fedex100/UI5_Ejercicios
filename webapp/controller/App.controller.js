sap.ui.define([
    "sap/ui/core/mvc/Controller",
    //"sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
	
	function (Controller,Fragment) {
		"use strict";

		return Controller.extend("Ejer.ejer14.controller.App", {
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
            
            var sNamCard = this.getView().getModel('oModel1').getProperty("/recipient/namCard");
            var sNumCard = this.getView().getModel('oModel1').getProperty("/recipient/numCard");
            var sSecCode = this.getView().getModel('oModel1').getProperty("/recipient/secCode");
            var sExpDate = this.getView().getModel('oModel1').getProperty("/recipient/expDate");
            var sDatePicker = this.getView().getModel('oModel1').getProperty("/recipient/datePicker");
            
           
            var sAddr = this.getView().getModel('oModel2').getProperty("/recipient/addr");
            var sCity = this.getView().getModel('oModel2').getProperty("/recipient/city");
            var sZipCode = this.getView().getModel('oModel2').getProperty("/recipient/zipCod");
            var sCountry = this.getView().getModel('oModel2').getProperty("/recipient/country");
            var sNote = this.getView().getModel('oModel2').getProperty("/recipient/note");

             


            var sNamCardMsg = oBundle.getText(sNamCard);
            var sNumCardMsg = oBundle.getText(sNumCard);
            var sSecCodeMsg = oBundle.getText(sSecCode);
            var sExpDateMsg = oBundle.getText(sExpDate);
            var sDatePickerMsg = oBundle.getText(sDatePicker);

            
            var sDeliAddrMsg = oBundle.getText(sDeliAddress);

            var sAddrMsg = oBundle.getText(sAddr);
            var sCityMsg = oBundle.getText(sCity);
            var sZipCodeMsg = oBundle.getText(sZipCode);
            var sCountryMsg = oBundle.getText(sCountry);
            var sNoteMsg = oBundle.getText(sNote);

            
            var msgFinal = "Name on Card: " + sNamCardMsg + "Card number: " + sNumCardMsg + "Security Code: " + sSecCodeMsg + "Experation date: "  + sExpDateMsg + "Fecha: " + sDatePickerMsg + "Address: " + sAddrMsg + "City: " +sCityMsg + "Zip Code: " + sZipCodeMsg + "Country: " + sCountryMsg + "Note: " + sNoteMsg;
            
            //console.log(sDeliAddrMsg);
            //MessageToast.show(msgFinal);
            //this.cheqAddr();
            //this.onDialog();
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
