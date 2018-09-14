$(function(){

	//根据地址参数
	var police_name = "武昌分局需求";
	var arr_para = ["求身份","求并案","求抓获","其他"];
	var para = (window.location.search).substring(5);
	if(para == 1){
		//$("#name_para").attr("placeholder",police_name+' '+arr_para[0]);
		$("#name_para").val(police_name+arr_para[0]);
	}
	if(para == 2){
		//$("#name_para").attr("placeholder",police_name+' '+arr_para[1]);
		$("#name_para").val(police_name+arr_para[1]);
	}
	if(para == 3){
		//$("#name_para").attr("placeholder",police_name+' '+arr_para[2]);
		$("#name_para").val(police_name+arr_para[2]);
	}
	if(para == 4){
		//$("#name_para").attr("placeholder",police_name+' '+arr_para[3]);
		$("#name_para").val(police_name+arr_para[3]);
	}

	//点击案件类型
	$(".part1-type").click(function(){
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
		$('#case_type_show').val(type);
	})
	
})

