$(function(){
	//佣金明细导航栏
	$("#detailed_nav_list li").tap(function(){
		$(this).addClass("select").siblings().removeClass("select");
		var index = $(this).index();
		
		$(".detailed-content").eq(index).css({"display":"block"});
		$(".detailed-content").not($(".detailed-content").eq(index)).css({"display":"none"});
	})
	
	//分销订单导航栏
	$("#detailed_nav_list li").tap(function(){
		$(this).addClass("select").siblings().removeClass("select");
		var index = $(this).index();
		
		$(".detailed-content").eq(index).css({"display":"block"});
		$(".detailed-content").not($(".detailed-content").eq(index)).css({"display":"none"});
	})
	
	//我的团队导航栏
	$("#detailed_nav_list li").tap(function(){
		$(this).addClass("select").siblings().removeClass("select");
		var index = $(this).index();
		
		$(".dis-team").eq(index).css({"display":"block"});
		$(".dis-team").not($(".dis-team").eq(index)).css({"display":"none"});
	})
})
