sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "integ1/integ1/util/Formatter",
    "integ1/integ1/util/Formatter2",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
	
	function (Controller, Formatter, Formatter2, JSONModel, MessageToast, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("integ1.integ1.controller.Header", {
            Formatter: Formatter,
            Formatter2: Formatter2,
            
            onInit: async function () { 
                
                this.loadModel();
                this.modeloMensaje();
                
                
            },
            
        btnIr: function(){
            this.getView().byId("idTableProductos").setVisible(true);
            
            var fechaCargada = this.getView().getModel('oDataIngresada').getProperty("/data/fecha");
            
            var proveedorCargado = this.getView().getModel('oDataIngresada').getProperty("/data/proveedor");
            var paisCargado = this.getView().getModel('oDataIngresada').getProperty("/data/pais");

            var msgFinal = "Fecha: " + fechaCargada + "\r\n" + "Proveedor: " + proveedorCargado + "\r\n" + "País: " + paisCargado;
            
            MessageToast.show(msgFinal);
            
            this.getView().getModel('oDataIngresada').setProperty("/data/fecha", "");
            this.getView().getModel('oDataIngresada').setProperty("/data/proveedor", "");
            this.getView().getModel('oDataIngresada').setProperty("/data/pais", "");
            

        },
        
        getLocalJSON: function (sJsonName) {
        return this.promisizer(jQuery.sap.getModulePath("integ1.integ1") + "/localService/" + sJsonName);
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
              
              const oResponseProducto = await this.getLocalJSON("Productos.json");
              const oDataProducto = oResponseProducto[0];
              var oProductoModel = new JSONModel();
              oProductoModel.setData(oDataProducto);
                
              var oComponent = this.getOwnerComponent();
              oComponent.setModel(oProductoModel, "productosJSON");
            },
       
        modeloMensaje: function () {
            var dataMsg = {
                    data:[{
                        fecha:"",
                        proveedor:"",
                        pais:""
                }]
            }
            var oDataIngresada = new JSONModel();
                oDataIngresada.setData(dataMsg);
                this.getView().setModel(oDataIngresada, "oDataIngresada");
        },
        onSearch: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    
                    var filterOrigen = new Filter("Proveedor", FilterOperator.Contains, sQuery);
                    aFilters.push(filterOrigen);
                    
                    var filterNomEmpresa = new Filter("Producto", FilterOperator.Contains, sQuery)
                    aFilters.push(filterNomEmpresa);

                    var oFilters = new Filter(aFilters);

                }

                // update list binding
                var oList = this.byId("idTableProductos");
                var oBinding = oList.getBinding("items");
                oBinding.filter(oFilters, "Application");
            },
            
           
		});
	});
