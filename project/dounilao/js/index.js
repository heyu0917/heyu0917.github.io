$(function(){
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
	
	// part4 3d //isAutoChange:false
	$('#slide3d').slideCarsousel({slideType:'3d',direction: 3000});
	
	// part6 
	jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,autoPlay:true,effect:"leftLoop",vis:1});
	
	// part10
	var img_w = $(window).width() / 4;
	var img_h = img_w * 0.53;
	$('.picScroll-left1 .bd, .picScroll-left1 li').height(img_h);
	$('.picScroll-left1 li').width(img_w);
	jQuery(".picScroll-left1").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,effect:"leftLoop",vis:4});
})
