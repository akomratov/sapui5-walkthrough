sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";
   return UIComponent.extend("demo.wt.Component", {
    metadata : {
		manifest: "json"
	},
	init : function () {
		// call the init function of the parent
		UIComponent.prototype.init.apply(this, arguments);
		// set data model
		var oTarget = { target: { name: "Target model" } };
		var oModel = new JSONModel(oTarget);
		this.setModel(oModel);
		
		// IMPORTANT!!! i18n model is instantiated automatically now
	}
   });
});