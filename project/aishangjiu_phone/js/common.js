$(function(){
	
	var img_flag = true;
	$('.menu-img').on('click',function(){
		if(img_flag){
			$('.menu').animate({right: 0},'100');
			$('.bg').show();
			img_flag = false;
		}else{
			$('.menu').animate({right: '-40%'},'100');
			$('.bg').hide();
			img_flag = true;
		}
	})
	$('.bg').on('click',function(){
		$(this).find('.img2').removeClass('none');
		$(this).find('.img3').addClass('none');
		$('.menu').animate({right: '-40%'},'100');
		$('.bg').hide();
		img_flag = true;
	})
	
	$('.er-nav a').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	
//	$('img').load(function(){
//		
//	})
	
	setTimeout(function(){
		scrollNav()
	},1000)
	
	
})

function scrollNav(){
	var length = $('.content .part').length;
//	console.log(length)
	var h = 0;
	var heightArr = [];
	for(var i=1;i<=length;i++){
		h += $('.content .part'+i+'').height()
		heightArr.push(h)
	}
//	console.log(heightArr)
	var $nav = $('.er-nav a');
	$(window).scroll(function(e){
		var y = $(this).scrollTop();
//		console.log(y)
		for(let i=0;i<heightArr.length;i++){
			if(y>0 && y<heightArr[0]){
				$nav.eq(0).addClass('active').siblings().removeClass('active')
			}else if(y>heightArr[i-1] && y<=heightArr[i]){
				$nav.eq(i).addClass('active').siblings().removeClass('active')
			}
		}
		
　　		var scrollHeight = $(document).height();
	　　var windowHeight = $(this).height();
	　　if(y + windowHeight == scrollHeight){
//	　　　　 console.log("已经到最底部了！");
		    $('.er-nav a:last-child').addClass('active').siblings().removeClass('active')
	　　}
	})
}
