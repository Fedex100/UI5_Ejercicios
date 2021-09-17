sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "ejer6/ejer6/util/Formatter"
  
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageBox, Filter, FilterOperator, Formatter) {
		"use strict";

		return Controller.extend("ejer6.ejer6.controller.Main", {
            Formatter: Formatter,
            
            onPress: function () {
                var sTelefono = this.getView().byId("contactosId").getSelectedKey()
                this.onInfoMessageBoxPress(sTelefono);
                },
            
            onInfoMessageBoxPress: function (msg) {
			MessageBox.information(msg);
        },
            onSearch: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter("origen", FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                }
                var oList = this.byId("idTableProductos");
                var oBinding = oList.getBinding("items");
                oBinding.filter(aFilters, "Application");

            },
            onSearch2: function (oEvent) {
                // add filter for search
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filterOrigen = new Filter("origen", FilterOperator.Contains, sQuery);
                    aFilters.push(filterOrigen);
                    
                    var filterCodProducto = new Filter("codigo_producto", FilterOperator.Contains, sQuery);
                    aFilters.push(filterCodProducto);
                    
                    var filterNomEmpresa = new Filter("nombre_empresa", FilterOperator.Contains, sQuery);
                    aFilters.push(filterNomEmpresa);
                    
                    var oFilters = new Filter(aFilters);
                }
        
                var oList = this.byId("idTableProductos8");
                var oBinding = oList.getBinding("items");
                oBinding.filter(oFilters, "Application");

            }
		});
	});
