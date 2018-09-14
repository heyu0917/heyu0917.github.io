var _idx = 0;
$(function(){
	var winW = $(window).width();
	var winH = $(window).height();

	$(".banner-img img").css({"width": winW, "height": winH});

	bindDOM();
})

function bindDOM(){
	var winW = $(window).width();
	var bannerList = document.getElementById("banner_list");
	var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
		transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];

	var startHandler = function(e){
		this.startTime = new Date() * 1;
		this.startX = e.touches[0].pageX;

		this.offsetX = 0;
	}

	var moveHandler = function(e){
		e.preventDefault();
		this.offsetX = e.touches[0].pageX - this.startX;
		console.log(this.offsetX);

		//$("#banner_list").css({transform: 'translate3d('+this.offsetX+'px,0,0)'});
	}

	var endHandler = function(e){
		e.preventDefault();

		var boundary = winW / 6;
		var endTime = new Date() * 1;
		
		if(endTime - this.startTime > 300){
			if(this.offsetX >= boundary){
				goPage('-1');
			}else if(this.offsetX < -boundary){
				goPage('+1');
			}else{
				goPage('0');
			}
		}else{
			if(this.offsetX >= 50){
				goPage('-1');
			}else if(this.offsetX < -50){
				goPage('+1');
			}else{
				goPage('0');
			}
		}
	}

	bannerList.addEventListener('touchstart',startHandler);
	bannerList.addEventListener('touchmove',moveHandler);
	bannerList.addEventListener('touchend',endHandler);
}

function goPage(n){
	var idx = _idx;
	console.log(idx);
	var cidx;
	var winW = $(window).width();
	var len = $("#banner_list").find('li').length;

	if(typeof n == 'number'){
		cidx = idx;
	}else if(typeof n == 'string'){
		cidx = idx + n*1;
	}

	if(cidx > len-1){
		cidx = 0;
	}else if(cidx < 0){
		cidx = len - 1;
	}

	_idx = cidx;

	$("#banner_list").css({transform: 'translate3d(-'+cidx*winW+'px,0,0)',transition: 'all .2s ease-out'});	
}




