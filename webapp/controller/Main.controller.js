sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"  
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Fragment) {
		"use strict";

		return Controller.extend("ejer13.ejer13.controller.Main", {
           
            onPress: function () {
               let oView = this.getView();

                if (!this._oFragment) {
                    Fragment.load({
                        id: oView.getId(),
                        name:  "ejer13.ejer13.fragments.HelloDialog",
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
            onClose : function () {
			    this.byId("dialogId").close();
        },
    
		});
	});
