$(function(){		
	$('.part').each(function(e) {
		var linkid = $(this).attr('id');
		var alink = '<a href="#'+linkid+'" data-id="'+linkid+'"></a>';
		$('.right-fixed').append(alink);
		//down
		$(this).waypoint(function(direction) {
			if (direction === "down") {
				$('.right-fixed a').removeClass('active');
				$('.right-fixed a[data-id='+linkid+']').addClass('active');
			}
		}, {offset : 0});
		  // up
		$(this).waypoint(function(direction){
			if (direction === "up") {
				$('.right-fixed a').removeClass('active');
				$('.right-fixed a[data-id='+linkid+']').addClass('active');
			}
		}, {offset : '-10'});
	})
	
	// dot nav click function
	$('.right-fixed a').on('click', function(event) {
		event.preventDefault();
		var scrollLink = $(this).attr('href');
		scrollLink = scrollLink.replace('#', '.');
		$scrollLink = $(scrollLink);
		var anchorOffset = $scrollLink.offset().top;
		$('html,body').animate({scrollTop: anchorOffset},800);
	});
	
	//滑动到对应位置，导航固定
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		if(scrollTop >= 80) {
			$(".header").addClass('fixed');
		} else {
			$(".header").removeClass('fixed');
		}
	}
	
	//导航的动画
	//$('.header').animate({'top':0},1000);
	
	//移除vedio-img
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
		
})
