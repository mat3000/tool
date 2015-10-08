var tool = {

// environement
	env : {
		get_browser : function(){},
		ie : function(){},
		firefox : function(){},
		chrome : function(){},
		safari : function(){},
		opera : function(){},
		
		get_device : function(){},
		desktop : function(){},
		mobile : function(){},
		tablet : function(){},
		touch : function(){},
		
		get_os : function(){},
		windows : function(){},
		mac : function(){},
		linux : function(){},
		ios : function(){},
		android : function(){},
		windowsPhone : function(){},
		blackberry : function(){},
		
		online : function(){}
	},

// regex
	regex : {
		url : function(){},
		email : function(){},
		tel : function(){},
		creditCard : function(){}
	},

// notification
	notif : {
		init : function(){},
		alert : function(){}
	},

// dialog
	dialog : {
		/* param : 
			tag
		*/
		init : function(){}
	},
	
// tooltips
	tooltips : {
		init : function(){}
	},
	
// custom scroll
	customScroll : {
		init : function(){}
	},
	
// css prefix
	css : {

		_root : document.documentElement,

		_prop : {
			'boxshadow' : {boxShadow:'', MozBoxShadow:'-moz-', WebkitBoxShadow:'-webkit-'},
			'border-radius' : {borderRadius:'', MozBorderRadius:'-moz-', WebkitBorderRadius:'-webkit-'},
			'transform' : {transform:'', MozTransform:'-moz-', WebkitTransforma:'-webkit-', msTransform:'-ms-', OTransform:'-o-'},
			'transition' : {transition:'', MozTransition:'-moz-', WebkitTransition:'-webkit-', msTransition:'-ms-', OTransition:'-o-'},
			'animation' : {animation:'', MozAnimation:'-moz-', WebkitAnimation:'-webkit-', msAnimation:'-ms-', OAnimation:'-o-'}
		},

		prefix : function(properties){

			var self = this;

			if( !self._prop[properties] ){
				console.log('properties not referenced !');
				return '';
			}

			for(var key in self._prop[properties]){
				if (key in self._root.style){
		            return key;
				}
			}

			console.log('properties not found...');
			return '';

		},

		js : function(properties){

			var self = this;

			if( !self._prop[properties] ){
				console.log('properties not referenced !');
				return properties;
			}

			for(var key in self._prop[properties]){
				if (key in self._root.style){
		            return self._prop[properties][key];
				}
			}

			console.log('properties not found...');
			return Object.keys(self._prop[properties])[0];

		}

	}

}

