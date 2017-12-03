sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("demo.wt.controller.App", {
   	oData: { target: { name: "Target model" } },
   	onInit: function() {
   		var oTarget = { target: { name: "Target model" } };
   		var model = new JSONModel(this.oData);
   		this.getView().setModel(model);
   	},
   	onDemoButtonPress: function() {
   		MessageToast.show("The target's name: " + this.oData.target.name);
   	}
   });
});