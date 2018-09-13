$(function(){  	
	var title_h = 52;
	var item_w = Math.floor($('.item').width() * 1.3);
	$('.list-wrap .img-box,.list-wrap .item').height(item_w);
	
	$(window).resize(function(){
		var title_h = 52;
		var item_w = Math.floor($('.item').width() * 1.3);
		$('.list-wrap .img-box,.list-wrap .item').height(item_w);
	})
	
	//hover item
	$('.item').hover(function(){
		$(this).find('.pro-img').css({'opacity':'1'});
		$(this).find('.bottom-line i').css({'height':'100px'});
		$(this).find('.des-txt').css({'height':'60px'});
		$(this).find('.title').css({'height':'30px'});
		$(this).find('.title').removeClass('title-shadow');
		$(this).find('.img-box').addClass('active');
		$(this).find('.pro-img').addClass('scale');
	},function(){
		$(this).find('.pro-img').css({'opacity':'.7'});
		$(this).find('.bottom-line i').css({'height':'35px'});
		$(this).find('.des-txt').css({'height':'35px'});
		$(this).find('.title').css({'height':'80px'});		
		$(this).find('.title').addClass('title-shadow');
		$(this).find('.img-box').removeClass('active');
		$(this).find('.pro-img').removeClass('scale');
	})
	
	//简介有三行
	$('.th-row').hover(function(){
		$(this).find('.bottom-line i').css({'height':'135px'});
		$(this).find('.des-txt').css({'height':'85px'});
	},function(){
		$(this).find('.des-txt').css({'height':'35px'});
	})
	
	//导航
	$(".con-nav li").click(function(){
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		if(index !== 0){
			$('.wrap .box').eq(index-1).show().siblings().hide();
		}		
		
		new WOW({
			animateClass: 'flipInX animated'
		}).init();
		
	})
	
	//统计数量
	var data_all = $('.list-wrap .item').length;
	var data_vue = $('.list-wrap .item.vue').length;
	var data_mpvue = $('.list-wrap .item.mpvue').length;
	var data_pc = $('.list-wrap .item.pc').length;
	var data_phone = $('.list-wrap .item.phone').length;
	$("#data_all").html('('+data_all+')');
	$("#data_vue").html('('+data_vue+')');
	$("#data_mpvue").html('('+data_mpvue+')');
	$("#data_pc").html('('+data_pc+')');
	$("#data_phone").html('('+data_phone+')');
	
})














