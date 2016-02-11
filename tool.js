
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

			options :
				type : ?
				position : top/bottom | left/middle/right
				animation : ?
				max notif : number
				auto close : true | false

			alert / info / button
		*/
		
		defaults : {
			type : null, // ?
			position : 'top-right', // top | left/middle/right
			animation : null, // ?
			maxNotif : false, // false | number
			autoClose : false, // true | false
			speed : 400 // number in ms
		},
		options : null,
		initialized : false,
		buzy : false,
		mem : [],

		init : function(options){

			var self = this;

			if(self.initialized) return;

			self.options = $.extend( {}, self.defaults, options);

			self.initialized = true;

			$('body').append('<div id="tool-notif" class="tool-notif-' + self.options.position + '"></div>');

			$(document).on('click', '#tool-notif .tool-notif-close', function(){

		        var $tool_notif_box_remove = $(this).parent();

		        var eq = $tool_notif_box_remove.index();
		        var h = $tool_notif_box_remove.outerHeight(true);

		        var $tool_notif_box_aft = $('#tool-notif .tool-notif-box:nth-child(n+'+(eq+2)+')');

		        $tool_notif_box_remove
		            .css('transform', 'scaleY(1)')
		            .css('opacity', '1');


		        $tool_notif_box_aft
		            .css('transform', 'translateY(0px)');

		        setTimeout(function(){

		            $tool_notif_box_remove
		                .css('transition', 'all '+self.options.speed+'ms ease-in-out')
		                .css('transform', 'scaleY(0)')
		                .css('opacity', '0');

		            $tool_notif_box_aft
		                .css('transition', 'transform '+self.options.speed+'ms ease-in-out')
		                .css('transform', 'translateY(-'+h+'px)');

		        },0);

		        setTimeout(function(){
		            
		            $tool_notif_box_remove.remove();

		            $tool_notif_box_aft
		                .css('transition', '')
		                .css('transform', '');

		        },self.options.speed+10);

    		});

		},
		alert : function(string){

			var self = this;

			self.init();

			self._show_notif('alert', string);

		},
		
		info : function(string){

			var self = this;

			self.init();

			self._show_notif('info', string);

		},

		_show_notif : function(type, string, force){

			var self = this;

			if(!self.buzy) 
				self.buzy=true;
			else if(!force){
				self._add_mem(type, string);
				return;
			}

			var eq = 0;

	        $('#tool-notif').prepend('<div class="tool-notif-box tool-notif-box-'+type+'"><div class="tool-notif-content"><b>'+type+' :</b> '+string+'</div><div class="tool-notif-close"></div></div>');

	        var $tool_notif_box = $('#tool-notif .tool-notif-box');
	        var $tool_notif_box_new = $tool_notif_box.eq(eq);
	        var $tool_notif_box_aft = $('#tool-notif .tool-notif-box:nth-child(n+'+(eq+2)+')');
	        var h = $tool_notif_box_new.outerHeight(true);

	        $tool_notif_box_new
	            .css('transform', 'scaleY(0)')
	            .css('opacity', '0');

	        $tool_notif_box_aft
	            .css('transform', 'translateY(-'+h+'px)');

	        setTimeout(function(){

	            $tool_notif_box_new
	                .css('transition', 'all '+self.options.speed+'ms ease-in-out')
	                .css('transform', 'scaleY(1)')
	                .css('opacity', '1');

	            $tool_notif_box_aft
	                .css('transition', 'transform '+self.options.speed+'ms ease-in-out')
	                .css('transform', 'translateY(0px)');

	        });

	        setTimeout(function(){
	            
	            $tool_notif_box.css('transition', '');
	            if(!self._check_mem()) self.buzy=false;

	        },self.options.speed+10);

		},

		_check_mem : function(){
			var self = this;
			if(self.mem.length){
				self._show_notif(self.mem[0].type, self.mem[0].string, true);
				self.mem.splice(0,1);
				return true;
			}
			return false;	
		},

		_add_mem : function(type, string){
			var self = this;
			self.mem.push({type:type, string:string})
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

		/*
			modernizr
		*/

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
			var prefix = '';

			if( !self._prop[properties] ){
				console.error('tool.js -> css : properties not referenced : ' + properties);
				return properties;
			}

			for(var key in self._prop[properties]){
				if (self._prop[properties][key] in self._root.style){
					prefix = self._prop[properties][key];
				}
			}

			return prefix + properties;

		}

	}

}

