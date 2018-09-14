$(function(){
	var win_height = $(window).height();
	$('.phone-container').height(win_height);
	
	//手机端总swiper
	var phoneContainer = new Swiper('.phone-container', {
		direction: 'vertical',
	});
	//手机端首页swiper
	var phoneBanner = new Swiper('.phone-banner', {
		direction: 'horizontal',
		pagination : '.swiper-pagination',
		loop:true,
		autoplay: 1500,
	});
	
	//图片评论轮播图
	lunbo();
	
	//遮罩与图
	$(".mask-img").show().stop().animate({
		width: "90%"
	}, 400);
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
	},3000)
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

//第二页
var phoneBread = new Swiper('.phone-bread', {
	direction: 'horizontal',
	slidesPerView: 4,
	centeredSlides: false,
	spaceBetween : 10,
});
$(".navbar-p").click(function(){
	$(".navbar-p").removeClass("active");
	$(this).addClass("active");
})

//第三页
//var pagethress = new Swiper('.swiperSec3',{
//	loop: true,
//	autoplay: 2000,
//	autoplayDisableOnInteraction : false,
//})
/*
 * 第四页
 */
//上面的滑块
var pageFourSlide = new Swiper('.page-four-slide', {
	direction: 'horizontal',
	slidesPerView: 2.2,
	centeredSlides: false,
});
//
var brandSwiper= new Swiper('.brand-swiper',{
	direction: 'horizontal',
	onlyExternal : true,
})
//品牌图片轮播
var brandPic = new Swiper('.brand-pic', {
	direction: 'horizontal',
	slidesPerView: 2,
	autoplay: 1500,
	centeredSlides: false,
	loop: true,
});

//滑块的选择事件
$(".page-four-brand").click(function() {
	$(".page-four-brand").removeClass("active");
	$(this).addClass("active");
	var $index = $(this).attr("data-index");

	brandSwiper.slideTo($index);
});

//第5页
$(".choose-comment div").click(function() {
	$(this).addClass("active").siblings().removeClass("active");
	var $index = $(this).index();
	$(".comment-content div").eq($index).stop().animate({
		top: 0
	}).siblings().stop().animate({
		top: "300%"
	});
});

function lunbo(){
	$(".arrow-left").click(function() {
		var index = $(".contents .selected").index();
		if(index==0){
			index=$(".contents li").length-1;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}else{
			index--;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}
	});
	$(".arrow-right").click(function() {
		var index = $(".contents .selected").index();
		if(index==$(".contents li").length-1){
			index=0;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}else{
			index++;
			$(".contents li").removeClass("selected");
			$(".contents li").eq(index).addClass("selected");
		}
	})
	
}

//第6页 
var pageSixUp = new Swiper('.page-six-up', {
	direction: 'horizontal',
	slidesPerView: 1.5,
	centeredSlides: false,
	loop: true,
	spaceBetween : 10,
});

var pageSixDown = new Swiper('.page-six-down', {
	direction: 'horizontal',
	slidesPerView: 1.1,
	centeredSlides: false,
	loop: true,
	spaceBetween : 10,
});

//第五屏
var pageSixDown = new Swiper('.mySwiperSec5', {
	loop: true,
	nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});

