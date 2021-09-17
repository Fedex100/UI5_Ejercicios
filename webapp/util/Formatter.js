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
        },
formatCodInt: function(sCodInt) {
    if (sCodInt >= 1000 && sCodInt < 2000){
        return "Buenos Aires";
    }else if (sCodInt >= 2000 && sCodInt < 3000){
        return "La Pampa";
    }else if (sCodInt >= 3000){
        return "La Rioja";
    }
}
    };
    
}, true);
