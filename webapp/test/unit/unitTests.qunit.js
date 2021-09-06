/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ejer_22/ejer_22/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
