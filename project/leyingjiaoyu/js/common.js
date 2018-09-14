var nav_flag = true;
$(function(){
	$('.menu-img').on('click',function(){
		
		if(nav_flag){
			$('.nav-wrapper').slideDown();
			nav_flag = false;
		}else{
			$('.nav-wrapper').slideUp();
			nav_flag = true;
		}
	})
})
