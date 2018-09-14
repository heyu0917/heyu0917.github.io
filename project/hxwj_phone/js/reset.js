$(function(){
	//账号验证时手机号输入第一位后，注册按钮变化
	$("#check_phone_input").keyup(function(){
		var reNum=/^\d*$/;		
		if(reNum.test(this.value)){
			$(".next-step-btn").css({'background':'#73c640','color':'#fff'});
		}
		if(this.value == ''){
			$(".next-step-btn").css({'background':'#e5e5e5','color':'#999'});
		}
	});
	
	//点击获取短信验证码
	var totalTime = 60;
	var flag2 = true;
	$(".get-code-btn").tap(function(){
		var phone = $("#check_phone_input").val().trim();
		var reg = /^1\d{10}$/;
		var flag1 = false;
		if(phone == ''){
			$('.prompt1').html('请输入手机号');
			$('.prompt1').css({'opacity':'1','z-index':'113'});
			flag1 = false;
		}else if(reg.test(phone) == false){
			$(".prompt1").text("手机号格式错误");
			$('.prompt1').css({'opacity':'1','z-index':'113'});
			flag1 = false;
		}else{
			$('.prompt1').html('');
			flag1 = true;
		}
		
		if(flag1&&flag2){
			timer = setInterval(function(){
				totalTime--;
				if(totalTime >= 0){
					if(totalTime < 10){
						totalTime = "0" + totalTime;
					}
					
					if(totalTime > 0){
						$('.get-code-btn').html('').append('<div style="color: #808080;background:#ddd;border-radius: 5px;">重发验证码('+'<u>'+totalTime+'</u>'+'&nbsp;s)</div>');	
						$(".get-code-btn").css('background','#ddd');
						flag2 = false;
					}else if(totalTime == 0){
						$(".get-code-btn").html("").append('获取短信验证码');
						$(".get-code-btn").css('background','#73c640');
						
						flag2 = true;
					}
				}
			},1000);
		}
	})
	
	//点击下一步
	$('.next-step-btn').tap(function(){
		$('.checked').css('left','-100%');
		$('.reset').css('left','0');
		$('.prompt1,.prompt2').html('');
		
		//重置密码时手机号输入第一位后，注册按钮变化
		$("#new_key_input").keyup(function(){
			var reNum=/^\d*$/;		
			if(reNum.test(this.value)){
				$(".sure_btn").css({'background':'#73c640','color':'#fff'});
			}
			if(this.value == ''){
				$(".sure_btn").css({'background':'#e5e5e5','color':'#999'});
			}
		});
		
		//点击完成
		$('.sure_btn').tap(function(){
			var name = $('#new_key_input').val().trim();
			var sure_name = $('#sure_key_input').val().trim();
			var reg = /^[\w]{6,12}$/;
			var flag3 = false;
			
			if(name == ''){
				$('.prompt1').html('请输入密码');
				$('.prompt1').css({'opacity':'1','z-index':'113'});
				flag3 = false;
			}else if(reg.test(name) == false){
				$('.prompt1').html('密码格式错误');
				$('.prompt1').css({'opacity':'1','z-index':'113'});
				flag3 = false;
			}else if(name !== sure_name){
				$('.prompt2').html('两次密码输入不一样');
				$('.prompt1').html('');
				$('.prompt2').css({'opacity':'1','z-index':'113'});
				flag3 = false;
			}else{
				$('.prompt1').html('');
				$('.prompt2').html('');
				flag3 = true;
			}
			
			if(flag3){
				location.href='login.html';
			}
		})
	})
	
	$('#reset_back').tap(function(){
		$('.checked').css('left','0');
		$('.reset').css('left','100%');
		$('.prompt1,.prompt2').html('');
	})

})








































