$(function(){
	//首页的nav点击弹出
	var pn_flag = true;
	$(".phone-nav").click(function(event) {
		event.stopPropagation();
		if(pn_flag){
			$(".nav-tabs-fixed").show();			
			pn_flag = false;
		}else{
			$(".nav-tabs-fixed").hide();
			pn_flag = true;
		}
	});
	$(document).on("click", function(event) {
		if(!pn_flag){			
			var className = event.target.className;
			console.log(className);
			if(className == ""  || className == "index-header") {
				$(".nav-tabs-fixed").hide();
			}
		}
		pn_flag = true;
	});
	
	var window_height = $(window).height();
	$('.fullpage,.phone-banner').css('height',window_height+'px');
	
})
