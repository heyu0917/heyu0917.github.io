$(function(){
	
	//滑动到对应位置，导航固定
	var fontsize = document.documentElement.clientWidth / 7.5;
	var s_top = fontsize * 1.06;
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(scrollTop >= s_top) {
			$(".header").addClass('fixed');
		} else {
			$(".header").removeClass('fixed');
		}
	}	
	
	//页面footer
	var mySwiper = new Swiper ('.footer-swiper', {
	   slidesPerView: 3,
	   resistanceRatio: 0,
	})   
	
	//二级导航的滑动
	var mySwiper = new Swiper ('.nav-swiper', {
	   slidesPerView: 4,
	   resistanceRatio: 0,
	})   
	
	//二级导航的滑动--企业展示
	var mySwiper = new Swiper ('.nav-swiper2', {
	   slidesPerView: 3,
	   resistanceRatio: 0,
	}) 
	
	$(".lazy").lazyload({ threshold : 200 });
	
	//日化线二级导航
	$("#item_list li .title").click(function(){
		if($(this).parent().attr('class') !== 'active'){
			$("#item_list li").attr('class','');
			$("#item_list img").attr('src','../img/rhx/arrowT.png');
			$(this).parent().attr('class','active');
			$(this).find('img').attr('src','../img/rhx/arrowD.png');
		}
	})
	
	//移除vedio-img
	$("#play").click(function(){
	 	var player = document.getElementById("player");
		if(player.pause) {
            player.play();
            //console.log("a")
            $(".vedio-img").remove();
            $(this).css({"display":"none"});
            $("#player").attr("controls","controls");
        }else {
            player.pause();
            $("#play").css({"display":"block"});
             //console.log("b")
        }
	})
})
