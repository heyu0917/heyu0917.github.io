$(function(){
	
	//出现评论框
	$("#li_evalute,#li_clue,#li_together").click(function(){
		$("#evalute_popup").css({"bottom":"0","opacity":"1"});
		$("#bg").css({"z-index":"1111","opacity":"1"});

		$("#textarea_evaluate").focus();
	})
	$("#cancel").click(function(){
		$("#evalute_popup").css({"bottom":"-30%","opacity":"0"});
		$("#bg").css({"z-index":"-1","opacity":"0"});
	})
	
	//导航切换
	$(".part2-setp1 li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	//收藏
	var flag_c = true;
	$("#collect").click(function(){
		if(flag_c){
			$(this).find("img").attr("src","../img/collect.png");
			$(this).find("span").html("已收藏");
			$(this).find("span").css({"color":"#fccc18"});
			$("#collect_state").html("收藏成功！");
			$("#collect_state").css({'opacity':"1",'z-index':'119'});
						
			flag_c = false;
		}else{
			$(this).find("img").attr("src","../img/collect_c.png");
			$(this).find("span").html("收藏");
			$(this).find("span").css({"color":"#999"});
			$("#collect_state").html("取消收藏！");
			$("#collect_state").css({'opacity':"1",'z-index':'119'});
						
			flag_c = true;
		}

		setTimeout(function(){
			$("#collect_state").css({'opacity':"0",'z-index':'-1'});
		},1500);
	})
})









