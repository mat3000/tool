
/*(function(root, factory){

	log.orange('okk');
	log.orange(root, 'root');
	log.orange(factory, 'factory');

}(this, function(machin){

	log.orange(this, 'this');
	log.orange(machin,'machin');

}));*/

var tool = {

// environement v0.0
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

// regex v0.0
	regex : {
		url : function(string){},
		email : function(){},
		tel : function(){},
		creditCard : function(){}
	},

// notification v0.1
	notif : {
		/*

			http://tympanus.net/Development/NotificationStyles/

			options :
				type : ?
				position : top/bottom | left/middle/right
				animation : ?
				max-notif : number
				auto-close : number | false

			alert / info / button
		*/
		
		defaults : {
			type : null, // ?
			position : 'right', // left/middle/right
			animation : null, // ?
			maxNotif : false, // false | number
			autoClose : false, // true | false
			speed : 400 // number in ms
		},
		$notif : null,
		options : null,
		initialized : false,
		buzy : false,
		mem : [],
		id:0,
		i:1,

		init : function(options){

			var self = this;

			if(self.initialized) return;

			self.options = $.extend( {}, self.defaults, options);

			self.initialized = true;

			$('body').append('<div id="tool-notif" class="tool-notif__top-' + self.options.position + '"></div>');

			self.$notif = $('#tool-notif');

			$(document).on('click', '#tool-notif .tool-notif__close, #tool-notif .tool-notif__confirm', function(){

		        var $tool_notif_box_remove = $(this).parent();

		        var eq = $tool_notif_box_remove.index();
		        var h = $tool_notif_box_remove.outerHeight(true);

		        var $tool_notif_box_aft = $('#tool-notif .tool-notif__box:nth-child(n+'+(eq+2)+')');

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

		alert : function(string, callback){

			var self = this;

			self.init();
			var id = self.id++;
			var type = 'alert';

			self._show_notif('<div class="tool-notif__box tool-notif__box-alert"><div class="tool-notif__content"><b>'+type+' :</b> '+string+'</div><div id="tool-notif__id-'+id+'" class="tool-notif__close"></div></div>');

			$(document).one('click.callback', '#tool-notif__id-'+id, function(){
				if(callback) callback();
			});
		},

		info : function(string, callback){

			var self = this;

			self.init();
			var id = self.id++;
			var type = 'info';

			self._show_notif('<div class="tool-notif__box tool-notif__box-info"><div class="tool-notif__content"><b>'+type+' :</b> '+string+'</div><div id="tool-notif__id-'+id+'" class="tool-notif__close"></div></div>');

			$(document).one('click.callback', '#tool-notif__id-'+id, function(){
				if(callback) callback();
			});

		},

		button : function(string, callback){

			var self = this;

			self.init();
			var id = self.id++;

			self._show_notif('<div class="tool-notif__box tool-notif__box-button"><div class="tool-notif__content">'+string+'</div><div id="tool-notif__id-'+id+'" class="tool-notif__confirm"><span>OK</span></div></div>');

			$(document).one('click.callback', '#tool-notif__id-'+id, function(){
				if(callback) callback();
			});

		},

		_show_notif : function(html, force){

			var self = this;

			if(!self.buzy) 
				self.buzy=true;
			else if(!force){
				self._add_mem(html);
				return;
			}

			var eq = 0;

	        self.$notif.prepend(html);

	        var $tool_notif_box = $('.tool-notif__box', self.$notif);
	        var $tool_notif_box_new = $tool_notif_box.eq(eq);
	        var $tool_notif_box_aft = $('.tool-notif__box:nth-child(n+'+(eq+2)+')', self.$notif);
	        var h = $tool_notif_box_new.outerHeight(true);

	        $tool_notif_box_new
	            .css(tool.css.prefix('transform'), 'scaleY(0)')
	            .css('opacity', '0');

	        $tool_notif_box_aft
	            .css(tool.css.prefix('transform'), 'translateY(-'+h+'px)');

	        setTimeout(function(){

	            $tool_notif_box_new
	            	.css('z-index', self.i++)
	                .css(tool.css.prefix('transition'), tool.css.prefix('transform')+' '+self.options.speed+'ms ease-in-out')
	                .css(tool.css.prefix('transform'), 'scaleY(1)')
	                .css('opacity', '1');

	            $tool_notif_box_aft
	                .css(tool.css.prefix('transition'), tool.css.prefix('transform')+' '+self.options.speed+'ms ease-in-out')
	                .css(tool.css.prefix('transform'), 'translateY(0px)');

	        });

	        setTimeout(function(){
	            
	            $tool_notif_box.css(tool.css.prefix('transition'), '');
	            if(!self._check_mem()) self.buzy=false;

	        },self.options.speed+10);

		},

		_check_mem : function(){
			var self = this;
			if(self.mem.length){
				self._show_notif(self.mem[0], true);
				self.mem.splice(0,1);
				return true;
			}
			return false;	
		},

		_add_mem : function(html){
			var self = this;
			self.mem.push(html)
		}

	},

// dialog v0.0
	dialog : {
		/* 
			http://tympanus.net/Development/DraggableElementsInteraction/
			http://tympanus.net/Development/DialogEffects/

		*/
		defaults : {
			animation : null, // ?
			autoClose : false, // true | false
			speed : 400 // number in ms
		},
		options : null,
		initialized : false,
		// buzy : false,
		// mem : [],
		// id:0,
		// i:1,

		init : function(options){

			var self = this;

			if(self.initialized) return;

			self.options = $.extend( {}, self.defaults, options);

			self.initialized = true;

			$('body').append('<div id="tool-dialog"></div>');

		},

		show : function(string){

			var $html =  $('<div class="tool-dialog__box">\
				                <div class="tool-dialog__header">\
				                    <div class="tool-dialog__title">title</div>\
				                </div>\
				                <div class="tool-dialog__content">'+string+'</div>\
				                <div class="tool-dialog__buttons">\
				                    <div class="tool-dialog__button tool-dialog__candel">cancel</div>\
				                    <div class="tool-dialog__button tool-dialog__ok">ok</div>\
				                </div>\
				            </div>');

            $('#tool-dialog').html($html);

            $html.css('margin-top', -$html.outerHeight(true)/2 );

		}

	},
	
// tooltips v0.0
	tooltips : {
		/*
			http://tympanus.net/Development/TooltipStylesInspiration/

		*/
		init : function(){}
	},
	
// custom scroll v0.0
	customScroll : {
		init : function(){}
	},

// slider v0.0
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
	
// css prefix v1.0
	css : {

		/*
			ref : modernizr
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

