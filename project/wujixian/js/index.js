$(function(){
	//视频
	$(".play").click(function(){
		var player = $(this).next()[0];
		if(player.pause) {
            player.play();
            $(this).prev().remove();
            $(this).css({"display":"none"});
            $(this).next().attr("controls","controls");
        }else {
            player.pause();
            $(this).css({"display":"block"});
        }
	})
	// part1
	$('.part1 .list1 li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		
		$('.part1 .wrap .item').eq(index).show().siblings().hide();
	})
	
	// part2
//	$('.part2 .list1 li').click(function(){
//		$(this).addClass('active').siblings().removeClass('active');
//		var index = $(this).index();
//		
//		$('.part2 .wrap .item').eq(index).show().siblings().hide();
//	})
	
	//part5
	jQuery(".part5 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:3});
	$('#order_list .p1').click(function(){
		$('.line-popup').css({'top': '50%','margin-top':'-200px'})
	})
	$('#close').click(function(){
		$('.line-popup').css({'top': '-100px'})
	})
	
	//part7
	$('#part7_list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		
		$('#part7_wrap .one').eq(index).show().siblings().hide();
	})
	
	jQuery(".part1 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"topLoop",vis:3,interTime:1500,delayTime:300});
	jQuery(".part2 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:1});
	jQuery(".part3 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:1,easing:"easeOutCirc"});
	jQuery(".part4 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"topLoop",vis:5,delayTime:300,interTime:1500});
	jQuery(".part6 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:3,easing:"easeOutCirc"});
	jQuery(".part8 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:8,easing:"easeOutCirc"});
	
})
