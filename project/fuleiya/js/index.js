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
	
	// part3
	var $posterlist = $('.part3 .poster-list');
	var part3_len = $posterlist.find('li').length;
	if(part3_len%2 == 0){
		var li = $posterlist.find('li').eq(0).clone();
		$posterlist.append(li)
	}
			
	$(".poster-main").PicCarousel({
		"width":800,		
		"height":390,		
		"posterWidth":550,	
		"posterHeight":390,
		"scale":0.5,		
		"speed":500,	
		"autoPlay":false,	
		"delay":1000,	
		"verticalAlign":"middle"	
	});
	
	
	// part7 地图
	$('.part7 .item-wrapper .item').hover(function(){
		$('.item-wrapper .item').find('.img2,.img3,p').hide();
		$(this).find('.img2,.img3,p').show();
		var index = $(this).index();
		$('.info-wrapper li').eq(index).show().siblings().hide();
	})
	
	// part8
	$('.part8 .item-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
		var index = $(this).index()
		
		$('.part8 .item-wrapper .item').eq(index).show().siblings().hide()
	})
	
})
