/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ejer_4/ejer_4/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
