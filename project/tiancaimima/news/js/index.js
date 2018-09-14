$(function(){
	//首页的左侧
	$(".left-part-list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
	})

	//全球资讯
	$(".dynamic-nav-list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
		var index = $(this).index();
		$(".dynamic-wrap").eq(index).css({"display":"block"});
		$(".dynamic-wrap").not($(".dynamic-wrap").eq(index)).css({"display":"none"});
	})


})










