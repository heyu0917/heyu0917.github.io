$(function(){
	//首页的左侧
	$(".left-part-list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
	})

	//品牌背景 导航栏切换
	var window_width = $(window).width();
	//brandbg_img_size(window_width,1);
	$("#brand_bg_list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
		var index = $(this).index();
		$(".brand-bg-box").eq(index).css({"display":"block"});
		$(".brand-bg-box").not($(".brand-bg-box").eq(index)).css({"display":"none"});

		//图片的适配
		var i = index + 1;
		//brandbg_img_size(window_width,i);
	})

	//核心优势--品牌背景
	$("#brand_bg_list li").eq(1).click(function(){
		var len = $(".ys-item2-list2 li").length;
		for(var i=0;i<len;i++){
		    var j_h = $(".ys-item2-list2 li").eq(i).css("height");
		    $(".ys-item2-list1 li").eq(i).css({"height":j_h});
		}
	})
	//品牌理念
//	var img_idea;
//	if(window_width>1336){
//		img_idea = '<img src="img/brand_idea_1920.jpg">';		
//	}else if(1080<window_width<=1336){
//		img_idea = '<img src="img/brand_idea_1366.jpg">';	
//	}else{
//		img_idea = '<img src="img/brand_idea_1080.jpg">';	
//	}
//	$(".brand-idea-box").html(img_idea);

	//核心优势
	//advan_img_size(window_width,1);
	$("#brand_advan_list li").click(function(){
		$(this).addClass("light").siblings().removeClass("light");
		var index = $(this).index();
		$(".brand-advan-box").eq(index).css({"display":"block"});
		$(".brand-advan-box").not($(".brand-advan-box").eq(index)).css({"display":"none"});

		//图片的适配
		var i = index + 1;
		//advan_img_size(window_width,i);
	})
})

//function brandbg_img_size(window_width,i){
//	var img_bg;
//	if(window_width>1336){
//		img_bg = '<img src="img/brand_bg'+i+'_1920.jpg">';		
//	}else if(1080<window_width<=1336){
//		img_bg = '<img src="img/brand_bg'+i+'_1366.jpg">';	
//	}else{
//		img_bg = '<img src="img/brand_bg'+i+'_1080.jpg">';	
//	}
//	$('.brand-bg-box'+i+'').html(img_bg);
//}
//
//function advan_img_size(window_width,i){
//	var img_advan;
//	if(window_width>1336){
//		img_advan = '<img src="img/advan'+i+'_1920.jpg">';		
//	}else if(1080<window_width<=1336){
//		img_advan = '<img src="img/advan'+i+'_1366.jpg">';	
//	}else{
//		img_advan = '<img src="img/advan'+i+'_1080.jpg">';	
//	}
//	$('.brand-advan-box'+i+'').html(img_advan);
//}








