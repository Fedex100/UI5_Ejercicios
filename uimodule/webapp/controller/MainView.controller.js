sap.ui.define([
  "com/te/scanning/controller/BaseController",
  "sap/m/MessageBox"
], function (Controller, MessageBox) {
  "use strict";

  return Controller.extend("com.te.scanning.controller.MainView", {
    onInit: function(){
      this.scanningStarted=false;
    },
    startScanning: function () {
      this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(true);
      if (this.scanningStarted == false) {
        this.scanningStarted = true;
      ScanditSDK.configure("AUUgSzQuFfBjRPMIYTg6OHUCpYO1IEViZRftzrNCKJonUPG9L3m6hYNRyhtFdFR1Jl+xiqdjxl0KGjSS+nZ1fhVZStbcY/NpjRR0pABlwR8UYO+qqXI/8mk3SeJ9Qk3vJj82FLpBmharWTwz7eA/Ss6bXd8E6ZzFZx3Jv5QzaQewZHE3ZPYUDW89jZq2PZDhKBIbT11e/+3d05QdRsXbXmptfLx6tuWZOo8eL+4I0+ZwEYqGTBP89FdNCQd37I9eyKGYOehsLuu0DMdv2BqAtcTY92RdJQyxr6Hk8fck2HVN/wJZ4oGlWRGkvZK3YuFUUnZbLJhA9CfgiPFJfEFQK8hmAGLT43Zml5r4ekfxVVZfWCCNxMnXpY9NW5BJk0Br3fhWKpuT98tQ94wNPSO01ORwitZpSXXKQO8HkMhLI6ObSSD5p0L6BpqYuFxURg8zO3PShNuk2Leq9UxUApa0zf+2AIbUY5z/WzuXIchWlZ2e2hmG/Yg1nox5qZW8juvYrRMMLGkVBoQWFzeF7axEllMLSa8OgDjoMcqblXvUaum30SKvGOGZ7G1cL2SJsh7EUbgkOyk1MHG1Nb0UZ/9PN8FSob7LCWehwIwWKvo3XWbdt6YFlyxVHJ2lO8CofKXb+svtXV8HU4TtJ2Y0qEQFzPNKoqd1/G35QHylhMpTHL1Zu/tvSKo7vZAI3wGGgWmQx/5y+qdiqVlC6ykivvSWNv6V6e36Vf3QFGVVBpwD2ZSmNA47YOg0x9k8Gb/iK8Y+lD+fAcX0ly4CUSLDBxxqfeI5bkOzDxir++cIkfopCe3l096umwpy", {
        engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
      })
        .then(() => {
          return ScanditSDK.BarcodePicker.create(document.getElementById(this.getView().createId("scandit-barcode-picker")), {
            // enable some common symbologies
            scanSettings: new ScanditSDK.ScanSettings({ enabledSymbologies: ["ean8", "ean13", "upca", "upce"] }),
          });
        })
        .then((barcodePicker) => {
          // barcodePicker is ready here, show a message every time a barcode is scanned
          barcodePicker.on("scan", (scanResult) => {
           MessageBox.alert(`Scanned Value ${scanResult.barcodes[0].data}`);
          });
        });
      }
    },
    stopScanning: function() {
      this.byId(this.getView().createId("scandit-barcode-picker")).setVisible(false);
      MessageBox.alert("Barcode Scanning stopped.");
    }   
  });
});
