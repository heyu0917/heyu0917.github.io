$(function(){
	// 置顶
	$('#forum_list .li-top').click(function(){
		var li = $(this).parents('li');
		$('#forum_list').prepend(li);
	})
	
	// 更换图标
	$('#forum_list .desc div').hover(function(){
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
	
	// 点赞 点击事件
	$('.zan img').attr('data-flag','true');
	var $parm = $('.zan');
	zanYesNo($parm);
	
	//  收藏
	$('.collect img').attr('data-flag','true');
	var $parm = $('.collect');
	zanYesNo($parm);
})

function zanYesNo($parm){
	$parm.click(function(){
		var Img = $(this).find('img');
		var src = Img.attr('src');
		if(Img.attr('data-flag') == 'true'){
			var src2 = src.replace('gray','light');
			Img.attr('src',src2);
			Img.attr('data-flag','false')
		}else{
			var src3 = src.replace('light','gray');
			Img.attr('src',src3);
			Img.attr('data-flag','true')
		}
	})
}











