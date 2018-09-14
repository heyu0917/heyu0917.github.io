$(function(){
	$("#banner_btn").find('li').mouseover(function(){
		$(this).addClass('light').siblings().removeClass('light');
		var idx = $(this).index();
		$("#banner_img").find("li").eq(idx).fadeIn('slow').siblings().hide();
	})

	var i = 0;
	setInterval(function(){
		i++;

		var len = $("#banner_img").find('li').length;
		if(i >= len){
			i = 0;
		}

		$("#banner_img").find("li").eq(i).fadeIn('slow').siblings().hide();
		$("#banner_btn").find("li").eq(i).addClass('light').siblings().removeClass('light');
	},3000)

	$(".product-img").hover(function(){
		$(this).find('.product-link').toggle();
	})

	$(".about-item").find('li').hover(function(){
		$(".item-select").addClass('active');
		$(this).addClass('item-select').siblings().removeClass('item-select');
		$(this).find('.icon').html("-");
		$(this).siblings().find('.icon').html("+");
	},function(){
		$(this).removeClass('item-select');
		$(this).find('.icon').html("+");
		$('.active').addClass('item-select');
		$('.active').find('.icon').html("-");
	})

	/*productDetail*/
	$("#p_nav_list").find('li').click(function(){
		$(this).addClass('p-light').siblings().removeClass('p-light');
		var index = $(this).index();
		$("#p_part2_li").find('div').eq(index).show().siblings().hide();
	})
})