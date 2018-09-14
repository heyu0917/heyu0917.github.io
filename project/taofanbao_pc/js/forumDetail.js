$(function(){
	// 更换图标 hover事件
	hover_icon();
	
	// 点赞 点击事件
	$('.zan img').attr('data-flag','true');
	var $parm = $('.zan');
	zanYesNo($parm);
	
	// 不点赞 点击事件
	$('.nozan img').attr('data-flag','true');
	var $parm = $('.nozan');
	zanYesNo($parm);
	
	// 评论
	$('.pinglun').attr('data-flag','true');
	pinglun();
	
	// 回复 
	sure_btn();
	
	//  收藏
	var collect_flag = true;
	$('#collect_btn').click(function(){
		var Img = $(this).find('img');
		var src = Img.attr('src');
		if(collect_flag){
			$(this).addClass('on');
			var src2 = src.replace('gray','light');
			Img.attr('src',src2);
			$('.prompt').html('收藏成功');
			$('.prompt').fadeIn(200);
			collect_flag = false;
		}else{
			$(this).removeClass('on');
			var src3 = src.replace('light','gray');
			Img.attr('src',src3);
			$('.prompt').html('取消收藏成功');
			$('.prompt').fadeIn(200);
			collect_flag = true;
		}
		setTimeout(function(){
			$('.prompt').fadeOut(200);
		},2000)
	})
	
	// 提交评论
	var $list = $('#list');
	$('#submit_btn').click(function(){
		var val = $(this).prev().val();
		if(val == ''){
			$('.prompt').html('内容不能为空哟~');
			$('.prompt').fadeIn(200);
			
		}else{
			$('.prompt').html('发表成功');
			$('.prompt').fadeIn(200);
			$(this).prev().val('');
			
			// 模拟发表成功
			var li_html ='<li>'
							+'<img src="../img/avatar3.jpg" alt="" class="img1"/>'
								+'<div class="li-con">'
									+'<div class="top">'
										+'<div class="name">风一样的女纸</div>'
										+'<div class="date">11月15日   12:50</div>'
									+'</div>'
									+'<p class="txt">'+val+'</p>'
									+'<div class="evaluate-con">'
									+'</div>'
									+'<div class="clearfix">'
										+'<div class="desc fl-rt">'
											+'<div class="pinglun"><img src="../img/icon1_gray.png" alt="" /><span>0</span></div>'
											+'<div class="zan"><img src="../img/icon3_gray.png" alt="" /><span>0</span></div>'
											+'<div class="nozan"><img src="../img/icon5_gray.png" alt="" /><span>0</span></div>'
										+'</div>'
									+'</div>'
									+'<div class="evaluate clearfix">'
										+'<input type="text" />'
										+'<div class="sure-btn fl-rt small-btn">回复</div>'
									+'</div>'
								+'</div>'
							+'</li>';
			$list.prepend(li_html);
			
			// 重发触发点击事件
			hover_icon();
			
			$('.zan img').attr('data-flag','true');
			var $parm = $('.zan');
			zanYesNo($parm);
			
			$('.nozan img').attr('data-flag','true');
			var $parm = $('.nozan');
			zanYesNo($parm);
			
			$('.pinglun').attr('data-flag','true');
			pinglun();
			
			sure_btn();
			
		}
		setTimeout(function(){
			$('.prompt').fadeOut(200);
		},2000)
	})

})

function sure_btn(){
	$('.sure-btn').click(function(){
		var val = $(this).prev().val();
		var $li = $(this).parents('li');
		var $evaluate = $li.find('.evaluate');
		var $evaluateBtn = $li.find('.pinglun');
		var $evaluateCon = $li.find('.evaluate-con');
		var $span = $li.find('.pinglun span');
		var num = parseInt($span.html());
		if(val == ''){
			$('.prompt').html('内容不能为空哟~');
			$('.prompt').fadeIn(200);
			
		}else{
			$('.prompt').html('发表成功');
			$('.prompt').fadeIn(200);
			$evaluate.hide();
			$evaluateBtn.attr('data-flag','true');
			$(this).prev().val('');
			
			var p = '<p><span>璇玑</span>'+val+'</p>'
			$evaluateCon.append(p);
			num = Number(num) + 1;
			$span.html(num);
		}
		setTimeout(function(){
			$('.prompt').fadeOut(200);
		},2000)
	})
}

function pinglun(){
	$('.pinglun').unbind('click').click(function(){
		var $evaluate = $(this).parents('li').find('.evaluate');
		if($(this).attr('data-flag') == 'true'){
			$evaluate.slideDown(200);
			$(this).attr('data-flag','false');
		}else{
			$evaluate.slideUp(200);
			$(this).attr('data-flag','true');
		}
	})
}

function hover_icon(){
	$('.content .desc div').hover(function(){
		var Img = $(this).find('img');
		var src = Img.attr('src');
		var src2 = src.replace('gray','light')
		Img.attr('src',src2)
	},function(){
		var Img = $(this).find('img');
		if(Img.attr('data-flag') !== 'false'){
			var src = Img.attr('src');
			var src2 = src.replace('light','gray')
			Img.attr('src',src2)
		}
	})
}

function zanYesNo($parm){
	$parm.unbind('click').click(function(){
		var Img = $(this).find('img');
		var src = Img.attr('src');
		var $span = $(this).find('span');
		var num = parseInt($span.html());
		if(Img.attr('data-flag') == 'true'){
			var src2 = src.replace('gray','light');
			Img.attr('src',src2);
			num = Number(num) + 1;
			$span.html(num);
			Img.attr('data-flag','false')
		}else{
			var src3 = src.replace('light','gray');
			Img.attr('src',src3);
			num = Number(num) - 1;
			$span.html(num);
			Img.attr('data-flag','true')
		}
	})
}










