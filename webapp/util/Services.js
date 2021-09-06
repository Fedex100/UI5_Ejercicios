sap.ui.define([
    "ejer22/ejer22/util/Constans"
],

	function (Constants) {
		"use strict";

		return {
			
            getProductos: async function () {
                const oRequest = this.getRequest({
                    endPoint: "Northwind",
                    method: "GET",
                    entity: "/V3/Northwind/Northwind.svc/Sales_Totals_by_Amounts"
                });
                return this.promisizer(oRequest);
               
            },
            getRequest: function (oOptions = {}) {
                const oHeaders = {
                    'Content-Type': "application/json;charset=UTF-8;IEEE754Compatible=true",
                    'accept': "application/json",
                    'Access-Control-Allow-Origin': "*"
                };

                if (oOptions.username && oOptions.password) {
                    oHeaders.Authorization = "Basic " + btoa(oOptions.username + ":" + oOptions.password);
                }

                if (oOptions.fetch) {
                    oHeaders['X-CSRF-TOKEN'] = 'Fetch';
                }

                if (oOptions.method === 'POST') {
                    oHeaders['X-CSRF-TOKEN'] = localStorage.getItem('csrf');
                }

                const sParams = oOptions.params ? "?" + oOptions.params : "";

                return {
                    headers: oHeaders,
                    url: this.getBaseURL(oOptions.endPoint) + this.getEndpoint(oOptions) + "/" + (oOptions.entity || '') + sParams,
                    method: oOptions.method,
                    data: oOptions.data || ''
                };
            },
            
            getEndpoint: function (oOptions) {
                return oOptions.endPoint;
            },
            getBaseURL: function (sEndPoint) {
                return jQuery.sap.getModulePath("ejer22.ejer22") + "/";
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

            }
		};
	});
