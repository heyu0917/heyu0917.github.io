$(function(){
	//页面跳转
	$(".part ul li").click(function(){
		var parm = $(this).html();

		localStorage.setItem("search_parm",parm);
		location.href="searchAfter.html";
		//console.log(localStorage.getItem("search_parm"));
	})

	$('#input_val').focus();
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
})