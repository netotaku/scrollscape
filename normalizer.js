			var n = (function(){
				
				var env = BrowserDetect.browser;

				switch(env){
					
					case 'Chrome':
					case 'safari': 
						
						env = 'Webkit';

					break;

				}

				var cnf = {
					
					Webkit: {
						
						transitionEnd: 'webkitTransitionEnd',
						transform: '-webkit-transform'

					},

					Gecko: {
						
						transitionEnd: 'animationend',
						transform: '-moz-transform'

					},

					Explorer: {
						
						transitionEnd: 'MSAnimationEnd',
						transform: '-ms-transform'

					}

				} 

				return {

					property: function(p){
						
						return cnf[env][p] || false;

					},

					css: function(c){
						


					},
					
					browser: function(){
						
						return env;

					},

					trace: function(){
						
					}

				}

			})();