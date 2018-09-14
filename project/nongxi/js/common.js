$(function(){	
	$('.nav .item a.active').parents('li').addClass('active on');
	
	$('.nav li').hover(function(){
		$(this).addClass('on').siblings().removeClass('on');
	},function(){
		$(this).removeClass('on');
		$('.nav li.active').addClass('on');
	})
		
	//返回顶部
	var w_h = $(window).height();
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
    	if(scrollTop > w_h*1){
    		$('.backTop').fadeIn();
    		$('.backTop').css({'bottom':'200px'})
    	}else{
    		$('.backTop').fadeOut()
    	}
    });
	
	$('.backTop').click(function(){
		var scrollTop = $(window).scrollTop();
		$("html,body").animate({ scrollTop: 0 }, 600);
	})

})
