$(function(){
	var url = window.location.pathname;

	var a1 = url.indexOf(/guanyuwomen/),
		a2 = url.indexOf(/xinwenzhongxin/),
		a3 = url.indexOf(/chanpinzhongxin/),
		a4 = url.indexOf(/hezuoanli/),
		a5 = url.indexOf(/lianxiwomen/);
	
	if(a1 == 0){
		$("#nav-title-a1").addClass('select');
		$(".banner-other").css({"background":"url(/skin/default/images/aboutUs.jpg) 70% center no-repeat"});
	}
	if(a2 == 0){
		$("#nav-title-a2").addClass('select');
		$(".banner-other").css({"background":"url(/skin/default/images/news.jpg) 70% center no-repeat"});
	}
	if(a3 == 0){
		$("#nav-title-a3").addClass('select');
		$(".banner-other").css({"background":"url(/skin/default/images/product.jpg) 70% center no-repeat"});
	}
	if(a4 == 0){
		$("#nav-title-a4").addClass('select');
		$(".banner-other").css({"background":"url(/skin/default/images/coo.jpg) 70% center no-repeat"});
	}
	if(a5 == 0){
		$("#nav-title-a5").addClass('select');
		$(".banner-other").css({"background":"url(/skin/default/images/contact.jpg) 70% center no-repeat"});
	}
})


