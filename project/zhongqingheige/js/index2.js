$(function(){
	var window_w = $(window).width();
	var window_h = $(window).height();
	var window_prop = window_w / window_h;
	
	//静态页面可以加载，在php那里，不能执行
//	$('.bg-img').each(function(){
//		$(this).load(function(){
//			var bg_img_w = $(this).width();
//			var bg_img_h = $(this).height();
//			
//			var bg_img_prop = bg_img_w / bg_img_h;
//			
//			//console.log(bg_img_w+' ,'+ bg_img_h);
//			if(bg_img_prop >= window_prop){//图片较宽,取屏幕的高度
//				var this_left = Math.floor(-(bg_img_w - window_w) / 2);
//				$(this).css({'height':window_h,'left':this_left});
//			}else{//图片较高,取屏幕的宽度
//				var this_top = Math.floor(-(bg_img_h - window_h) / 2);
//				$(this).css({'width':window_w,'top':this_top});
//			}
//		})
//	})
	
	//第二屏
//	$('.bg2-img').load(function(){
//		var bg2_img_w = $(this).width();
//		var bg2_img_h = $(this).height();
//		var window_w2 = window_w*55/100;
//		var window_prop2 = window_w2 / window_h;
//		
//		var bg2_img_prop = bg2_img_w / bg2_img_h;
//		if(bg2_img_prop >= window_prop2){//图片较宽,取屏幕的高度
//			var this_left = Math.floor(-(bg2_img_w - window_w2) / 2);
//			$(this).css({'height':window_h,'left':this_left});
//		}else{//图片较高,取屏幕的宽度
//			var this_top = Math.floor(-(bg2_img_h - window_h) / 2);
//			$(this).css({'width':window_w2,'top':this_top});
//		}
//	})
	
	/*第八屏*/
//	$('.bg3-img').load(function(){
//		var bg_img_w = $(this).width();
//		var bg_img_h = window_h - 338;
//		
//		$(this).css({'height':bg_img_h});
//		
//		if(bg_img_w >= window_w){//图片较宽
//			var this_left = Math.floor(-(bg_img_w - window_w) / 2);
//			$(this).css({'left':this_left});
//		}else{//图片较高
//			$(this).css({'width':window_w});
//		}
//	})
	
	//第三屏
	$(".title-list li").click(function(){
		$(this).addClass('light').siblings().removeClass('light');
		
		var index = $(this).index();
		$(".list-con .item").css({'display':'none'});
		$(".list-con .item").eq(index).css({'display':'block'});
		
	})
	
	/*第五屏视频*/
	$('#video_list .title').click(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		
		$('#video_list .vedio-box').css({'display':'none'});
		$(this).prev().css({'display':'block'});
	})
	
	/*第七屏*/
	$('.seven-list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		
		var index = $(this).index();
		$('#seven_list_item .item').css({"display":'none'});
		$('#seven_list_item .item').eq(index).css({"display":'block'});
	})
	
	
	/*第八屏*/
	$('#questions a').click(function(){
		$(this).addClass('question').siblings().removeClass('question');
	})
	
})
