/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ejer_2/ejer_2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
