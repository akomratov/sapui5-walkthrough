sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("demo.wt.controller.App", {
   	onDemoButtonPress: function() {
   		MessageToast.show("Demo button was pressed");
   	}
   });
});