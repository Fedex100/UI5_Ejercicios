sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "ejer22/ejer22/util/Services",
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

		return Controller.extend("ejer22.ejer22.controller.App", {
			onInit: function () {
               this.loadServiceModel();
               this._mViewSettingsDialogs = {};
               
               this.mGroupFunctions = {
                    origen: function (oContext) {
                        var sOrigen = oContext.getProperty("CompanyName");
                        return {
                            key: sOrigen,
                            text: sOrigen,
                        };
                        
                    }
                };

            },

             loadServiceModel: async function(){

                const oResponseProducto = await Services.getProductos();
                const oDataProducto = oResponseProducto[0];

                var oModelProducto = new JSONModel();
                oModelProducto.setData(oDataProducto);

                this.getView().setModel(oModelProducto, "productoJSON");
                console.log(oModelProducto)
            },
           
            onGroup: function () {      
                this.createViewSettingsDialog("ejer22.ejer22.fragments.GroupDialog").open();                   
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
            onGroupDialogConfirm: function (oEvent) {
                var oTable = this.byId("idTableProductos"),
                    mParams = oEvent.getParameters(),
                    oBinding = oTable.getBinding("items"),
                    sPath,
                    bDescending,
                    vGroup,
                    aGroups = [];
                if (mParams.groupItem) {
                    sPath = mParams.groupItem.getKey();
                    bDescending = mParams.groupDescending;
                    vGroup = this.mGroupFunctions[sPath];
                    aGroups.push(new Sorter(sPath, bDescending, vGroup));
                    oBinding.sort(aGroups);
                } else {
                    oBinding.aSorters = null;
                    aGroups = [];
                    oBinding.sort(aGroups);
                }
            },

		});
	});
