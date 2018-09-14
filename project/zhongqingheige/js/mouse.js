var iIndex = '';
(function($){
	var defaults = {
		'container' : '#container',//容器
		'sections' : '.section',//子容器
		'easing' : 'ease',//特效方式，ease-in,ease-out,linear
		'duration' : 1000,//每次动画执行的时间
		'pagination' : true,//是否显示分页
		'loop' : false,//是否循环
		'keyboard' : true,//是否支持键盘
		'direction' : 'vertical',//滑动的方向 horizontal,vertical,
		'onpageSwitch' : function(pagenum){}
	};

	var win = $(window),
		container,sections;

	var opts = {},
		canScroll = true;

	// var iIndex = 0;

	var arrElement = [];

	var SP = $.fn.switchPage = function(options){
		opts = $.extend({}, defaults , options||{});

		container = $(opts.container),
		sections = container.find(opts.sections);

		sections.each(function(){
			arrElement.push($(this));
		});

		return this.each(function(){
			if(opts.direction == "horizontal"){
			initLayout();
			}

			if(opts.pagination){
				initPagination();
			}

			if(opts.keyboard){
				keyDown();
			}

			//click预约试听  切换页面到第八屏
			$("#order_listen").click(function(){
				//$(this).addClass("light").siblings().removeClass("light");				

				var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
					transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];

				//var _index = $(this).index();
				var height = $(window).height();
				var _height = -7*height;
				console.log(_height);
				$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
				iIndex = -_height / height;

				//$("#header_part").addClass("fixed");//使header不在显示区内
			})
		});
	}

	//滚轮向上滑动事件
	SP.moveSectionUp = function(){
		if(iIndex){
			iIndex--;
		}else if(opts.loop){
			iIndex = arrElement.length-1;
		}
		scrollPage(arrElement[iIndex]);
	};

	//滚轮向下滑动事件
	SP.moveSectionDown = function(){
		if(iIndex<(arrElement.length-1)){
			iIndex++;
		}else if(opts.loop){
			iIndex = 0;
		}
		scrollPage(arrElement[iIndex]);
	};

	//私有方法
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

	//横向布局初始化
	function initLayout(){
		var length = sections.length,
			width = (length*100)+"%",
			cellWidth = (100/length).toFixed(2)+"%";
		container.width(width).addClass("left");
		sections.width(cellWidth).addClass("left");
	}

	//初始化分页
	function initPagination(){
		var length = sections.length;
		if(length){

		}
		var pageHtml = '<ul id="pages"><li class="active"></li>';
		for(var i=1;i<length;i++){
			pageHtml += '<!--<li></li>-->';
		}
		pageHtml += '</ul>';
		$("body").append(pageHtml);
	}

	//分页事件
	function paginationHandler(){
		var pages = $("#pages li");
		pages.eq(iIndex).addClass("active").siblings().removeClass("active");
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

		canScroll = false;
		if(isSuportCss(transform) && isSuportCss(transition)){
			var traslate = "";
			if(opts.direction == "horizontal"){
				traslate = "-"+dest.left+"px, 0px, 0px";
			}else{
				traslate = "0px, -"+dest.top+"px, 0px";
			}
			container.css({
				"transition":"all "+opts.duration+"ms "+opts.easing,
				"transform":"translate3d("+traslate+")"
			});
			container.on("webkitTransitionEnd msTransitionend mozTransitionend transitionend",function(){
				canScroll = true;
			});

			//判断header是否出现
//			if(dest.top == 0){
//				$("#header_part").removeClass("fixed");
//			}else{
//				$("#header_part").addClass("fixed");
//			}
			//页面滚动就默认第一个li
			$(".nav-list li").eq(0).addClass('light').siblings().removeClass("light");
			//从其它页面进入到首页的第七屏

			//页面滚动的动画 
			//第一屏，有把动画的class带上，为了刷新页面时有动画
			window._animateName = "fadeIn fadeInRight fadeInLeft fadeInUp fadeInDown zoomIn hidden scaleIn";
			if($(".section").length>0){
				$(".pagenow").removeClass(window._animateName);
				var window_height = $(window).height();
				var page_num = parseInt(dest.top) / window_height;

				var _pBox = $(".section").eq(page_num).find(".pagenow"),
			  		_pBoxLen = _pBox.length;
			  	for(var n=0;n<_pBoxLen;n++){
					 var _pBoxItem = _pBox.eq(n);
					 var  _date = _pBoxItem.attr("data-rel");
					 _pBoxItem.removeClass(_animateName).addClass(_date);
				  }
			}

		}else{
			var cssObj = (opts.direction == "horizontal")?{left: -dest.left}:{top: -dest.top};
			container.animate(cssObj, opts.duration, function(){
				canScroll = true;
			});
		}
		element.addClass("active").siblings().removeClass("active");
		if(opts.pagination){
			paginationHandler();
		}
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
			paginationHandler();
			var cuerrentElement = arrElement[iIndex],
				dest = cuerrentElement.position();
			initEffects(dest,cuerrentElement);
		}
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
})(jQuery);

$(function(){
	//console.log(window.location.hash);
	if(window.location.hash == "#global_center"){
		var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
			transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];
		var _height = -7*$(window).height();
		$("#container").css({transition:"all 1000ms ease",transform:'translate3d(0px,'+_height+'px,0px)'});
		iIndex = 7;
	}
})