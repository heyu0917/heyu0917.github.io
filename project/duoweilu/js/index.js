$(function(){
	$('#index_list a.active').parents('li').addClass('active');
	$('#index_list li .title').hover(function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
	})
	
	$('#show_nav').click(function(){
		$('.index-nav').css({'right': 0})
	})
	$('#hide_nav').click(function(){
		$('.index-nav').css({'right': '-400px'})
	})
})
