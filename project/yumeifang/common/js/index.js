
$(function(){
	//btn
	var len = $("#banner_list").find("li").length;
	for(var i = 0; i < len; i++){
		$("#banner_btn").append('<li></li>');
	}
	$("#banner_btn li").eq(0).addClass("light");

	var timer,timeout;
	var index=0;
	$("#banner_btn").find("li").mouseover(function(){
		clearInterval(timer);
	
		$(this).addClass("light").siblings().removeClass("light");

		var _index=$(this).index();
		index=_index;
		$("#banner_list").find("li").eq(_index).fadeIn("slow").siblings().hide();
	});
	$("#banner_btn").find("li").mouseout(function(){
		timer = setInterval(timeout,3000);
	})

	timeout = function(){
		index++;
		var length=$("#banner_list").find("li").length;
		if(index >= length){
			index=0;
		};


		$("#banner_list").find("li").eq(index).fadeIn("slow").siblings().hide();
		$("#banner_btn").find("li").eq(index).addClass("light").siblings().removeClass("light");
	};
	//放下面
	timer = setInterval(timeout,3000);
})