
/*(function(root, factory){

	log.orange('okk');
	log.orange(root, 'root');
	log.orange(factory, 'factory');

}(this, function(machin){

	log.orange(this, 'this');
	log.orange(machin,'machin');

}));*/

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
		url : function(string){},
		email : function(){},
		tel : function(){},
		creditCard : function(){}
	},

// notification
	notif : {
		/*

			http://tympanus.net/Development/NotificationStyles/

			param :
				type
				position
				animation
				max notif
				auto close

			alert / info / button
		*/
		initialized : false,
		init : function(param){

			var self = this;

			self.initialized = true;

		},
		alert : function(){

			var self = this;

			if(!self.initialized) self.init();

		}
	},

// dialog
	dialog : {
		/* 
			http://tympanus.net/Development/DraggableElementsInteraction/
			http://tympanus.net/Development/DialogEffects/

			param : 
				tag
		*/
		init : function(){}
	},
	
// tooltips
	tooltips : {
		/*
			http://tympanus.net/Development/TooltipStylesInspiration/

		*/
		init : function(){}
	},
	
// custom scroll
	customScroll : {
		init : function(){}
	},

// slider
	slider : {
		/*
		param
			type d'anim
			tag

		*/
		init : function(){

			self = this;
			// log.violet(self)

			// log.violet(tool)

			// log.violet( self._self )
		}
	},
	
// css prefix
	css : {

		_root : document.documentElement,

		_prop : {
			'boxshadow' : {boxShadow:'', WebkitBoxShadow:'-webkit-', MozBoxShadow:'-moz-'},
			'border-radius' : {borderRadius:'', WebkitBorderRadius:'-webkit-', MozBorderRadius:'-moz-'},
			'transform' : {transform:'', WebkitTransforma:'-webkit-', MozTransform:'-moz-', msTransform:'-ms-', OTransform:'-o-'},
			'transition' : {transition:'', WebkitTransition:'-webkit-', MozTransition:'-moz-', msTransition:'-ms-', OTransition:'-o-'},
			'animation' : {animation:'', WebkitAnimation:'-webkit-', MozAnimation:'-moz-', msAnimation:'-ms-', OAnimation:'-o-'}
		},

		prefix : function(properties){

			var self = this;

			if( !self._prop[properties] ){
				console.log('properties not referenced !');
				return '';
			}

			for(var key in self._prop[properties]){
				// log.green(key)
				if (self._prop[properties][key] in self._root.style){
		            return self._prop[properties][key];
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
				if (self._prop[properties][key] in self._root.style){
		            return key;
				}
			}

			console.log('properties not found...');
			return Object.keys(self._prop[properties])[0];

		}

	}

}

