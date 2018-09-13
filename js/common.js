$(function(){  	

	// 回到顶部
	var w_h = $(window).height()
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop()
		if(scrollTop>w_h/2){
			$('.backTop').fadeIn()
		}else{
			$('.backTop').fadeOut()
		}
	})
	$('.backTop').click(function(){
		var scrollTop = $(window).scrollTop()
		$('html,body').animate({scrollTop: 0}, 400)
	})
	
})














