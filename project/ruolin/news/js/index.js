$(function(){
	//右侧导航
	$(".absolute-nav-list li").hover(function(){
		var index = $(this).index();
		if(index == 0){
			$(this).find("img").attr("src","images/arrowL2_2.png");
		}
		if(index == 2){
			$(this).find("img").attr("src","images/arrowR2_2.png");
		}
	},function(){
		var index = $(this).index();
		if(index == 0){
			$(this).find("img").attr("src","images/arrowL2.png");
		}
		if(index == 2){
			$(this).find("img").attr("src","images/arrowR2.png");
		}
	})
	
	//分享
	$(".newsdetail-list li").hover(function(){
		var i = $(this).index() + 1;
		$(this).find("img").attr("src",'images/share1_'+i+'.png');
	},function(){
		var i = $(this).index() + 1;
		$(this).find("img").attr("src",'images/share2_'+i+'.png');
	})
})
