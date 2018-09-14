$(function(){
	//一级导航
	$(".nav-item").hover(function() {
		$(this).find("i").fadeIn();
		$(this).find("ul").fadeIn();
	}, function() {
		$(this).find("i").hide();
		$(this).find("ul").hide();
	})
	
	//懒加载
	$("img").lazyload({ threshold : 200 });
	
})
