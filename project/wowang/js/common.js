$(function(){
	//返回顶部
	var w_h = $(window).height();
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
    	if(scrollTop > w_h*1){
    		$('.backTop').fadeIn();
    		$('.backTop').css({'bottom':'250px'})
    	}else{
    		$('.backTop').fadeOut()
    	}
    });
	
	$('.backTop').click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 600);
	})
})
