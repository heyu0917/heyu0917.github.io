$(function(){
	$("#show_drop").click(function(){
		$(".header-drop").css({"display":"block"});
		$(".header-bottom").css({"display":"none"});
	})
	$("#hide_drop").click(function(){
		$(".header-drop").css({"display":"none"});
		$(".header-bottom").css({"display":"block"});
	})

});