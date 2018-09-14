$(function(){
//	$("#part6_list li:even").hover(function(){
//		var i = ($(this).index())/2 + 1;
//		$(this).find('img').attr("src",'images/part6_1_'+i+'.png')
//	},function(){
//		var i = ($(this).parent().index())/2 + 1;
//		$(this).find('img').attr("src",'images/part6_2_'+i+'.png')
//	})
	
	//part8
	var mySwiperpart8 = new Swiper('.swiperpart8', {
		nextButton: '.swiper-button-next',
		//		autoplay : 2000,
		loop: true,
		slidesPerView : '2',
		loopedSlides :4,
		autoHeight: true,
		grabCursor: true
	});
	
	//使轮播的图片和内容背景一样高
	var s_height = $(".swiperpart8 .swiper-slide").height();
	console.log(s_height);
	$(".swiperpart8 .leftpart,.swiperpart8 .rightpart").height(s_height);
	
	//hover 边框的变化
	$("#part7_list li").hover(function(){
		$(this).css({"border-color": "#ddd"}).siblings().css({"border-color":"#fff"});
	})
})
