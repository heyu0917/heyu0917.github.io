
var timer,timeout;

$(function(){
	//mouseover控制按钮，切换轮播图
	change_banner();

	//第四屏手机图片轮播
	bg4_img_change();

	//微信扫码图出现和隐藏
	$("#fwin_weixin_box").mouseenter(function(){
		$("#h_weixin").show(500);
	})

	$("#fwin_weixin_box").mouseleave(function(){
		$("#h_weixin").hide(500);
	})

	//右侧栏大小窗口的切换
	$("#fwin_close_box").click(function(){
		$(".float-win").hide(300);
		$("#float_sm_box").show(300);
	})

	$("#float_sm_box").click(function(){
		$(".float-win").show(300);
		$("#float_sm_box").hide(300);
	})
	timer = setInterval(timeout,4000);

	var height = $(window).height();

	if(height <= 800){
		$("#myRoundabout img").eq(1).attr("src",'images/bg6_img1_900.jpg');
		$("#myRoundabout img").eq(2).attr("src",'images/bg6_img2_900.jpg');					
		$("#myRoundabout img").eq(3).attr("src",'images/bg6_img3_900.jpg');	
		$("#myRoundabout img").eq(4).attr("src",'images/bg6_img4_900.jpg');	
	}


})
function change_banner(){
	var index = 0;
	var _index;

	$(".ctrl-i").mouseover(function(){
		clearInterval(timer);
		$(this).addClass("ctrl-i_active");
		$(this).siblings().removeClass("ctrl-i_active");

		_index = $(this).index();
		var value = _index+1;
		$(".main-i").removeClass("main-i_active");
		$(".main-i").removeClass("main-i_right");

		$(".main-i").eq(_index).addClass("main-i_active");
		
		setTimeout(function(){
			$("#main_background").find(".main-i-img").css("background",'url(images/banner'+value+'_1920.jpg)');
			},1000);

		var a_0 = _index-1,
			a_1 = _index-2,
			a_2 = _index-3;

		$(".main-i").eq(a_0).addClass("main-i_right");
		$(".main-i").eq(a_1).addClass("main-i_right");
		$(".main-i").eq(a_2).addClass("main-i_right");
	})


	$(".ctrl-i").mouseout(function(){
		timer = setInterval(timeout,4000);
	})

	timeout = function(){
		var a;
		index++;
		var length = $(".ctrl-i").length;

		if(index >= length){
			index = 0;
		}
		
		if(_index || _index == 0){
			a = _index + 1;
			//console.log(_index +' '+ a);
		}else{
			a = index;
		}
		//console.log(_index +' '+ index +' '+ a);

		if(a >= length){
			a = 0;
		}

		var b = a + 1;

		$(".main-i").removeClass("main-i_active");
		$(".main-i").removeClass("main-i_right");
		$(".main-i").eq(a).addClass("main-i_active");

		$(".ctrl-i").eq(a).addClass("ctrl-i_active").siblings().removeClass("ctrl-i_active");

		setTimeout(function(){
			$("#main_background").find(".main-i-img").css("background",'url(images/banner'+b+'_1920.jpg)');
		},1000);
		_index++;
		if(_index >= length){
			_index = 0;
		}
	};
}

function bg4_img_change(){
	var _index = 0;
	$("#section3_btn").find("li").mouseover(function(){
		$(this).addClass("btn-sel").siblings().removeClass("btn-sel");

		var index = $(this).index();

		$("#bg3_ul1").find("li").eq(index).fadeIn("slow").siblings().hide();
		$("#bg3_ul2").find("li").eq(index).fadeIn("slow").siblings().hide();
		$("#bg3_ul3").find("li").eq(index).fadeIn("slow").siblings().hide();
	})

	setInterval(function(){
		_index++;
		var length=$("#section3_btn").find("li").length;
		if(_index >= length){
			_index = 0;
		}
		$("#section3_btn").find("li").eq(_index).addClass("btn-sel").siblings().removeClass("btn-sel");
		$("#bg3_ul1").find("li").eq(_index).fadeIn("slow").siblings().hide();
		$("#bg3_ul2").find("li").eq(_index).fadeIn("slow").siblings().hide();
		$("#bg3_ul3").find("li").eq(_index).fadeIn("slow").siblings().hide();
	},3000);
}


