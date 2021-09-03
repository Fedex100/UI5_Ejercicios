/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ejer_21/ejer_21/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
