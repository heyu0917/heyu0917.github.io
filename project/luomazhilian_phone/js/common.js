$(function(){
	//选项卡
	$("#er_nav_list li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		
		var i = $(this).index();
		$(".tap-item").eq(i).css({"display":"block"});
		$(".tap-item").not($(".tap-item").eq(i)).css({"display":"none"});
	})
})
