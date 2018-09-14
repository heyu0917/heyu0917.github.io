$(function(){

	//选择警种
	$("#select_jtype").click(function(){
		$(".bg").css({"z-index": "113","opacity":"1"});
		$(".popup").css({
			"transform": "scale(1) translate3d(0,-50%,0)",
			"-webkit-transform": "scale(1) translate3d(0,-50%,0)",
			"-moz-transform": "scale(1) translate3d(0,-50%,0)",
			"-ms-transform": "scale(1) translate3d(0,-50%,0)",
			"z-index":"115","opacity":"1"
		});
	})
	$(".bg").click(function(){
		$(".bg").css({"z-index": "-1","opacity":"0"});
		$(".popup").css({
			"transform": "scale(0.5) translate3d(0,-50%,0)",
			"-webkit-transform": "scale(0.5) translate3d(0,-50%,0)",
			"-moz-transform": "scale(0.5) translate3d(0,-50%,0)",
			"-ms-transform": "scale(0.5) translate3d(0,-50%,0)",
			"z-index":"-1","opacity":"0"
		});
	})

	//填入案件类型
	$("#type_list li").click(function(){
		var type = $(this).find("label").html();
		$('#type_show').val(type);
	})
})
