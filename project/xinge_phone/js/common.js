$(function(){
	$("#menu").click(function(){
		$("#nav_list").css({"right":0});	
		$(".bg").fadeIn(300);
		$(".bg").css({"z-index":'11'});

	})
	$('.bg').click(function(){
		$("#nav_list").css({"right":"-110%"});
		$(".bg").fadeOut(300);
		$(".bg").css({"z-index":'-1'});
	})
//	$("#nav_list li h2").click(function(){
//		$(this).next('.er-menu').css({"display":"block"});
//		$(this).parent().siblings().find('.er-menu').css({"display":"none"});
//	})


	
	//懒加载{ threshold : 200 }
	//$("img.lazy").lazyload();
		
	//底部拨打电话
	$("#number_btn").click(function(){
		$('.bg2').css({'opacity':'1','z-index':'112'});
		$('.number-popup').css({'opacity':'1','z-index':'113',"top":"50%"});
	})
	$(".cancel-btn").click(function(){
		$('.bg2').css({'opacity':'0','z-index':'-1'});
		$('.number-popup').css({'opacity':'0','z-index':'-1',"top":"20%"});
	})
	
	//给背景图片高度
	var fontsize = document.documentElement.clientWidth / 6.4;
	var c_h = $('.content').height()- fontsize*3.6;
	var b_h = $(".main").height();
	if(b_h <= c_h){
		$(".bg-img").css({"height":c_h});
	}else{
		$(".bg-img").css({"height":b_h});
	}
	
	//banner图
	var mySwiper = new Swiper ('.swiper-banner', {
		loop: true,
		autoplay: 3000,
		autoplayDisableOnInteraction : false,
		paginationClickable :true,
		pagination: '.swiper-pagination',	
		lazyLoading : true,
	})   
	
})
