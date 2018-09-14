$(function(){
	var parm = localStorage.getItem("search_parm");
	$("#input_val").val(parm);
	localStorage.removeItem("search_parm");
	$(".clear-box").css({"display":"block"});

	//搜索栏 实时监测input中值的变化
	$('#input_val').bind('input propertychange', function() {  
		if($(this).val().length >= 1){
			$(".clear-box").css({"display":"block"});
		}else{
			$(".clear-box").css({"display":"none"});
		}
	});
	//清空input中值
	$(".clear-box").click(function(){
		$('#input_val').val('');
		$(this).css({"display":"none"});
		$('#input_val').focus();
	})

	//头部导航
	var nav_flag = true;
	$(".nav-list li").click(function(){
		$(this).addClass("active").siblings().removeClass('active');

		var index = $(this).index();
		if(index == 1){
			if(nav_flag){
				$(".all-sort").css({"display":"block"});
				$(".bg2").css({"opacity":"1","z-index":"111"});
				nav_flag = false;
			}else{
				$(".all-sort").css({"display":"none"});
				$(".bg2").css({"opacity":"0","z-index":"-1"});
				nav_flag = true;
			}
			
		}else{
			$(".all-sort").css({"display":"none"});
			$(".bg2").css({"opacity":"0","z-index":"-1"});
			nav_flag = true;
		}
	})
	

	$(".all-sort-list li").click(function(){
		$(".all-sort").css({"display":"none"});
		$(".bg2").css({"opacity":"0","z-index":"-1"});
		nav_flag = true;
	})



})