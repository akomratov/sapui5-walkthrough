sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("demo.wt.controller.App", {
   	oData: { target: { name: "Target model" } },
   	onDemoButtonPress: function() {
   		var oResBundle = this.getView().getModel("i18n").getResourceBundle();
   		var sTargetName = this.getView().getModel().getProperty("/target/name");
   		var sMessage = oResBundle.getText("messageGreeting", sTargetName);
   		MessageToast.show(sMessage);
   	}
   });
});