$(function(){
	var banner_h = $(window).width() * 0.417;
	$('.banner').height(banner_h);
	
	//banner图的索引按钮
	var b_len = $(".banner-list li").length;
	var li = "";
	for(var i=0;i<b_len;i++){
		var j = i+ 1;
		li += '<li>0'+j+'</li>';
	}
	var b_create = document.createElement('ul');
	b_create.className = "banner-btn-list";
	$(".banner-list").after(b_create);
	$(".banner-btn-list").html(li);
	$(".banner-btn-list li").eq(0).addClass('light');
	$(".banner-btn-list").append('<span></span>')
	
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
	
	var map = new BMap.Map("map");    // 创建Map实例
    // 初始化地图,设置中心点坐标和地图级别 22.7710773954,113.3532396337
    var point = new BMap.Point(113.3532396337,22.7710773954);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point); // 创建标注
    map.addOverlay(marker); // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    map.panTo(point);
    map.addControl(new BMap.NavigationControl()); // 添加默认缩放平移控件
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放   
})
