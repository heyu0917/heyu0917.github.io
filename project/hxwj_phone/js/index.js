var m = '';
$(function(){
	var img_height = $('.contentIndex').height() - 15;

	$('#curousel_list span').css('height',img_height);
	//左右滑屏
	leftRight_screen();
})

function leftRight_screen(){
	var li_width = $("#curousel_list li").width();
	var curousel_List = document.getElementById("curousel_list");

	var startHandler = function(e){
		this.startTime = new Date() * 1;
		this.startX = e.touches[0].pageX;

		this.offsetX = 0;
	}

	var moveHandler = function(e){
		e.preventDefault();
		this.offsetX = e.touches[0].pageX - this.startX;
	}

	var endHandler = function(e){
		var boundary = li_width / 20;
		var endTime = new Date() * 1;
		
		if(endTime - this.startTime > 50){
			if(this.offsetX >= boundary){
				goPage('-1');
			}else if(this.offsetX < -boundary){
				goPage('+1');
			}else{
				goPage('0');
			}
		}else{
			if(this.offsetX >= 5){
				goPage('-1');
			}else if(this.offsetX < -5){
				goPage('+1');
			}else{
				goPage('0');
			}
		}
	}

	curousel_List.addEventListener('touchstart',startHandler);
	curousel_List.addEventListener('touchmove',moveHandler);
	curousel_List.addEventListener('touchend',endHandler);
}

function goPage(n){
	if(m == '') m = 0;

	var idx = m;
	var cidx;
	var li_width = $("#curousel_list li").width();
	var len = $("#curousel_list li").length;
	var curousel_List = document.getElementById("curousel_list");

	if(typeof n == 'number'){
		cidx = idx;
	}else if(typeof n == 'string'){
		cidx = idx + n*1;
	}
	if(cidx > len-1){
		cidx = len - 1;
	}else if(cidx < 0){
		cidx = 0;
	}

	m = cidx;
	$("#curousel_list li").eq(cidx).find('span').css({"transform":'scale(1)',"-webkit-transform":'scale(1)',"-o-transform":'scale(1)',"-ms-transform":'scale(1)',"-moz-transform":'scale(1)'});
	$("#curousel_list li").eq(cidx).siblings().find('span').css({"transform":'scale(.92)',"-webkit-transform":'scale(.92)',"-o-transform":'scale(.92)',"-ms-transform":'scale(.92)',"-moz-transform":'scale(.92)'});

	$("#curousel_list").css({"margin-left":'-'+cidx*li_width+'px',"transition": 'all .3s linear',"-webkit-transition": 'all .3s linear',"-ms-transition": 'all .3s linear',"-moz-transition": 'all .3s linear',"-o-transition": 'all .3s linear'});
} 


