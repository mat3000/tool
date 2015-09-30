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

		}

		/*transition : function(){

			var self = this;

	        var feature = false,
	            // domPrefixes = 'Webkit Moz ms O'.split(' '),
	            domPrefixes = ['Webkit', 'Moz', 'ms', 'O'],
	            elm = document.createElement('div'),
	            featurenameCapital = null,
	            cssPrefixe = '';

	        featurename = 'transition';

	        if( elm.style[featurename] ) feature = true;

	        if( feature === false ) {
	            featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
	            for( var i = 0; i < domPrefixes.length; i++ ) {

	                if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {
	                  feature = true;
	                  cssPrefixe = '-'+domPrefixes[i].toLowerCase()+'-';
	                  break;
	                }
	            }
	        };

	        return cssPrefixe;

	        return feature;

	        // if(self.debug) log.yellow(feature, '_checkCssTransition');

	        // self.cssTransition = feature;

	    }*/

	}

}

