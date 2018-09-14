$(function(){
	$('#qy_list li').hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	//社会公益
	var window_w = $(window).width();
	if(window_w > 1440){
		var img = $('#gy_list li').eq(0).find('img');
		img.load(function(){
			var img_h = $(this).height();
			$('#gy_list li').css({'height':img_h});
		})
	}
	
	//企业文化
	if(window_w <= 1440){
		$('#bj_img2').load(function(){
		console.log('a')
			var img_h = $(this).height();
			$('#bj_img1').css({'margin-top':img_h});
		})
	}
})










