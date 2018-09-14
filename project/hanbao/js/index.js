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
	
	$('.load-img').load(function(){
		var dest = $(this).height() / 2;
		$('#section4_list li').eq(0).find('p').css({'bottom': dest});
		$('#section4_list li').eq(1).find('p').css({'bottom': dest});
		$('#section4_list li').eq(2).find('p').css({'top': dest});
		$('#section4_list li').eq(3).find('p').css({'top': dest});
	})
})
