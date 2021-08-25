/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ejer_13/ejer_13/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
