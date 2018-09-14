$(function(){
	$('.cplist li').click(function(){
		$('.bg,.pic-popup').fadeIn(300);
		var pText = $(this).find('p').html();
		var src = $(this).find('img').attr('src');
		$('.pic-popup p').html(pText);
		$('.pic-popup img').attr('src',src);
	})
	
	$('.bg').click(function(){
		$('.bg,.pic-popup').fadeOut(300);
	})
})
