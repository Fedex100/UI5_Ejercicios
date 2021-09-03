sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "ejer21/ejer21/util/Services",
    "sap/ui/model/Sorter",
    "sap/ui/core/Fragment",
    "sap/ui/Device",
    "sap/ui/model/FilterOperator"	
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, Services, Sorter, Fragment, Device, FilterOperator ) {
		"use strict";

		return Controller.extend("ejer21.ejer21.controller.App", {
			onInit: function () {
               this.loadServiceModel();
               this._mViewSettingsDialogs = {};
            },

             loadServiceModel: async function(){

                const oResponseProducto = await Services.getProductos();
                const oDataProducto = oResponseProducto[0];

                var oModelProducto = new JSONModel();
                oModelProducto.setData(oDataProducto);

                this.getView().setModel(oModelProducto, "productoJSON");
            },
           
            onSort: function () {      
                this.createViewSettingsDialog("ejer21.ejer21.fragments.SortDialog").open();   
                               
                },

            createViewSettingsDialog: function (sDialogFragmentName) {
                var oDialog;
			oDialog = sap.ui.xmlfragment(sDialogFragmentName, this);                    
                this.getView().addDependent(oDialog);
                        oDialog.setFilterSearchOperator(FilterOperator.Contains);
                        if (Device.system.desktop) {
                            oDialog.addStyleClass("sapUiSizeCompact");
                        }
                        return oDialog;
                },
            onSortDialogConfirm: function (oEvent) {
                var oTable = this.byId("idTableProductos"),
                    mParams = oEvent.getParameters(),
                    oBinding = oTable.getBinding("items"),
                    sPath,
                    bDescending,
                    aSorters = [];
                sPath = mParams.sortItem.getKey();
                bDescending = mParams.sortDescending;
                aSorters.push(new Sorter(sPath, bDescending));
                oBinding.sort(aSorters);
            }
		});
	});
