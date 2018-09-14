$(function(){
	// 导航
	$(function(){
		$('.nav-list li').click(function(){
			$(this).addClass('on').siblings().removeClass('on')
			var index = $(this).index()
		
		    $("#news_wrapper .item").eq(index).css({'display':'block'}).siblings().css({'display':'none'})
		})
	})
	
	// 点击评论
	$('.evaluate-btn').attr('data-flag','true');
	evaluate_btn();
	
	// 点击确认
	$('.sure-btn').click(function(){
		var val = $(this).prev().val();
		var evaluate = $(this).parents('li').find('.evaluate');
		var evaluateBtn = $(this).parents('li').find('.evaluate-btn');
		var ul = $(this).parents('ul');
		if(val == ''){
			$('.prompt').html('内容不能为空哟~');
			$('.prompt').fadeIn(200);
			
		}else{
			$('.prompt').html('发表成功');
			$('.prompt').fadeIn(200);
			evaluate.hide();
			evaluateBtn.attr('data-flag','true');
			$(this).prev().val('');
			var li_html = $(this).parents('li').html();
			ul.prepend('<li>'+li_html+'</li>');
			ul.find('li:first-child .txt').html(val);
			evaluate_btn();
		}
		setTimeout(function(){
			$('.prompt').fadeOut(200);
		},2000)
	})
	
	// 展开收缩
	$('.open').attr('flag','true');
	$('.open').click(function(){
		var $mask = $(this).parents('li').find('.mask');
		var flag = $(this).attr('flag');
		if(flag == 'true'){
			$(this).prev().removeClass('two-ellipsis');
			$mask.removeClass('on');
			$mask.html('已读');
			$(this).attr('flag','false');
		}else{
			$(this).prev().addClass('two-ellipsis');
			$(this).attr('flag','true');
		}
		
		var on_len = $('.mask.on').length
		if(on_len == 0){
			$('.nav-list li:first-child').removeClass('active');
		}
	})
	
	// 判断是否有未读消息
	var mask_flag = $('.mask.on');
	if(mask_flag){
		$('.nav-list li:first-child').addClass('active');
	}
	
})


function evaluate_btn(){
	$('.evaluate-btn').unbind('click').click(function(){
		var flag = $(this).attr('data-flag');
		if(flag === 'true'){
			$(this).parent().find('.evaluate').slideDown();
			$(this).attr('data-flag','false')
		}else{
			$(this).parent().find('.evaluate').slideUp();
			$(this).attr('data-flag','true')
		}
	})
}











