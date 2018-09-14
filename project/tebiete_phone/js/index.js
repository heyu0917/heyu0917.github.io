$(function(){
	//address_id从登录的存储信息中获得
	var address_id;
	
	$.ajax({
		type: "post",
		url: domain_name+"index",
		dataType: "json",
		data: {
			address_id: address_id
		},
		success: function(re){
			if(re.status == 1){
				var data = re.data;
				//console.log(JSON.stringify(re.data));
				
				//轮播图
				var carouselImg = data.image;
				$.each(carouselImg,function(){
					var img = this.img,
						goods_id = this.goods_id;
						
					carousel_img(img,goods_id);					
				})
				
				//专区
				var cate = data.cate;
				$.each(cate,function(){
					var name = this.name,
						cate_pic = this.cate_pic,
						cate_id = this.cate_id;
					
					cate_html(name,cate_pic,cate_id);
				})
			}
			
			swipe_img();
		}
	})
})

function cate_html(name,cate_pic,cate_id){
	var lis = '<li><img src="'+domain_name+''+cate_pic+'"/>'+name+'</li>';
	$(".area-item-list").prepend(lis);
}

function carousel_img(src,id){
	
	var li = '<li><a href="detail.html?id='+id+'"><img src="'+domain_name+''+src+'"></a></li>';
	$("#banner_list").append(li);
	
}

function swipe_img(){
	var len = document.getElementById('banner_list').getElementsByTagName('li').length;
	var btn = document.getElementById("banner_btn");
	for(var i = 0; i < len; i++){
		btn.innerHTML += '<li></li>';
	}
	document.getElementById('banner_btn').getElementsByTagName('li')[0].className = 'light';
	
	var slider = Swipe(document.getElementById('banner_list_wrap'), {
			auto: 3000,
			continuous: true,
			callback: function(pos) {
				var i = bullets.length;
				while (i--) {
					bullets[i].className = ' ';
				}
				bullets[pos].className = 'light';
			}

		});
	var bullets = document.getElementById('banner_btn').getElementsByTagName('li');	
}




