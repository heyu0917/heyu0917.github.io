$(function(){
	$('.order-nav-list li').tap(function(){
		$(this).addClass('select').siblings().removeClass('select');
		
		var index = $(this).index();
		if(index == 0){
			index0();
		}
		if(index == 1){
			index1();
		}
		if(index == 2){
			index2();
		}
		if(index == 3){
			index3();
		}
		if(index == 4){
			index4();
		}		
	})
	
})

function index0(){
	$('.order-nav-list li').eq(0).addClass('select').siblings().removeClass('select');
	$('#all_order_part').css('display','block');
	$('#wait_pay_part,#wait_send_part,#wait_receive_part,#wait_evaluate_part').css('display','none');
}

function index1(){
	$('.order-nav-list li').eq(1).addClass('select').siblings().removeClass('select');
	$('#wait_pay_part').css('display','block');
	$('#all_order_part,#wait_send_part,#wait_receive_part,#wait_evaluate_part').css('display','none');
}

function index2(){
	$('.order-nav-list li').eq(2).addClass('select').siblings().removeClass('select');
	$('#wait_send_part').css('display','block');
	$('#all_order_part,#wait_pay_part,#wait_receive_part,#wait_evaluate_part').css('display','none');
}

function index3(){
	$('.order-nav-list li').eq(3).addClass('select').siblings().removeClass('select');
	$('#wait_receive_part').css('display','block');
	$('#all_order_part,#wait_send_part,#wait_pay_part,#wait_evaluate_part').css('display','none');
}

function index4(){
	$('.order-nav-list li').eq(4).addClass('select').siblings().removeClass('select');
	$('#wait_evaluate_part').css('display','block');
	$('#all_order_part,#wait_send_part,#wait_receive_part,#wait_pay_part').css('display','none');
}