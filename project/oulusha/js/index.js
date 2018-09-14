$(function(){	
	//banner
	var banner_h = $(window).width() * 0.51;
	$('.banner').height(banner_h);
	
	// part1
	var win_w = $(window).width();
	if(win_w >1500){
		var pic_w = win_w * 0.6 * 0.5 * 0.9;
		var vedio_h = win_w * 0.6 * 0.5 * 0.667;
	}else{
		var pic_w = win_w * 0.7 * 0.5 * 0.9;
		var vedio_h = win_w * 0.7 * 0.5 * 0.667;
	}
	
	
	$(".picScroll-left .bd li").width(pic_w);
	$('.part1 .vedio-box').height(vedio_h)
	jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:1});
	
	//part3
	var li3_w = (win_w * 0.9 - 160)  / 3;
	var img3_h = ((win_w * 0.9 - 160)  / 3 - 60) * 0.738;
	$(".picScroll-left1 .bd,.picScroll-left1 .bd li").height(img3_h);
	$(".picScroll-left1 .bd li").width(li3_w);
	
	jQuery(".picScroll-left1").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:3});
	
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
	
	// part6
	var win_w = $(window).width();
	if(win_w>1920){
		$('.part6').addClass('big');
		var part6_h = $(window).width() * 0.443;
		$('.part6').height(part6_h);
	}

})
