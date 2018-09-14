$(function(){
	// 百度地图API功能
	//22.987444,113.374627
	var map = new BMap.Map("map");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(113.374627,22.987444), 14);  // 初始化地图,设置中心点坐标和地图级别
	var new_point2 = new BMap.Point(113.374627,22.987444);
	var marker2 = new BMap.Marker(new_point2); // 创建标注
	map.addOverlay(marker2); // 将标注添加到地图中
	map.panTo(new_point2);
	map.addControl(new BMap.NavigationControl()); // 添加默认缩放平移控件
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放	
})
