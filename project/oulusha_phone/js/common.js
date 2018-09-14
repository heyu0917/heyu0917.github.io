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
			$('.menu').animate({right: 0},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$('.menu').animate({right: '-50%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	
	$('.bg').click(function(){
		$('.menu').animate({right: '-50%'},'100');
		$('.bg').hide();
		img_flag = true;
	})
	
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
})
