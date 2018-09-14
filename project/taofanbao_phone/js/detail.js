$(function(){	
	//头部导航栏切换
	$("#nav_list li").click(function(){
		var index = $(this).index();
		$(this).addClass('select').siblings().removeClass('select');

		if(index == 0){
			$("#goods").css({"display":"block"});
			$("#evalute").css({"display":"none"});
		}else{
			$("#goods").css({"display":"none"});
			$("#evalute").css({"display":"block"});
		}
	})

	//已选
	$("#collected_spots").click(function(){
		$("#bg").css({"z-index":"1111","opacity":"1"});

		$("#collected_popup").css({"bottom":"0","opacity":"1"});
		$("#collected_popup_img").css({"bottom":".24rem"});
		$("#collected_footer").css({"bottom":"0"});
	});
	$("#collected_close").click(function(){
		$("#bg").css({"z-index":"-1","opacity":"0"});

		$("#collected_popup").css({"bottom":"-68%","opacity":"0"});
		$("#collected_popup_img").css({"bottom":"0"});
		$("#collected_footer").css({"bottom":"-68%"});
	})

	//已选中的选择
	$("#cp_list1 li").click(function(){
		$(this).addClass('select').siblings().removeClass('select');
	})

	//已选中的数量加减
	var n = 1;
	$("#add").click(function(){
		n++;
		$(this).prev().html(n);
		$("#reduce").css("color","#222");
	})
	$("#reduce").click(function(){
		if(n>2){
			n--;
			$(this).next().html(n);
			$("#reduce").css("color","#222");			
		}else{
			$(this).next().html(1);
			$("#reduce").css("color","#D7D7D7");
		}
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

	//加入购物车
	$('#add_shopCar2,#add_shopCar').click(function(){
		$('#shopCar_popup').css({'opacity':'1','z-index':'11677'});
		setTimeout(function(){
			$('#shopCar_popup').css({'opacity':'0','z-index':'-1'});
		},2000);
	})
	


})







