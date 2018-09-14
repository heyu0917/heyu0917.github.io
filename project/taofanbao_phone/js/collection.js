$(function(){

	var mySwiper1 = new Swiper('.swiper-li-middle',{
		spaceBetween : 8,
		slidesPerView : 3.3,
	}); 

	//导航
	$(".collect-nav li").click(function(){
		$(this).addClass("active").siblings().removeClass('active');

		var index = $(this).index();
		if(index == 0){
			$(".collection-con-list1").css({"display":"block"});
			$(".collection-con-list2").css({"display":"none"});
			$('.delete-box').css({"display":"none"});
			$('#edit').find('span').html("编辑");
			$(".collection-con-part2 a").removeClass('marginleft');
		}
		if(index == 1){
			$(".collection-con-list2").css({"display":"block"});
			$(".collection-con-list1").css({"display":"none"});
			$('.delete-box').css({"display":"none"});
			$('#edit').find('span').html("编辑");
			$(".collection-con-part2 a").removeClass('marginleft');
		}
	})

	//编辑
	edit();
})

//编辑
function edit(){
	var e_flag = true;
	$("#edit").click(function(){
		if(e_flag){
			$(this).find('span').html("完成");
			$(".collection-con-part2 a").addClass('marginleft');
			//$('.sel-box').css({"display":"block"});
			$('.sel-box').css({"opacity":1,"z-index":'11'});
			
			$('.delete-box').css({"display":"block"});
			$('.collection-con').addClass('content');
									
			e_flag = false;
		}else{
			$(this).find('span').html("编辑");
			$(".collection-con-part2 a").removeClass('marginleft');
			//$('.sel-box').css({"display":"none"});
			$('.sel-box').css({"opacity":0,"z-index":'-1'});
			
			$('.delete-box').css({"display":"none"});
			$('.collection-con').removeClass('content');
			
			e_flag = true;
		}		
	})
	
	if(e_flag){
		img_change();
	}
}

//图片
function img_change(){
	$('.sel-box').click(function(){
		var imgObj = $(this).find('img');
		if(imgObj.attr('class') == 'sel-img sel'){
			imgObj.attr('src','../img/round.png');
			imgObj.removeClass('sel');
			console.log('b');
		}else{
			imgObj.attr('src','../img/right.png');
			imgObj.addClass('sel');		
			console.log('c');
		}	
	})
}