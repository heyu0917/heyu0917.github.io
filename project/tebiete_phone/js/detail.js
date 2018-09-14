//收藏
var collect = document.getElementById('collect');
var state = document.getElementById('collect_state');
var flag_c = true;
collect.addEventListener('tap',function(){
	if(flag_c){
		this.childNodes.item(0).src = 'img/collected.png';
		this.style.color = '#f60';
		this.childNodes.item(1).innerHTML = '已收藏';
		state.innerHTML = '收藏成功！';
		state.style.opacity = '1';
		
		setTimeout(function(){
			state.style.opacity = '0';
		},1000);
		
		flag_c = false;
	}else{
		this.childNodes.item(0).src = 'img/collect.png';
		this.style.color = '#999';
		this.childNodes.item(1).innerHTML = '收藏';
		state.innerHTML = '取消收藏！';
		state.style.opacity = '1';
		
		setTimeout(function(){
			state.style.opacity = '0';
		},1000);
		
		flag_c = true;
	}
})

//加入购物车
var car = document.getElementById('add_shopCar');
var car_popup = document.getElementById('shopCar_popup');
car.addEventListener('tap',function(){
	car_popup.style.opacity = '1';
	car_popup.style.zIndex = '116';
	setTimeout(function(){
			car_popup.style.opacity = '0';
			car_popup.style.zIndex = '-1';
	},2000);
})

//领取优惠券
var bg = document.getElementById('bg');
var cou_spots = document.getElementById('coupons_spots');
var cou_close = document.getElementById('coupons_close');
var cou_popup = document.getElementById('coupons_popup');
cou_spots.addEventListener('tap',function(){
	bg_in();
	cou_popup.style.bottom = "0";
	cou_popup.style.opacity = "1";
})
cou_close.addEventListener('tap',function(){
	bg_out();
	cou_popup.style.bottom = "-80%";
	cou_popup.style.opacity = "0";
})

//促销
var pro_spots = document.getElementById('promotion_spots');
var pro_close = document.getElementById('promotion_close');
var pro_popup = document.getElementById('promotion_popup');
pro_spots.addEventListener('tap',function(){
	bg_in();
	pro_popup.style.bottom = "0";
	pro_popup.style.opacity = "1";
})
pro_close.addEventListener('tap',function(){
	bg_out();
	pro_popup.style.bottom = "-60%";
	pro_popup.style.opacity = "0";
})

//已选
var col_spots = document.getElementById('collected_spots');
var col_close = document.getElementById('collected_close');
var col_popup = document.getElementById('collected_popup');
var col_img = document.getElementById('collected_popup_img');
var col_bottom = document.getElementById('collected_footer');
col_spots.addEventListener('tap',function(){
	bg_in();
	col_popup.style.bottom = "0";
	col_popup.style.opacity = "1";
	
	col_img.style.bottom = '.24rem';
	col_bottom.style.bottom ='0';
})
col_close.addEventListener('tap',function(){
	bg_out();
	col_popup.style.bottom = "-80%";
	col_popup.style.opacity = "0";
	
	col_img.style.bottom = '0';
	col_bottom.style.bottom ='-80%';
})
//已选里的选择
var cp_li = document.getElementsByName('cp_li');
for(var i=0;i<cp_li.length;i++){
	cp_li[i].onclick = function(){
		this.value = this.id;
	}

}


//bg
function bg_in(){
	bg.style.opacity = "1";
	bg.style.zIndex = "112";
}

function bg_out(){
	bg.style.opacity = "0";
	bg.style.zIndex = "-1";
}

//套餐
var wrap_one = document.getElementById('wrap_one');
var pac_spots = document.getElementById('package_spots');
var pac_popup = document.getElementById('package_popup');
var pac_back =  document.getElementById('package_back');
var nav_back =  document.getElementById('nav_back');
pac_spots.addEventListener('tap',function(){
	pac_popup.style.left = 0;
	pac_popup.style.zIndex = "113";
	wrap_one.style.left = "-100%";
})
pac_back.addEventListener('tap',function(){
	pac_popup.style.left = "100%";
	pac_popup.style.zIndex = "-1";
	wrap_one.style.left = 0;
})


//套餐里的收缩展开
//var f_flag = true,
//	s_flag = true;
//$('#package_popup_list').on('tap','.arrow-direction',function(){
//	var dis = this.parentNode.parentNode.getElementsByTagName('div');
//	if(this.className.indexOf('arrowT-first') >= 0){
//		if(f_flag){
//			this.src = 'img/arrowD_t.png';
//			dis[1].className = "package-img clearfix package-li-conImg";
//			dis[2].className = "package-li-con display-none";
//			f_flag = false;
//		}else{
//			this.src = 'img/arrowT_t.png';
//			dis[1].className = "package-img clearfix package-li-conImg display-none";
//			dis[2].className = "package-li-con";
//			f_flag = true;
//		}	
//	}
//	if(this.className.indexOf('arrowT-first') < 0){
//		if(s_flag){
//			this.src = 'img/arrowT_t.png';
//			dis[1].className = "package-img clearfix package-li-conImg display-none";
//			dis[2].className = "package-li-con";
//			s_flag = false;
//		}else{
//			this.src = 'img/arrowD_t.png';
//			dis[1].className = "package-img clearfix package-li-conImg";
//			dis[2].className = "package-li-con display-none";
//			s_flag = true;
//		}
//	}
//})

//点击头部导航栏切换
var nav_li0 = document.getElementById('nav_li0'),
	nav_li1 = document.getElementById('nav_li1'),
	nav_li2 = document.getElementById('nav_li2');
var goods = document.getElementById('goods'),
	detail = document.getElementById('detail'),
	evalute = document.getElementById('evalute');
nav_li1.onclick = function(){
	this.className = 'select';
	nav_li0.className = '';
	nav_li2.className = '';
	
	goods.style.display = "none";
	detail.style.display = "block";
	evalute.style.display = "none";	
	return false;
}
nav_li0.onclick = function(){
	this.className = 'select';
	nav_li1.className = '';
	nav_li2.className = '';
	
	goods.style.display = "block";
	detail.style.display = "none";
	evalute.style.display = "none";	
	return false;
}
nav_li2.onclick = function(){
	this.className = 'select';
	nav_li1.className = '';
	nav_li0.className = '';
	
	goods.style.display = "none";
	detail.style.display = "none";
	evalute.style.display = "block";
	return false;
}







