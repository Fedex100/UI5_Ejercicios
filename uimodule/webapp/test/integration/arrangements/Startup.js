sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("com.te.oDataSalesOrderSearch.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "com.te.oDataSalesOrderSearch",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
