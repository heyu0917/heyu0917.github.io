$(function(){
	$('.nav-list .item a.active').parents('li').addClass('active');
	var itemImg = '<img src="../img/nav1.png" class="item-img1"/><img src="../img/nav2.png" class="item-img2"/>'
	$('.nav-list .item a.active').append(itemImg)
	$('.nav-list li.active').append('<img src="../img/nav3.png" class="li-img1"/>');
	
	$('.nav ul li').hover(function(){
		$(this).find('.item').show();
		$(this).siblings().find('.item').hide();
		var cls = $(this).attr('class');
		if(cls == undefined || cls.indexOf('active') < 0){
			$(this).append('<img src="../img/nav3.png" class="li-img1"/>');
		}
	},function(){
		var cls = $(this).attr('class');
		if(cls == undefined || cls.indexOf('active') < 0){
			$(this).find('.li-img1').remove();
		}
		$(this).find('.item').hide();
	})
	
	
	//banner图的索引按钮
	var b_len = $(".banner-list li").length;
	var li = "";
	for(var i=0;i<b_len;i++){
		li += '<li></li>';
	}
	var b_create = document.createElement('ul');
	b_create.className = "banner-btn-list";
	$(".banner-list").after(b_create);
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
		$(".banner-list li").eq(index).fadeIn(800).siblings().fadeOut(600);
	})
	$(".banner-btn-list li").mouseout(function(){
		timer = setInterval(timeout,3000);
	})
	timeout = function(){
		b++;
		if(b>=b_len){
			b = 0;
		}
		$(".banner-list li").eq(b).fadeIn(800).siblings().fadeOut(600);
		$(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
	}
	//放下面
	timer = setInterval(timeout,3000);
	
	
})
