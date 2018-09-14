$(function(){
	//alert($(window).height());
	
	//page3
	var page3_liW = $('.page3 ul li').width();
	$('.page3 ul li').height(page3_liW);
	
	//page7
	var page7_liW = $('.page7 ul li').width();
	var page7_liR = $('.page7 ul li').css('marginRight');
	$('.page7 ul li').height(page7_liW);
	$('.page7 ul li').css({'margin-bottom':page7_liR});
	
	//手机端总swiper
	var phoneContainer = new Swiper('.phone-container', {
		direction: 'vertical',
		resistanceRatio : 0,
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper){
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		} 
	});
	
})
