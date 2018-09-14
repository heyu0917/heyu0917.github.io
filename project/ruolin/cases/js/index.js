$(function(){
	//part1中的banner图的索引按钮
	var b_len = $(".part1-right-list li").length;
	var li = "";
	for(var i=0;i<b_len;i++){
		li += '<!--<li></li>-->';
	}
	var b_create = document.createElement('ul');
	b_create.className = "banner-btn-list";
	$(".part1-right-list").after(b_create);
	$(".banner-btn-list").html(li);
	$(".banner-btn-list li").eq(0).addClass('light');
	
	//part1中的banner图切换效果
	var b = 0;
	var timer,timeout;
	$(".banner-btn-list li").mouseover(function(){
		clearInterval(timer);
		
		$(this).addClass('light').siblings().removeClass('light');
		var index = $(this).index();
		b=index;
		$(".part1-right-list li").eq(index).fadeIn().siblings().hide();
	})
	$(".banner-btn-list li").mouseout(function(){
		timer = setInterval(timeout,3000);
	})
	timeout = function(){
		b++;
		if(b>=b_len){
			b = 0;
		}
		$(".part1-right-list li").eq(b).fadeIn().siblings().hide();
		$(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
	}
	//放下面
	timer = setInterval(timeout,3000);
	
	//电话号码中间部分显示成****
	var phone_len = $(".part6-phone").length;
	for(var i=0;i<phone_len;i++){
		var phone = $('.part6-list .part6-phone').eq(i).html();
		var new_phone = phone.substr(0,3)+"****"+phone.substr(7,11);
		$('.part6-list .part6-phone').eq(i).html(new_phone);
		
	}
	
	
	//客户反馈--轮播图
	var feedback1 = new Swiper('.part6-list-box', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		//		autoplay : 2000,
		loop: false,
		slidesPerGroup : 3,//每行三个轮播
		slidesPerView : 3,//每行放三个
		slidesPerColumn :2,//有两行一起轮播
		slidesPerColumnFill : 'row',
		pagination: '.swiper-pagination',
		autoplayDisableOnInteraction : false,
//		slidesPerGroup : 1,   //测试
//		slidesPerView : 1,
//		slidesPerColumn : 1,
//		slidesPerColumnFill : 'row',
	});
	
	//客户反馈--导航
	setTimeout(function(){
		var n_len = $(".part6-nav-number span").length;
		
		//控制分页导航宽度
		if(n_len >= 6){
			n_len = 6;
		}
		var nav_w = 120 + 40*(n_len-1);
		$('.part6-nav').css({'width':nav_w});
		
		for(var i=0;i<n_len;i++){
			$(".part6-nav-number span").eq(i).html(i+1);
		}
		if(n_len>=7){
			$(".part6-nav-number span").eq(4).html("...");
			$(".part6-nav-number span").eq(4).addClass("number-ellipsis");
		}else{
			$(".part6-nav-number span").eq(4).html("5");
			$(".part6-nav-number span").eq(4).removeClass("number-ellipsis");
		}
		$(".part6-nav-number span").eq(5).html(n_len);
		var n=1;
		$(".part6-next,.part6-next2").click(function(){
			n++;
			if(n_len>6){
				add(n,n_len);			
			}
			//console.log(n+' '+n_len)
		})
		$(".part6-prev,part6-prev2").click(function(){
			n--;
			if(n==0){
				n==1;
			}
			if(n_len>6){
				reduce(n,n_len);			
			}			
			//console.log(n+' '+n_len)
		})
	},200) 
	
	//相关案例
	//轮播图
	var mySwiperSec6 = new Swiper('.SwiperSec6_1', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		autoplay : 2000,
		loop: true,
		autoHeight: true,
		grabCursor: true
	});		
})

function add(n,n_len){
	if(n>4){
		$(".part6-nav-number span").eq(4).html("...");
		$(".part6-nav-number span").eq(4).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(3).html(n);
		$(".part6-nav-number span").eq(3).addClass("swiper-pagination-bullet-active");
	}
	if(n==5){
		$(".part6-nav-number span").eq(2).html("...");
		$(".part6-nav-number span").eq(2).addClass("number-ellipsis");
	}
	if(n==6){
		$(".part6-nav-number span").eq(5).removeClass("swiper-pagination-bullet-active");
	}
	if(n==n_len-1){
		$(".part6-nav-number span").eq(2).html("3");
		$(".part6-nav-number span").eq(2).removeClass("number-ellipsis");
		$(".part6-nav-number span").eq(4).html(n);
		$(".part6-nav-number span").eq(3).html("...");
		$(".part6-nav-number span").eq(3).addClass("number-ellipsis");
		$(".part6-nav-number span").eq(3).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(4).addClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(4).removeClass("number-ellipsis");
	}
	if(n==n_len){
		$(".part6-nav-number span").eq(3).html("4");
		$(".part6-nav-number span").eq(3).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(3).removeClass("number-ellipsis");
		$(".part6-nav-number span").eq(4).addClass("number-ellipsis");
		$(".part6-nav-number span").eq(4).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(5).addClass("swiper-pagination-bullet-active");
	}
}
function reduce(n,n_len){
	if(n>4){
		$(".part6-nav-number span").eq(4).html("...");
		$(".part6-nav-number span").eq(4).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(3).html(n);
		$(".part6-nav-number span").eq(3).addClass("swiper-pagination-bullet-active");
	}
	if(n==6){
		$(".part6-nav-number span").eq(2).html("...");
		$(".part6-nav-number span").eq(2).addClass("number-ellipsis");
		$(".part6-nav-number span").eq(5).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(4).html("...");
		$(".part6-nav-number span").eq(4).addClass("number-ellipsis");
		$(".part6-nav-number span").eq(3).removeClass("number-ellipsis");
	}
	if(n==n_len-1){
		$(".part6-nav-number span").eq(4).html(n);
		$(".part6-nav-number span").eq(3).html("...");
		$(".part6-nav-number span").eq(3).addClass("number-ellipsis");
		$(".part6-nav-number span").eq(3).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(4).addClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(4).removeClass("number-ellipsis");
	}
	if(n==4){
		$(".part6-nav-number span").eq(2).html("3");
		$(".part6-nav-number span").eq(2).removeClass("number-ellipsis");
		$(".part6-nav-number span").eq(3).html("4");
		$(".part6-nav-number span").eq(3).addClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(3).removeClass("number-ellipsis");
		$(".part6-nav-number span").eq(4).addClass("number-ellipsis");
		$(".part6-nav-number span").eq(4).removeClass("swiper-pagination-bullet-active");
		$(".part6-nav-number span").eq(5).removeClass("swiper-pagination-bullet-active");
	}
}












