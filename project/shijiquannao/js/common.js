$(function(){
	/*7.19*/
	$('.header .item a.active').parents('li').addClass('active');
	$('.header ul li').hover(function(){
		$(this).find('.item').show();
		$(this).siblings().find('.item').hide();
	},function(){
		$('.header .item').hide();
	})
	
	
})
