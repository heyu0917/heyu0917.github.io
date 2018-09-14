//二级导航特效
$('.two-level-nav>ul>li').mouseover(function(event) {
	$(this).css({
		color: '#fff',
		background: '-webkit-linear-gradient(#8d8c8c, #e6e5e5)',
		background: '-o-linear-gradient(#8d8c8c, #e6e5e5)',
		background: '-moz-linear-gradient(#8d8c8c, #e6e5e5)',
		background: 'linear-gradient(#8d8c8c, #e6e5e5)',
	}).children('span').css('background', '#040000');
}).mouseout(function(event) {
	if (!$(this).hasClass('active')) {
		$(this).css({
			color: '#333333',
			background: 'none',
		}).children('span').css('background', 'none');
	}
});