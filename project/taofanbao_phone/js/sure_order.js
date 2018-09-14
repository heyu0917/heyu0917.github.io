$(function(){
	//已选中的数量加减
	var n = 1;
	$("#add").click(function(){
		n++;
		$(this).prev().html(n);
		$("#reduce").css("color","#222");
		total_price();
	})
	$("#reduce").click(function(){
		if(n>2){
			n--;
			$(this).next().html(n);
			$("#reduce").css("color","#222");
			total_price();			
		}else{
			$(this).next().html(1);
			$("#reduce").css("color","#e6e6e6");
			n=1;
		}
	})

	//实付款
	function total_price(){
		var num = $('.num-frame-num').html();
		$('#num1').html(num);

		var price = $('#prices0').html();
		var prices1 = num*price;
		var fast_price = $('#fast_price').html();
		var prices2 = Number(prices1) + Number(fast_price);

		$('#prices1').html(prices1.toFixed(2));
		$('#prices2').html(prices1.toFixed(2));
		$('#total_price').html(prices2.toFixed(2));
	}

	//电话号码中间部分显示成****
	var phone_len = $(".address-number").length;
	for(var i=0;i<phone_len;i++){
		var phone = $('.address-number').html();
		var new_phone = phone.substr(0,3)+"****"+phone.substr(7,11);
		$('.address-number').html(new_phone);		
	}
})