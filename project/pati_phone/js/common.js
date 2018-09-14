$(function(){
	var fontsize = document.documentElement.clientWidth / 7.5;
	var mright = fontsize * 0.3;
	$('.menu .item a.active').parents('li').addClass('active').siblings().removeClass('active');
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$('.menu').animate({right: mright+'px'},'100');
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
