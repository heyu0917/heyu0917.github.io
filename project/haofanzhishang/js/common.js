$(function(){
	
	//左侧栏导航	
	$(".er-nav li .title").click(function(){
		$(this).parent().addClass('active');
		$(".er-nav li .item").not($(".er-nav li.light .item")).hide();
		$(this).next().slideDown();
	});	
	
	$(".er-nav li.light .title").remove();
	var li_html = $(".er-nav li.light");
	$(".er-nav li.light").remove();
	$(".er-nav ul").prepend(li_html);
	
	
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
		$(".banner-list li").eq(index).fadeIn(1500).siblings().hide();
	})
	$(".banner-btn-list li").mouseout(function(){
		timer = setInterval(timeout,3000);
	})
	timeout = function(){
		b++;
		if(b>=b_len){
			b = 0;
		}
		$(".banner-list li").eq(b).fadeIn(1500).siblings().hide();
		$(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
	}
	//放下面
	timer = setInterval(timeout,3000);
})
