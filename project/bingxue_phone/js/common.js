$(function(){
	
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$(this).find('.img3').removeClass('none');
			$(this).find('.img2').addClass('none');
			$('.menu').animate({right: 0},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$(this).find('.img2').removeClass('none');
			$(this).find('.img3').addClass('none');
			$('.menu').animate({right: '-50%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	$('.bg').on('click',function(){
		$(this).find('.img2').removeClass('none');
		$(this).find('.img3').addClass('none');
		$('.menu').animate({right: '-50%'},'100');
		$('.bg').hide();
		img_flag = true;
	})
	
	$('.menu .title').on('click',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
	
})
