$(function(){
	var banner_h = $(window).width() * 0.5619;
	$('.banner').height(banner_h);
	
	$(window).resize(function(){
		var banner_h = $(window).width() * 0.5619;
		$('.banner').height(banner_h);
	})
	
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
	timer = setInterval(timeout,3000);
	
	
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
	});
	
	$('#demo1').banqh({
		box:"#demo1",//总框架
		pic:"#ban_pic1",//大图框架
		pnum:"#ban_num1",//小图框架
		prev_btn:"#arrow_left1",//小图左箭头
		next_btn:"#arrow_right1",//小图右箭头
		interTime:5000,//图片自动切换间隔
		delayTime:400,//切换一张图片时间
		pop_delayTime:400,//弹出框切换一张图片时间
		min_picnum:3,//小图显示数量
	})
	
	var $largeli = $('.large_box li');
	var largeli = Math.floor($largeli.width());
	$largeli.width(largeli);
	$('.large_box').width(largeli);
	var $smallli = $('.small_box li');
	var smallli = Math.floor($smallli.width());
	$smallli.width(smallli);
})
