$(function(){
	//首页的左侧
	$(".left-part-list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
	})
})