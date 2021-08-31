/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ejer_17/ejer_17/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
