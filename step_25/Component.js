sap.ui.define([
	   "sap/ui/core/UIComponent",
	   "sap/ui/model/json/JSONModel",
		"demo/wt/controller/HelloDialog"
	], function (UIComponent, JSONModel, HelloDialog) {
	
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
				
				// set dialog
				this._helloDialog = new HelloDialog(this.getRootControl());
				
				// IMPORTANT!!! i18n model is instantiated automatically now
			},
			openHelloDialog : function () {
				this._helloDialog.open();
			}
  	    });
	}
);