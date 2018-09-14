$(function(){
	var len = $('.mn .item').length;
	
	for(var i=0;i<len;i++){
		var p1w = $('.mn .item').eq(i).find('.item-title .p1').width();
		console.log(p1w)
		if(p1w >= 400){
			$('.mn .item').eq(i).find('.item-title .p2').addClass('next');
			$('.mn .item').eq(i).find('ul').addClass('mtop');
		}
	}
	
	
})
