// var _idx = 0;
var m = '';
var winW = $(window).width();
var winH = $(window).height();

var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
	transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];

$(function(){
	$(".banner-img img,.section").css({"width": winW, "height": winH});

	//上下切屏
	upDown_screen();

	//点击导航栏切屏
	click_nav();
})

function upDown_screen(){
	var index;
	var len = $("#container").find(".section").length;
	$("#container").css({"height":len*winH});

	var bannerList = document.getElementById("container");

	var startHandler = function(e){
		this.startTime = new Date() * 1;
		this.startY = e.touches[0].pageY;

		this.offsetY = 0;
	}

	var moveHandler = function(e){
		e.preventDefault();
		this.offsetY = e.touches[0].pageY - this.startY;
		
		if(!index){
			index = 0;
		}

		var TOP = -index*winH + this.offsetY;
		//$("#container").css({"top":TOP+'px',transition: 'none'});
	}

	var endHandler = function(e){
		var boundary = winH / 6;
		var endTime = new Date() * 1;
		
		if(endTime - this.startTime > 300){
			if(this.offsetY >= boundary){
				goPage('-1');
			}else if(this.offsetY < -boundary){
				goPage('+1');
			}else{
				goPage('0');
			}
		}else{
			if(this.offsetY >= 50){
				goPage('-1');
			}else if(this.offsetY < -50){
				goPage('+1');
			}else{
				goPage('0');
			}
		}
	}

	bannerList.addEventListener('touchstart',startHandler);
	bannerList.addEventListener('touchmove',moveHandler);
	bannerList.addEventListener('touchend',endHandler);
}

function goPage(n){
	if(m == '') m = 0;

	var idx = m;
	var cidx;
	var len = $("#container").find('.section').length;

	if(typeof n == 'number'){
		cidx = idx;
	}else if(typeof n == 'string'){
		cidx = idx + n*1;
	}

	if(cidx > len-1){
		cidx = len - 1;
	}else if(cidx < 0){
		cidx = 0;
	}

	m = cidx;
	index = cidx;
	$("#container").css({"top":'-'+cidx*winH+'px',transition: 'all .5s ease-out'});
	if(cidx > 0){
		$(".header").css({"background":"rgba(24, 170, 244,.6)"});
	}else{
		$(".header").css({"background":"none"});
	}


	//滑动引起导航栏的变化
	$("#nav_list").find("li").removeClass("active");
	if(cidx == 0){
		$("#nav_list").find("li").eq(0).addClass("active");
	}else if(cidx == 1){
		$("#nav_list").find("li").eq(1).addClass("active");
	}else if(cidx == 2 || cidx == 3){
		$("#nav_list").find("li").eq(2).addClass("active");
	}else if(cidx == 4){
		$("#nav_list").find("li").eq(3).addClass("active");
	}else if(cidx == 5 || cidx == 6 || cidx == 7){
		$("#nav_list").find("li").eq(4).addClass("active");
	}else if(cidx == 8){
		$("#nav_list").find("li").eq(5).addClass("active");
	}else{
		$("#nav_list").find("li").eq(6).addClass("active");
	}
}  

function click_nav(){
	$("#nav_list").find("li").click(function(){
		var d = $(this).index();
		var h;
		var n;

		$("#nav_list").find("li").removeClass("active");

		if(d == 0){
			h = 0;
			$("#container").css({"top":'-'+h+'px',transition: 'all .5s ease-out'});
		}else if(d == 1){
			h = 1*winH;
			$("#container").css({"top":'-'+h+'px',transition: 'all .5s ease-out'});
		}else if(d == 2){
			h = 2*winH;
			$("#container").css({"top":'-'+h+'px',transition: 'all .5s ease-out'});
		}else if(d == 3){
			h = 4*winH;
			$("#container").css({"top":'-'+h+'px',transition: 'all .5s ease-out'});
		}else if(d == 4){
			h = 5*winH;
			$("#container").css({"top":'-'+h+'px',transition: 'all .5s ease-out'});
		}else if(d == 5){
			h = 8*winH;
			$("#container").css({"top":'-'+h+'px',transition: 'all .5s ease-out'});
		}else{
			h = 9*winH;
			$("#container").css({"top":'-'+h+'px',transition: 'all .5s ease-out'});
		}


		$("#nav_list").find("li").eq(d).addClass("active");

		n = h / winH;
		m = n;

		//头部背景
		if(d > 0){
			$(".header").css({"background":"rgba(24, 170, 244,.6)"});
		}else{
			$(".header").css({"background":"none"});
		}
	})
}













 