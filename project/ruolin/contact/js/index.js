$(function(){
	// 百度地图API功能
	
	var map = new BMap.Map("map1");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	var new_point2 = new BMap.Point(116.404,39.915);
	var marker2 = new BMap.Marker(new_point2); // 创建标注
	map.addOverlay(marker2); // 将标注添加到地图中
	map.panTo(new_point2);
	map.addControl(new BMap.NavigationControl()); // 添加默认缩放平移控件
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放	
	
	var map = new BMap.Map("map2");    // 创建Map实例
	var latitude1 = 30.598428,longitude1 = 114.311831;
	map.centerAndZoom(new BMap.Point(longitude1, latitude1),11);  // 初始化地图,设置中心点坐标和地图级别
	var new_point1 = new BMap.Point(longitude1,latitude1);
	var marker1 = new BMap.Marker(new_point1); // 创建标注
	map.addOverlay(marker1); // 将标注添加到地图中
	map.panTo(new_point1);
	map.addControl(new BMap.NavigationControl()); // 添加默认缩放平移控件
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放	
	
	//导航
//	$("#contact_nav li").click(function(){
//		$(this).addClass('active').siblings().removeClass('active');
//		var index = $(this).index();
//		$(".contact-part").eq(index).css({"display":"block"});
//		$(".contact-part").not($(".contact-part").eq(index)).css({"display":"none"});
//	})
})
