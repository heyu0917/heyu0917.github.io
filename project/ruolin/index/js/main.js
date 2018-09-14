$(function(){
	//遮罩与图
	$(".mask-img").show().stop().animate({
		width: "70%"
	}, 1000, 'easeInOutQuart');
	$(".mask-close").show().stop().animate({
		opacity: "1",
		zIndex: "112"
	}, 400);
	setTimeout(function(){
		$(".mask-img,.mask-close").animate({
			width: "0"
		},400);
		$(".mask-bg").animate({
			opacity: "0",
			zIndex: "-1"
		},400)
	},2000)
	$(".mask-close").click(function(){
		$(".mask-img,.mask-close").animate({
			width: "0"
		},400);
		$(".mask-bg").animate({
			opacity: "0",
			zIndex: "-1"
		},400);
	})
})
