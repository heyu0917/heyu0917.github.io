$(function(){
	//底部
	$(".footer li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	//底部拨打电话
	$("#number_btn").click(function(){
		$('.bg').css({'opacity':'1','z-index':'112'});
		$('.number-popup').css({'opacity':'1','z-index':'113',"top":"50%"});
	})
	$(".cancel-btn").click(function(){
		$('.bg').css({'opacity':'0','z-index':'-1'});
		$('.number-popup').css({'opacity':'0','z-index':'-1',"top":"20%"});
	})
	
	//底部加盟
	$("#jm_btn").click(function(){
		$('.bg').css({'opacity':'1','z-index':'112'});
		$('.jm-popup').css({'opacity':'1','z-index':'113',"transform": "scale(1)","-webkit-transform": "scale(1)","-ms-transform": "scale(1)","-o-transform": "scale(1)","-moz-transform": "scale(1)"});
	})
	$("#jm_close,#jm_submit").click(function(){
		$('.jm-popup').css({'opacity':'0','z-index':'-1',"transform": "scale(0.5)","-webkit-transform": "scale(0.5)","-ms-transform": "scale(0.5)","-o-transform": "scale(0.5)","-moz-transform": "scale(0.5)"});
		$('.bg').css({'opacity':'0','z-index':'-1'});
	})
	
	//底部预约报名
	$("#yy_btn").click(function(){
		$('.bg').css({'opacity':'1','z-index':'112'});
		$('.yy-popup').css({'opacity':'1','z-index':'113',"transform": "scale(1)","-webkit-transform": "scale(1)","-ms-transform": "scale(1)","-o-transform": "scale(1)","-moz-transform": "scale(1)"});
	})
	$("#yy_close,#yy_submit").click(function(){
		$('.yy-popup').css({'opacity':'0','z-index':'-1',"transform": "scale(0.5)","-webkit-transform": "scale(0.5)","-ms-transform": "scale(0.5)","-o-transform": "scale(0.5)","-moz-transform": "scale(0.5)"});
		$('.bg').css({'opacity':'0','z-index':'-1'});
	})
	
})
