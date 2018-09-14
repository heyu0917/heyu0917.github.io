$(function(){
	$('.er-nav li.active').addClass('light');
	$('.er-nav li').hover(function(){
		$(this).addClass('active');
		$('.er-nav li .item').stop().slideUp(200);
		$(this).find('.item').stop().slideDown(200);
	},function(){
		$(this).removeClass('active');
		$(this).find('.item').stop().slideUp(200);
		$('.er-nav li.light .item').stop().slideDown(200);
		$('.er-nav li.light').addClass('active');
	})
})
