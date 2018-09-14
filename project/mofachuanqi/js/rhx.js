$(function(){
	$("#rhx_list li span").click(function(){
		
		$(this).siblings('.popup').css({'opacity':'1','z-index':'11113',"transform": "scale(1)","-webkit-transform": "scale(1)","-ms-transform": "scale(1)","-o-transform": "scale(1)","-moz-transform": "scale(1)"});
		$('.bg').css({'opacity':'1','z-index':'1112'});
	})
	
	$(".close,#back_btn").click(function(){
		$('.popup').css({'opacity':'0','z-index':'-1',"transform": "scale(0.5)","-webkit-transform": "scale(0.5)","-ms-transform": "scale(0.5)","-o-transform": "scale(0.5)","-moz-transform": "scale(0.5)"});
		$('.bg').css({'opacity':'0','z-index':'-1'});
	})
	
})



