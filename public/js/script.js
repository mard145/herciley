function start(){	
	
};

function startF(){	
	setTimeout(function () {
		//$('.car1').css({marginRight:-500}).stop().delay(100).animate({marginRight:0},1200,'easeOutBack');

	}, 200);
};

function showSplash(){
	setTimeout(function () {
		$('.menu').stop().delay(0).animate({marginTop:50, opacity:0},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
		$('.close').stop().delay(0).animate({opacity:0},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });

		$('.slogan1').css({display:'block'}).stop().delay(400).animate({marginTop:0, opacity:1},1200,'easeOutExpo');
		$('.enter').css({display:'block'}).stop().delay(450).animate({marginTop:0, opacity:1},1200,'easeOutExpo');

		$('header, .hl').stop().delay(500).animate({marginTop:0},800,'easeInOutExpo');
		$('.hl1, .hl2').stop().delay(500).animate({marginTop:0},800,'easeInOutExpo');

		$('.girl1, .girl2').stop().delay(500).animate({marginLeft:0},800,'easeInOutExpo');

		$('.kv1, .kv3').stop().delay(500).animate({width:480},800,'easeInOutExpo');
		$('.kv2').stop().delay(500).animate({width:480},800,'easeInOutExpo');

		$('.splash').css({visibility:'visible', marginTop:0, marginRight:0}).stop().delay(800).animate({marginRight:0, opacity:1},1200,'easeOutExpo');


	}, 100);	
};
function hideSplash(){ 		
	$('.splash').stop().animate({marginTop:480, opacity:0},800,'easeOutExpo', function(){ $(this).css({visibility:'hidden'}); });

	$('.kv1, .kv3').stop().animate({width:260},800,'easeInOutExpo');
	$('.kv2').stop().animate({width:700},800,'easeInOutExpo');

	$('.girl1, .girl2').stop().delay(0).animate({marginLeft:-180},800,'easeInOutExpo');

	$('header, .hl').stop().delay(0).animate({marginTop:-45},800,'easeInOutExpo');
	$('.hl1, .hl2').stop().delay(0).animate({marginTop:-11},800,'easeInOutExpo');

	$('.enter').stop().delay(0).animate({marginTop:50, opacity:0},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });
	$('.slogan1').stop().delay(50).animate({marginTop:50, opacity:0},800,'easeInOutExpo', function(){ $(this).css({display:'none'}); });

	$('.close').css({display:'block'}).stop().delay(400).animate({opacity:1},1200,'easeOutExpo');
	$('.menu').css({display:'block'}).stop().delay(700).animate({opacity:1, marginTop:0},1200,'easeOutExpo');


};
function hideSplashQ(){	
	$('.splash').css({marginTop:480, opacity:0, visibility:'hidden'});
	$('.kv1, .kv3').css({width:260});
	$('.kv2').css({width:700});
	$('.girl1, .girl2').css({marginLeft:-180});
	$('header, .hl').css({marginTop:-45});
	$('.hl1, .hl2').css({marginTop:-11});
	$('.enter').css({marginTop:50, opacity:0, display:'none'});
	$('.slogan1').css({marginTop:50, opacity:0, display:'none'});
	$('.close').css({opacity:1, display:'block'});
	$('.menu').css({opacity:1, display:'block', marginTop:0});

	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});

	/////// icons
	$(".icons li").find("a").css({opacity:0.5});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1, marginTop:-7 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).stop().animate({opacity:0.5, marginTop:0 }, 400, 'easeOutExpo' );		   
	});

	// slider
	$('.slider')._TMS({
			show:0,
			nextBu:'.snext',
			prevBu:'.sprev',
			pauseOnHover:false,
			duration:800,
			preset:'verticalLines',
            easing:"easeOutExpo",
			pagination:false,//'.pagination',true,'<ul></ul>'
			pagNums:false,
			slideshow:5000,
			numStatus:false,
			banners:false,    // false 'fromLeft', 'fromRight', 'fromTop', 'fromBottom', 'fade'
			waitBannerAnimation:true,
			bannerEasing:'easeInOutExpo',
			bannerDuration:1000
	});

	/////// sprev anext
	$(".sprev, .snext").find("span").css({opacity:0.3});
	$(".sprev, .snext").hover(function() {
		$(this).find("span").stop().animate({opacity:0.8 }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find("span").stop().animate({opacity:0.3 }, 400, 'easeOutExpo' );		   
	});

	/////// enter
	$(".enter").find(".over1").css({opacity:0});
	$(".enter").hover(function() {
		$(this).find(".over1").stop().animate({opacity:1 }, 400, 'easeOutExpo');		    
		$(this).find(".txt1").stop().animate({color:"#ffffff" }, 400, 'easeOutExpo');		    
	},function(){
	    $(this).find(".over1").stop().animate({opacity:0 }, 400, 'easeOutExpo' );	
	    $(this).find(".txt1").stop().animate({color:"#536569" }, 400, 'easeOutExpo');		    	   
	});

	////// submenu
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });	

	
	
	
	
	
	
	
	// for lightbox
	$("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
	
	
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: false,
		verticalGutter: 16,
		verticalDragMinHeight: 109,
		verticalDragMaxHeight: 109
	});	
	
	
	
	//content switch	
	$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',top:0, left:-700});		   
		   $('.close').css({opacity:0, display:'none'});
		   $('.menu').css({opacity:0, display:'none', marginTop:50});
        },
        actFu:function(_){
			var Delay=300; // default
        	if( (_.pren == undefined) ){ // on reload
        		Delay=0;
        	}
        	if( (_.pren == 0) ){ // on click
        		Delay=600;
        	}
        	//console.log(_.pren, Delay);
			if(_.curr){
				_.curr.css({display:'block', top:0, left:-700}).stop().delay(Delay).animate({top:0, left:0},800, 'easeInOutExpo');	                
			}   
			if(_.prev){
				_.prev.stop().animate({top:480, left:0},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
			}
            		
			//console.log(_.pren, _.n);
			if ( (_.pren == undefined) && (_.n <= 0) ){                
                startF();
                //console.log("startF");
            }			
            if ( (_.n == 0) && (_.pren >= 0) ){
                showSplash();
                //console.log("showSplash");
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();
                //console.log("hideSplash");  
            }
			if ( (_.pren == undefined) && (_.n >= 1) ){
                _.pren = -1;
                hideSplashQ();
                //console.log("hideSplashQ");
            }
            //console.log("///////////////////////////");
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_SPLASH',
        hoverIn:function(li){ 			
			$('.txt1',li).stop().animate({top:38},400, 'easeOutExpo');
			$('.txt2',li).stop().animate({top:0},400, 'easeInOutExpo');
        },
        hoverOut:function(li){	
		    if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('.txt1',li).stop().animate({top:0},400, 'easeOutExpo');
     			$('.txt2',li).stop().animate({top:-38},400, 'easeOutExpo'); 				
			};
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	

	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});
		start();
	}, 200);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});