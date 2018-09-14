$(function(){		
	$('#demo1').banqh({
		box:"#demo1",//总框架
		pic:"#ban_pic1",//大图框架
		pnum:"#ban_num1",//小图框架
		prev_btn:"#arrow_left3",//小图左箭头
		next_btn:"#arrow_right3",//小图右箭头
		interTime:5000,//图片自动切换间隔
		delayTime:400,//切换一张图片时间
		pop_delayTime:400,//弹出框切换一张图片时间
		order:0,//当前显示的图片（从0开始）
		picdire:true,//大图滚动方向（true为水平方向滚动）
		mindire:false,//小图滚动方向（true为水平方向滚动）
		min_picnum:3,//小图显示数量
	})
	
	calcu();
													
	$(window).resize(function(){
		calcu();
	})
	
	// part6
	jQuery(".part6 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,autoPlay:true,effect:"leftLoop",vis:6});
	// part10
	jQuery(".part10 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,autoPlay:true,effect:"leftLoop",vis:4});		
					
	$(".play").click(function(){
		var player = $(this).next()[0];
		console.log(player)
	 	//var player = document.getElementById("player");
		if(player.pause) {
            player.play();
            //console.log("a")
            $(this).prev().remove();
            $(this).css({"display":"none"});
            $(player).attr("controls","controls");
        }else {
            player.pause();
            $(this).css({"display":"block"});
             //console.log("b")
        }
	})
})

function calcu() {
	var win_w = $(window).width();
	
	// part6
	var part6_li_w = (win_w + 30) / 6;
	var part6_img = part6_li_w * 0.7;
	var part6_li_h = part6_img + 30;
	$('.part6 .bd li').width(part6_li_w);
	$('.part6 .bd li').height(part6_li_h);
	$('.part6 .bd li img').height(part6_img);
	
	// part10
	var part10_li_w =  win_w / 4;
	var part10_li_h =  part10_li_w * 0.667;
	$('.part10 .bd li').width(part10_li_w);
	$('.part10 .bd li').height(part10_li_h);
}

