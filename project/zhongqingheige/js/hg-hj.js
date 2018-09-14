$(function(){
	var margin  =40;
	var parm = 0.63;
	var img_w = Math.floor(($('.picScroll-left').width() - margin) / 2);
	var img_h = Math.floor(img_w * parm);
	console.log(img_w +' '+img_h);
	$('.picScroll-left').css({'height':img_h});
	$('.bd li img').css({'width':img_w,'height':img_h});
	
	
	jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:2});

})












