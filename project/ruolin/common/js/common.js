$(function(){
	//点击右侧栏电话咨询弹窗
	$(".contact-wrapper li").eq(2).click(function(){
		$(".popup-bg").animate({
			opacity: "1",
			zIndex: "112"
		});
		$(".popup-phone").show().stop().animate({
			top: "50%"
		}, 600, 'easeInOutQuart');
	})
	$(".close2-img").click(function(){
		$(".popup-bg").animate({
			opacity: "0",
			zIndex: "-1"
		},400);
		$(".popup-phone").hide().stop().animate({
			top: "-550px"
		}, 100, 'easeInOutQuart');
	})
	
	//第一屏导航栏特效
	$(".top-nav-item").hover(function() {
		$(this).find(".cover").stop().animate({
			top: 0
		}, 500, 'easeInOutCubic')
	}, function() {
		$(this).find(".cover").stop().animate({
			top: "-100%"
		}, 500, 'easeInOutCubic');
	});
	
	//底部联系我们滑出
	$(".callus").hover(function() {
		$(".callus-wrapper").stop().animate({
			left: 0
		}, 300);
	})
	$(".callus-wrapper .close").click(function() {
		$(".callus-wrapper").stop().animate({
			left: "-10000px"
		}, 3000);
	});
	
	//右侧边栏效果
//	$(".contact-wrapper li").hover(function() {
//		var no = $(this).index();
//		$(this).css({
//			background: 'url(../common/images/tip-bg-0' + (no + 1) + '.png)'
//		})
//	}, function() {
//		var no = $(this).index();
//		$(this).css({
//			background: ''
//		})
//	})
	
	//第六屏
	//轮播图
	var mySwiperSec6 = new Swiper('.SwiperSec6', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		//		autoplay : 2000,
		loop: true,
		autoHeight: true,
		grabCursor: true
	});
	//图片效果
	$(".SwiperSec6 .sec6-imgbox span").hover(function() {
		$(this).find("img").removeClass("gray");
		$(this).find("a").animate({
			bottom: 0
		}, 200);
	}, function() {
		$(this).find("img").addClass("gray");
		$(this).find("a").animate({
			bottom: '-100%'
		});
	})
	
	//若侧栏
	$(".contact-wrapper li").hover(function(){
		var i = $(this).index() + 1;
		$(this).find('img').attr('src','../common/images/tip-bg-0'+i+'.png');
	},function(){
		var i = $(this).index() + 1;
		$(this).find('img').attr('src','../common/images/tip-0'+i+'.gif');
	})
	
	//回到顶部
	$(".contact-wrapper li").eq(4).click(function(){
		$('html,body').animate({scrollTop: '0px'},500);
	})
})
