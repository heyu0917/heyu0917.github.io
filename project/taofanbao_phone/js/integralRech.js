$(function(){
	$('#moeny').bind('input propertychange', function() {    
		var mon = $("#moeny").val().trim();

		if(mon.substr(0,1) !== "0"){
			$('#sure_button').removeClass('big-button-gray');

			//点击确定按钮,出现支付
			sure_pay();
		}else{
			$('#sure_button').addClass('big-button-gray');
		}
  	});

})

//出现支付
function sure_pay(){
	$('#sure_button').click(function(){
		$(".bg").css({"opacity":1,"z-index":"111"});
		$(".popup").css({"bottom":"0"});		
	});

	$("#close").click(function(){
		$(".bg").css({"opacity":0,"z-index":"-1"});
		$(".popup").css({"bottom":"-50%"});	
	})
}








