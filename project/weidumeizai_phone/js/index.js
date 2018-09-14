$(function(){
	var win_w = $(window).width();
	var win_h = $(window).height();
	var fontsize = document.documentElement.clientWidth / 7.5;
	var head_h = Math.floor(0.88 * fontsize);

	var parm1 = win_w / (win_h - head_h);
	var parm2 = win_w / win_h;
	if(parm1 > 0.698){
		$('.bg-img0').addClass('width');
	}
	if(parm2 > 0.635){
		$('.bg-img').addClass('width');
	}

	// page4
	jQuery(".picScroll-left1").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:1});
	$('.page4 .item').attr('data-flag','yes');
	$('.page4 .item').eq(0).attr('data-flag','no');
	$('.page4 .part-nav li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();

		var i = index + 1;
		if($('.page4 .item').eq(index).attr('data-flag') == 'yes'){
			jQuery('.picScroll-left'+i+'').slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:1});

			$('.page4 .item').eq(index).attr('data-flag','no');
		}

		$('.page4 .item').eq(index).show().siblings().hide();
	})

	//手机端总swiper
	var phoneContainer = new Swiper('.phone-container', {
		direction: 'vertical',
		resistanceRatio : 0,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	});

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

})
