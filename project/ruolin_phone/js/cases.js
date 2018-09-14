$(function(){
	//案例详情--查看更多
	var m_flag = true;
	var el = $(".part2-list1"),
		curHeight = el.height();
	$("#casesdetail_more").click(function(){
		if(m_flag){
			autoHeight = el.css('height', 'auto').height();
			el.height(curHeight).animate({height: autoHeight}, 500);
			$(this).find("span").html("收起");
			$(this).find("img").addClass('open');
			m_flag = false;			
		}else{
			autoHeight = el.css('height', 'auto').height();
			el.height(autoHeight).animate({height: curHeight}, 500);
			$(this).find("span").html("查看更多");
			$(this).find("img").removeClass('open');
			m_flag = true;	
		}
	});
	
	//案例综述--查看更多
	var m_flag2 = true;
	var el2 = $("#case_zhongshu"),
		curHeight2 = el2.height();
	$("#more_detail").click(function(){
		if(m_flag2){
			autoHeight = el2.css('height', 'auto').height();
			el2.height(curHeight2).animate({height: autoHeight}, 300);
			$(this).find("span").html("收起");
			$(this).find("img").addClass('open');
			m_flag2 = false;			
		}else{
			autoHeight = el2.css('height', 'auto').height();
			el2.height(autoHeight).animate({height: curHeight2}, 300);
			$(this).find("span").html("查看更多");
			$(this).find("img").removeClass('open');
			m_flag2 = true;	
		}
	})

	var window_height = $(window).height();
	$('.fullpage,.phone-banner').css('height',window_height+'px');
	//手机端首页swiper
	var phoneBanner = new Swiper('.banner-swiper', {
		pagination : '.swiper-pagination',
		loop:true,
		// 自动
		// autoplay: 1500,
	});
	
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
		slidesPerGroup : 2,//每行三个轮播
		slidesPerView : 2,//每行放三个
		slidesPerColumn : 3,//有两行一起轮播
		slidesPerColumnFill : 'column',
		pagination: '.swiper-pagination',
//		slidesPerGroup : 1,  // 测试
//		slidesPerView : 1,
//		slidesPerColumn : 1,
//		slidesPerColumnFill : 'row',
	});
	
	//客户反馈--导航
	setTimeout(function(){
		var n_len = $(".part6-nav-number span").length;
		
		//分页导航宽度
		if(n_len >= 6){
			n_len = 6;
		}
		var fontSize = document.documentElement.clientWidth / 7.5;
		var nav_w = (2.54+(n_len-1)*.85)*fontSize;
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
	/*
	 * 第四页
	 */
	//上面的滑块
	var pageFourSlide = new Swiper('.page-four-slide', {
		direction: 'horizontal',
		slidesPerView: 2.2
		,
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
	
	//图片评论轮播图
	lunbo();
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



