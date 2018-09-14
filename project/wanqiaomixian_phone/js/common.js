$(function(){
	//banner图
	var mySwiper = new Swiper('.swiper-banner',{
		loop: true,
		autoplay: 3000,
		nextButton: '.next',
		prevButton: '.prev',
		pagination: '.swiper-pagination'
	})
	
	//右侧导航
	var nav_flag = true;
	$('#menu_btn').click(function(){
		if(nav_flag){
			$(".nav-wrapper").slideDown(300);
			$('.bg').css({'display':'block'});
			nav_flag = false;
		}else{
			$(".nav-wrapper").slideUp(200);
			$('.bg').css({'display':'none'});
			nav_flag = true;
		}
	})
	
	$('.bg').click(function(){
		if(!nav_flag){
			$(".nav-wrapper").slideUp(200);
			$('.bg').css({'display':'none'});
			nav_flag = true;
		}
	})
})
