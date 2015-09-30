var tool = {

// environement
	env : {
		ie : function(){},
		firefox : function(){},
		chrome : function(){},
		safari : function(){},
		opera : function(){},

		desktop : function(){},
		mobile : function(){},
		tablet : function(){},
		toucheDevice : function(){},

		windows : function(){},
		mac : function(){},
		linux : function(){},

		ios : function(){},
		android : function(){},
		blackberry : function(){},
		windowsPhone : function(){},

		online : function(){},
		offline : function(){}
	},

// regex
	regex : {
		url : function(){},
		email : function(){},
		creditCard : function(){}
	},

// notification
	notif : {
		init : function(){},
		alert : function(){}
	},

// dialog
	dialog : {
		init : function(){}
	},
	
// tooltips
	tooltips : {
		init : function(){}
	},
	
// css prefix
	cssPrefix : {

		test : function(properties){

			var prop = {
				'boxshadow' : {boxShadow:'', MozBoxShadow:'-moz-', WebkitBoxShadow:'-webkit-'},
				'border-radius' : {borderRadius:'', MozBorderRadius:'-moz-', WebkitBorderRadius:'-webkit-'},
				'transform' : {transform:'', MozTransform:'-moz-', WebkitTransform:'-webkit-', msTransform:'-ms-', OTransform:'-o-'},
				'transition' : {transition:'', MozTransition:'-moz-', WebkitTransition:'-webkit-', msTransition:'-ms-', OTransition:'-o-'},
				'animation' : {animation:'', MozAnimation:'-moz-', WebkitAnimation:'-webkit-', msAnimation:'-ms-', OAnimation:'-o-'}
			};

			if( !prop[properties] ){
				console.log('properties not referenced !');
				return '';
			}

			var root=document.documentElement;

			for(key in prop[properties]){
				if (key in root.style)
		            return prop[properties][key];
			}

			console.log('Unkwon error...');
			return '';

		}

	}

}

