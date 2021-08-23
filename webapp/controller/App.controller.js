sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("ejercici.ejercicio6.controller.App", {
            
            onInit: async function () {
             
            this.loadModel();
            
            },
            
            onSearch: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    
                    var filterOrigen = new Filter("origen", FilterOperator.Contains, sQuery);
                    aFilters.push(filterOrigen);
                    
                    var filterCodProducto = new Filter("codigo_producto", FilterOperator.Contains, sQuery);
                    aFilters.push(filterCodProducto);
                    
                    var filterNomEmpresa = new Filter("nombre_empresa", FilterOperator.Contains, sQuery)
                    aFilters.push(filterNomEmpresa);

                    var oFilters = new Filter(aFilters);

                }

                // update list binding
                var oList = this.byId("idTableProductos");
                var oBinding = oList.getBinding("items");
                oBinding.filter(oFilters, "Application");
                
            },

            getLocalJSON: function (sJsonName) {
                return this.promisizer(jQuery.sap.getModulePath("ejercici.ejercicio6") + "/localService/" + sJsonName);
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
            
            loadModel: async function() {
              
              const oResponseProducto = await this.getLocalJSON("producto.json");
              const oDataProducto = oResponseProducto[0];
              var oProductoModel = new JSONModel();
              oProductoModel.setData(oDataProducto);
                
              var oComponent = this.getOwnerComponent();
              oComponent.setModel(oProductoModel, "productoJSON"); 
            }

		});
	});
