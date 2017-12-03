sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";
   return UIComponent.extend("demo.wt.Component", {
    metadata : {
		rootView: "demo.wt.view.App"
	},
	init : function () {
		// call the init function of the parent
		UIComponent.prototype.init.apply(this, arguments);
		// set data model
		var oTarget = { target: { name: "Target model" } };
		var oModel = new JSONModel(oTarget);
		this.setModel(oModel);
		
		// set i18n model
		var i18nModel = new ResourceModel({
		bundleName : "demo.wt.i18n.i18n" });
		this.setModel(i18nModel, "i18n");
	}
   });
});