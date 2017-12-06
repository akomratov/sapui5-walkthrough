sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("demo.wt.controller.HelloPanel", {
	   oData: { target: { name: "Target model" } },
	   onDemoButtonPress: function() {
		   var oResBundle = this.getView().getModel("i18n").getResourceBundle();
		   var sTargetName = this.getView().getModel().getProperty("/target/name");
		   var sMessage = oResBundle.getText("messageGreeting", sTargetName);
		   MessageToast.show(sMessage);
	   },
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
	    }
	    
  ///////////////////////////////////////////////
  // OLDER IMPLEMENTATION OF openDialog() and closeDialog()
  // BEFORE Reuse Dialog approach was implemented
  //
  //    onOpenDialog : function () {
      	
  //       var oView = this.getView();
  //       var oDialog = oView.byId("helloDialog");
         
  //       // create dialog lazily
  //       if (!oDialog) {
  //          // create dialog via fragment factory
  //          oDialog = sap.ui.xmlfragment(oView.getId(), "demo.wt.view.HelloDialog", this);
  //          oView.addDependent(oDialog);
  //       }
  //       oDialog.open();
  //    },
 
		// onCloseDialog : function () {
		// 	this.getView().byId("helloDialog").close();
		// }

   });
});