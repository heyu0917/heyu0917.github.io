$(function(){
	$('#demo').banqh({
		box:"#demo",//总框架
		pic:"#ban_pic",//大图框架
		pnum:"#ban_num",//小图框架
		prev_btn:"#arrow_left",//小图左箭头
		next_btn:"#arrow_right",//小图右箭头
		delayTime:400,//切换一张图片时间
		min_picnum:4,//小图显示数量
	})			
	$('#demo2').banqh({
		box:"#demo2",//总框架
		pic:"#ban_pic2",//大图框架
		pnum:"#ban_num2",//小图框架
		prev_btn:"#arrow_left2",//小图左箭头
		next_btn:"#arrow_right2",//小图右箭头
		delayTime:400,//切换一张图片时间
		min_picnum:4,//小图显示数量
	})
	$('#demo3').banqh({
		box:"#demo3",//总框架
		pic:"#ban_pic3",//大图框架
		pnum:"#ban_num3",//小图框架
		prev_btn:"#arrow_left3",//小图左箭头
		next_btn:"#arrow_right3",//小图右箭头
		delayTime:400,//切换一张图片时间
		min_picnum:4,//小图显示数量
	})	
	$('#demo4').banqh({
		box:"#demo4",//总框架
		pic:"#ban_pic4",//大图框架
		pnum:"#ban_num4",//小图框架
		prev_btn:"#arrow_left4",//小图左箭头
		next_btn:"#arrow_right4",//小图右箭头
		delayTime:400,//切换一张图片时间
		min_picnum:4,//小图显示数量
	})	
	$('#demo5').banqh({
		box:"#demo5",//总框架
		pic:"#ban_pic5",//大图框架
		pnum:"#ban_num5",//小图框架
		prev_btn:"#arrow_left5",//小图左箭头
		next_btn:"#arrow_right5",//小图右箭头
		delayTime:400,//切换一张图片时间
		min_picnum:4,//小图显示数量
	})	
	
	$('#nav_list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
		
		var index = $(this).index();
		$('.part2-wrap .bigSmall').eq(index).show().siblings().hide();
	})
	
})