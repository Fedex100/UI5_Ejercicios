/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ejer_19/ejer_19/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
