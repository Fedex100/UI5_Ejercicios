sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";
        
		return Controller.extend("ejer6.ejer6.controller.App", {
			onInit: function () {
                var oData = {
                        empresa: {
                            nombre: "Accenture",
                            informacion: {
                            empleados: 3,
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
                        }]
                    }
                };
                var oDataModel = new JSONModel(oData);
                this.getView().setModel(oDataModel, "oDataModel");
                this.loadModel();
                
                const oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                
                var sCurrentLocale = sap.ui.getCore().getConfiguration().getLanguage();
                //alert(oBundle.getText(sCurrentLocale));
            },
            
            getLocalJSON: function (sJsonName) {
            return this.promisizer(jQuery.sap.getModulePath("ejer6.ejer6") + "/localService/" + sJsonName);
            }, 
            promisizer: function (oOptions) {
                return this.toPromise(jQuery.ajax(oOptions));
            },
            toPromise: function (oPromise) {
                return new Promise(function (resolve, reject) {
                    oPromise.then(() => {
                        const sHeaders = oPromise.done().getAllResponseHeaders();
                        const aHeaders = sHeaders.trim().split(/[\r\n]+/);
                        const oHeaderMap = {};
                        aHeaders.forEach(function (sLine) {
                            const aParts = sLine.split(': ');
                            const sHeader = aParts.shift();
                            const sValue = aParts.join(': ');
                            oHeaderMap[sHeader] = sValue;
                        });
                        resolve([oPromise.done().responseJSON, oHeaderMap]);
                    }, reject);
                });
            },

            loadModel: async function(){
            const oResponseProducto = await this.getLocalJSON("producto.json");
                const oDataProducto = oResponseProducto[0];
                var oProductoModel = new JSONModel();
                oProductoModel.setData(oDataProducto);
                
                var oComponent = this.getOwnerComponent();
                oComponent.setModel(oProductoModel, "productoJSON"); 
            }
            
           
			
		});
	});
