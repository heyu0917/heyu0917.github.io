$(function(){
	//返回顶部
	var w_h = $(window).height();
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		var dist = $('body').height() - scrollTop - w_h;
    	if(scrollTop > w_h*0.5){
    		$('.back-top').fadeIn();
    		if(dist < 200){
    			$('.back-top').css({'bottom':'200px'})
    		}else{
    			$('.back-top').css({'bottom':'12%'})
    		}
    	}else{
    		$('.back-top').fadeOut()
    	}
    });
	
	$('.back-top').click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 600);
	})
})
