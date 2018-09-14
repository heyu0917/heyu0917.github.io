function plusReady(){
	// Android处理返回键
	var pageUrl=window.location.href; 
	plus.key.addEventListener('backbutton',function(){
	//判断是否返回到首页，是->退出,否则返回上一页
	if(pageUrl.indexOf('index') < 0){
		history.back();
		scan.close();
		document.getElementById('index_page').style.left = '0';
		document.getElementById('footer').style.left = '0';
		document.getElementById('header_top').style.left = '0';
		document.getElementById('scan_page').style.left = '100%';

	}else{
	//if(confirm('确认退出？')){
		plus.runtime.quit();
	//}
	}	
	},false);
}
//扩展API是否准备好，如果没有则监听“plusready"事件
if(window.plus){
plusReady();
}else{
document.addEventListener('plusready',plusReady,false);
}

