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
	
	//part2
	$('#part2_list li .img2').click(function(){
		$('#part2_list li .img2').attr('src','../img/index/c2.png');
		$(this).attr('src','../img/index/c1.png')
		$('#part2_list li .li-con').hide();
		$(this).next().show();
	})
	
	//part4
	$('#part4_list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		
		$('.part4 .wrap .item').eq(index).show().siblings().hide();
	})
	
	//part5
	var part5Swiper = new Swiper('.swiper-part5',{
		nextButton: '.arrow-right',
		prevButton: '.arrow-left',
		loop: true,
		autoplay:3000,
	})
	
	//part7
	$('#part7_list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		
		$('#part7_wrap .one').eq(index).show().siblings().hide();
	})
})
