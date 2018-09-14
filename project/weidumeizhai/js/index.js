$(function(){
		//banner图的索引按钮
	var b_len = $(".banner-list li").length;
	var li = "";
	for(var i=0;i<b_len;i++){
		li += '<li></li>';
	}
	var b_create = document.createElement('ul');
	b_create.className = "banner-btn-list";
	$(".banner-list").after(b_create);
	$(".banner-btn-list").html(li);
	$(".banner-btn-list li").eq(0).addClass('light');
	
	//part1中的banner图切换效果
	var b = 0;
	var timer,timeout;
	$(".banner-btn-list li").mouseover(function(){
		clearInterval(timer);
		
		$(this).addClass('light').siblings().removeClass('light');
		var index = $(this).index();
		b=index;
		$(".banner-list li").eq(index).fadeIn(800).siblings().fadeOut(600);
	})
	$(".banner-btn-list li").mouseout(function(){
		timer = setInterval(timeout,3000);
	})
	timeout = function(){
		b++;
		if(b>=b_len){
			b = 0;
		}
		$(".banner-list li").eq(b).fadeIn(800).siblings().fadeOut(600);
		$(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
	}
	//放下面
	timer = setInterval(timeout,3000);
	
	
	// section4
	$('.section4 .item').attr('data-flag','yes');
	$('.section4 .item').eq(0).attr('data-flag','no');
	$('.section4 .part-nav li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		
		var i = index + 1;
		if($('.section4 .item').eq(index).attr('data-flag') == 'yes'){
			jQuery('.picScroll-left'+i+'').slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:1});
			
			$('.section4 .item').eq(index).attr('data-flag','no');
		}
		
		$('.section4 .item').eq(index).show().siblings().hide();
	})
	
	
	//视频
	$("#play").click(function(){
	 	var player = document.getElementById("player");
		if(player.pause) {
            player.play();
            //console.log("a")
            $(".vedio-img").remove();
            $(this).css({"display":"none"});
            $("#player").attr("controls","controls");
        }else {
            player.pause();
            $("#play").css({"display":"block"});
             //console.log("b")
        }
	})
	
	// 背景
	var wh_n = $(window).height() / $(window).width();
	console.log(wh_n)
	if(wh_n < 0.38){
		$('.section-bg2').addClass('width');
	}
	
	

})
