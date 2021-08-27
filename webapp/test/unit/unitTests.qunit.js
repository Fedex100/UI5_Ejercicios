/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Ejer_/ejer_14/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
