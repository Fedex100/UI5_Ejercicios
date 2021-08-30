sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
    "Ejer/ejer14/model/models",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("Ejer.ejer14.Component", {

		metadata: {
			manifest: "json"
		},

		
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

            var oDataPanel1 = {
				recipient : {
                    namCard : "",
                    numCard: "",
                    secCode: "",
                    expDate: "",
                    datePicker: ""
                 },
                 
            };
            
            var oModel1 = new JSONModel(oDataPanel1);
            this.setModel(oModel1, 'oModel1');
            
            var oDataPanel2 = {
				recipient : {
                    deliAddress : false,
                    addr: "",
                    city: "",
                    zipCod: 0,
                    country:"",
                    note: ""
                 }
            };
            
            var oModel2 = new JSONModel(oDataPanel2);
            this.setModel(oModel2, 'oModel2');
    
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
        }
	});
});
