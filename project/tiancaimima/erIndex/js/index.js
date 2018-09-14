$(function(){
	//首页的左侧
	$(".left-part-list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
	})

	//企业责任
	$(".zeren-nav-list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
		var index = $(this).index();
		$(".zeren-page").eq(index).css({"display":"block"});
		$(".zeren-page").not($(".zeren-page").eq(index)).css({"display":"none"});
	})
	
	//学员风采
	$("#fengcai_list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
	})

})