var iIndex = '';
(function($){
	var defaults = {
		'container' : '#container',//容器
		'sections' : '.section',//子容器
		'easing' : 'ease',//特效方式，ease-in,ease-out,linear
		'duration' : 1000,//每次动画执行的时间
		'loop' : true,//是否循环
		'keyboard' : true,//是否支持键盘
		'direction' : 'vertical',//滑动的方向 horizontal,vertical,
		'onpageSwitch' : function(pagenum){}
	};

	var win = $(window),
		container,sections;

	var opts = {},
		canScroll = true;

	var arrElement = [];

	var SP = $.fn.switchPage = function(options){
		opts = $.extend({}, defaults , options||{});

		container = $(opts.container),
		sections = container.find(opts.sections);

		sections.each(function(){
			arrElement.push($(this));
		});

		return this.each(function(){
			if(opts.keyboard){
				keyDown();
			}
			//click导航栏，切换页面
			nav_change();
		});
	}

	//滚轮向上滑动事件
	SP.moveSectionUp = function(){
		if(iIndex){
			iIndex--;
		}else if(opts.loop){
			iIndex = 0;
		}
		scrollPage(arrElement[iIndex]);
	};

	//滚轮向下滑动事件
	SP.moveSectionDown = function(){
		if(iIndex<(arrElement.length-1)){
			iIndex++;
		}else if(opts.loop){
			iIndex = arrElement.length-1;
		}
		scrollPage(arrElement[iIndex]);
	};

	//页面滚动事件
	function scrollPage(element){
		var dest = element.position();
		if(typeof dest === 'undefined'){ return; }
		initEffects(dest,element);
	}

	//重写鼠标滑动事件
	$(document).on("mousewheel DOMMouseScroll", MouseWheelHandler);
	function MouseWheelHandler(e) {
		e.preventDefault();
		var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
		var delta = Math.max(-1, Math.min(1, value));
		if(canScroll){
			if (delta < 0) {
				SP.moveSectionDown();
			}else {
				SP.moveSectionUp();
			}
		}
		return false;
	}

	//是否支持css的某个属性
	function isSuportCss(property){
		var body = $("body")[0];
		for(var i=0; i<property.length;i++){
			if(property[i] in body.style){
				return true;
			}
		}
		return false;
	}

	//渲染效果
	function initEffects(dest,element){
		var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
			transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];
		var height = $(window).height();
		var num = dest.top/height;
		
		canScroll = false;
		if(isSuportCss(transform) && isSuportCss(transition)){
			var traslate = "";
			if(opts.direction == "vertical"){
				traslate = "0px, -"+dest.top+"px, 0px";
			}
			container.css({
				"transition":"all "+opts.duration+"ms "+opts.easing,
				"transform":"translate3d("+traslate+")"
			});
			container.on("webkitTransitionEnd msTransitionend mozTransitionend transitionend",function(){
				canScroll = true;
			});

			//根据页面位置确定导航线出现的位置
			$(".nav-line").find("i").removeClass("line-active");
			$(".nav").find("li").removeClass("select");
			if(num == 0){
				$(".nav-line").find("i").eq(0).addClass("line-active");
				$(".nav").find("li").eq(0).addClass("select");
			}
			if(num == 1){
				$(".nav-line").find("i").eq(1).addClass("line-active");
				$(".nav").find("li").eq(1).addClass("select");
			}
			if(num == 2 || num == 3){
				$(".nav-line").find("i").eq(2).addClass("line-active");
				$(".nav").find("li").eq(2).addClass("select");
			}
			if(num == 4){
				$(".nav-line").find("i").eq(3).addClass("line-active");
				$(".nav").find("li").eq(3).addClass("select");
			}
			if(num == 5 || num == 6 || num == 7){
				$(".nav-line").find("i").eq(4).addClass("line-active");
				$(".nav").find("li").eq(4).addClass("select");
			}
			if(num == 8){
				$(".nav-line").find("i").eq(5).addClass("line-active");
				$(".nav").find("li").eq(5).addClass("select");
			}
			if(num == 9){
				$(".nav-line").find("i").eq(6).addClass("line-active");
				$(".nav").find("li").eq(6).addClass("select");
			}
		}else{
			var cssObj ={top: -dest.top};
			container.animate(cssObj, opts.duration, function(){
				canScroll = true;
			});
			//根据页面位置确定导航线出现的位置
			$(".nav-line").find("i").removeClass("line-active");
			$(".nav").find("li").removeClass("select");
			if(num == 0){
				$(".nav-line").find("i").eq(0).addClass("line-active");
				$(".nav").find("li").eq(0).addClass("select");
			}
			if(num == 1){
				$(".nav-line").find("i").eq(1).addClass("line-active");
				$(".nav").find("li").eq(1).addClass("select");
			}
			if(num == 2 || num == 3){
				$(".nav-line").find("i").eq(2).addClass("line-active");
				$(".nav").find("li").eq(2).addClass("select");
			}
			if(num == 4){
				$(".nav-line").find("i").eq(3).addClass("line-active");
				$(".nav").find("li").eq(3).addClass("select");
			}
			if(num == 5 || num == 6 || num == 7){
				$(".nav-line").find("i").eq(4).addClass("line-active");
				$(".nav").find("li").eq(4).addClass("select");
			}
			if(num == 8){
				$(".nav-line").find("i").eq(5).addClass("line-active");
				$(".nav").find("li").eq(5).addClass("select");
			}
			if(num == 9){
				$(".nav-line").find("i").eq(6).addClass("line-active");
				$(".nav").find("li").eq(6).addClass("select");
			}
		}

		//判断header背景是否出现
		if(-dest.top<0){
			$(".header-bg").css({"opacity":.6,"filter":"Alpha(opacity=60)"});
		}else{
			$(".header-bg").css({"opacity":0,"filter":"Alpha(opacity=0)"});
		}

		//动画
		if(num == 1){
			$(".bg2_img_box li i").addClass("bg2_i_cur");
		}
		if(num == 4){
			$(".bg5-img1,.bg5-img2,.bg5-img3,.bg5-img4").addClass("bg5-img13_cur");
		}
		if(num == 5){
			$("#work_pic").find("i").css("transition","all 1s ease-in");
			$("#work_pic").find("i").addClass("number-scale");
		}
		if(num == 6){
			$("#advantage_content").find("li div").css("transition","all .6s ease-in");
			$("#advantage_content").find("li div").addClass("bg7_li_cur");
		}
		if(num == 7){
			$("#free_order").css("transition","all .6s ease-in");
			$("#free_order").addClass("free-order-cur");
		}

		back_top();
	}

	//绑定键盘事件
	function keyDown(){
		var keydownId;
		win.keydown(function(e){
			clearTimeout(keydownId);
			keydownId = setTimeout(function(){
				var keyCode = e.keyCode;
				if(keyCode == 37||keyCode == 38){
					SP.moveSectionUp();
				}else if(keyCode == 39||keyCode == 40){
					SP.moveSectionDown();
				}
			},150);
		});
	}

	function nav_change(){
		$("#nav").find("li").click(function(){
			var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
				transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];

			var _index = $(this).index();
			var height = $(window).height();
			var _height,n;
			if(isSuportCss(transform) && isSuportCss(transition)){
				if(_index == 0){
					_height = 0;
					$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				}
				if(_index == 1){
					_height = -height;
					$(".bg2_img_box li i").addClass("bg2_i_cur");
					$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				}
				if(_index == 2){
					_height = -2*height;
					$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				}
				if(_index == 3){
					_height = -4*height;
					$(".bg5-img1,.bg5-img2,.bg5-img3,.bg5-img4").addClass("bg5-img13_cur");
					$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				}
				if(_index == 4){
					_height = -5*height;
					$("#work_pic").find("i").css("transition","all 1s ease-in");
					$("#work_pic").find("i").addClass("number-scale");
					$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				}
				if(_index == 5){
					_height = -8*height;
					$("#free_order").css("transition","all .6s ease-in");
					$("#free_order").addClass("free-order-cur");
					$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				}
				if(_index == 6){
					_height = -9*height;
					$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				}
			}else{
				if(_index == 0){
					_height = 0;
					var cssObj = {top: _height};
					container.animate(cssObj, opts.duration, function(){
						canScroll = true;
					});
				}
				if(_index == 1){
					_height = -height;
					var cssObj = {top: _height};
					container.animate(cssObj, opts.duration, function(){
						canScroll = true;
					});
				}
				if(_index == 2){
					_height = -2*height;
					var cssObj = {top: _height};
					container.animate(cssObj, opts.duration, function(){
						canScroll = true;
					});
				}
				if(_index == 3){
					_height = -4*height;
					var cssObj = {top: _height};
					container.animate(cssObj, opts.duration, function(){
						canScroll = true;
					});
				}
				if(_index == 4){
					_height = -7*height;
					var cssObj = {top: _height};
					container.animate(cssObj, opts.duration, function(){
						canScroll = true;
					});
				}
				if(_index == 5){
					_height = -8*height;
					var cssObj = {top: _height};
					container.animate(cssObj, opts.duration, function(){
						canScroll = true;
					});
				}
				if(_index == 6){
					_height = -9*height;
					var cssObj = {top: _height};
					container.animate(cssObj, opts.duration, function(){
						canScroll = true;
					});
				}
			}

			n = -_height / height;
			iIndex = n;

			//click后导航栏颜色变化
			$(this).addClass("select").siblings().removeClass("select");
			$(".nav-line").find("i").removeClass("line-active");
			$(".nav-line").find("i").eq(_index).addClass("line-active");

			//判断header背景是否出现
			if(_height<0){
				$(".header-bg").css({"opacity":.6,"filter":"Alpha(opacity=60)"});
			}else{
				$(".header-bg").css({"opacity":0,"filter":"Alpha(opacity=0)"});
			}

		});

		back_top();
	}

	//窗口Resize
	var resizeId;
	win.resize(function(){
		clearTimeout(resizeId);
		resizeId = setTimeout(function(){
			reBuild();
		},500);
	});

	function reBuild(){
		var currentHeight = win.height(),
			currentWidth = win.width();

		var element = arrElement[iIndex];
		if(opts.direction == "horizontal"){
			var offsetLeft = element.offset().left;
			if(Math.abs(offsetLeft)>currentWidth/2 && iIndex <(arrElement.length-1)){
				iIndex ++;
			}
		}else{
			var offsetTop = element.offset().top;
			if(Math.abs(offsetTop)>currentHeight/2 && iIndex <(arrElement.length-1)){
				iIndex ++;
			}
		}
		if(iIndex){
			var cuerrentElement = arrElement[iIndex],
				dest = cuerrentElement.position();
			initEffects(dest,cuerrentElement);
		}
	}

})(jQuery);

$(function(){
	back_top();
})

function back_top(){
	$("#fwin_backTop_box").click(function(){
		console.log("a");
		$("#container").css({'transform':'translate3d(0,0,0)'});
		iIndex = 0;
		$("#nav ul").find('li').eq(0).addClass("select").siblings().removeClass("select");
		$(".nav-line").find("i").eq(0).addClass("line-active").removeClass("line-active");
		$(".header-bg").css({"opacity":0,"filter":"Alpha(opacity=0)"});

	})
}



