sap.ui.define([
    "sap/ui/core/format/DateFormat"
], function (DateFormat) {
    "use strict";

    return  {
                formatDate: function (sDate) {
            if (!sDate) {
                return;
            }
            var date = new Date(sDate);
            var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "dd/MM/yyyy"
            });
            return dateFormat.format(date);
        }
    };
    
}, true);
