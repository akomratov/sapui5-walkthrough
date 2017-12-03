sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("demo.wt.controller.App", {
   	onDemoButtonPress: function() {
   		alert("Demo button was pressed");
   	}
   });
});