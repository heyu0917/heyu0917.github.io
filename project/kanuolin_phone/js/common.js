$(function(){
	var bannerSwiper = new Swiper('.banner-swiper',{
		pagination: '.swiper-pagination',
		autoplay: 3000,
		loop: true
	})
	
	
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$('.menu li .item').hide();
			$('.menu li.active .item').show();
			$('.menu').animate({left: 0},300);
			$('.menu-img span').css({'opacity':'1'});
			$('.bg').show();
			img_flag = false;
		}else{
			$('.menu').animate({left: '-100%'},300);
			$('.menu-img span').css({'opacity':'0'});
			$('.bg').hide();
			img_flag = true;
		}
	})
	
	$('.menu .title').on('click',function(){
		$(this).parent().find('.item').show();
		$(this).parent().siblings().find('.item').hide();
	})
	
	$('.bg').on('click',function(){
		$('.menu').animate({left: '-100%'},300);
		$('.menu-img span').css({'opacity':'0'});
		$('.bg').hide();
		img_flag = true;
	})
	
})
