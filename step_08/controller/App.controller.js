sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("demo.wt.controller.App", {
   	oData: { target: { name: "Target model" } },
   	onInit: function() {
   		var oTarget = { target: { name: "Target model" } };
   		var model = new JSONModel(this.oData);
   		this.getView().setModel(model);
   		
   		//i18n
   		var oResModel = new ResourceModel({
   			bundleName: "demo.wt.i18n.i18n"
   		});
   		this.getView().setModel(oResModel, "i18n");
   	},
   	onDemoButtonPress: function() {
   		var oResBundle = this.getView().getModel("i18n").getResourceBundle();
   		var sTargetName = this.getView().getModel().getProperty("/target/name");
   		var sMessage = oResBundle.getText("messageGreeting", sTargetName);
   		MessageToast.show(sMessage);
   	}
   });
});