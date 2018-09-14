$(function(){
	//点击登录
	$('.login-btn').tap(function(){
		login();		
	})
	//同意用户协议前的小图标
	$("#agree_img").tap(function(){
		if($(this).attr('src') == 'img/round_light.png'){
			$(this).attr('src','img/round.png');
		}else{
			$(this).attr('src','img/round_light.png');
		}
	})
	//点击注册
	$('#free_register').tap(function(){
		$(".login").css('left','-100%');
		$('.register').css('left','0');
	})
	//点击注册返回
	$('#register_back').tap(function(){
		$(".login").css('left','0');
		$('.register').css('left','100%');
	})
	
	//登录时，手机号输入正确后，密码文本框获取焦点时，登录按钮变化
	//...
	$("#login_password").keyup(function(){
		var userName = $("#login_telephone").val().trim();
		var reg = /^1\d{10}$/;
		if(reg.test(userName) == true){
			var reNum=/^\d*$/;		
			if(reNum.test(this.value)){
				$(".login-btn").css({'background':'#f60','color':'#fff'});
			}
			if(this.value == ''){
				$(".login-btn").css({'background':'#e5e5e5','color':'#999'});
			}
		}
	});
	
	//注册时手机号输入第一位后，注册按钮变化
	$("#register_telephone").keyup(function(){
		var reNum=/^\d*$/;		
		if(reNum.test(this.value)){
			$(".register-btn").css({'background':'#f60','color':'#fff'});
		}
		if(this.value == ''){
			$(".register-btn").css({'background':'#e5e5e5','color':'#999'});
		}
	});
	
	//点击注册里的选择省
	$('#select_province').tap(function(){
		$('.register').css('left','-100%');
		$(".select-province-popup").css({"left":"0"});
	})
	$('#select_province_back').tap(function(){
		$('.register').css('left','0');
		$(".select-province-popup").css({"left":"100%"});
	})
	//选择市
	$('.select-province-list li').tap(function(){
		$('.select-province-popup').css('display','none');
		$('.select-city-popup').css('display','block');
	})
	$('#select_city_back').tap(function(){
		$('.select-province-popup').css('display','block');
		$('.select-city-popup').css('display','none');
	})
	
	//注册界面的提示
	$("#register_telephone").blur(function(){
		var name = $(this).val().trim();
		var reg = /^1\d{10}$/;

		if(name == ''){
			$(".prompt3").text("请输入手机号");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
		}else if(reg.test(name) == false){
			$(".prompt3").text("手机号格式错误");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
		}else{
			$(".prompt3").text("");
		}		
		setTimeout(function(){
			$('.prompt3').css({'opacity':'0','z-index':'-1'});
		},1500);
	})
	$("#register_nickname").blur(function(){
		var name = $(this).val().trim();
		var len = $(this).val().length;

		if(name == ''){
			$(".prompt3").text("请输入昵称");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
		}else if(len<4 || len > 20){
			$(".prompt3").text("昵称格式错误");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
		}else{
			$(".prompt3").text("");
		}		
		setTimeout(function(){
			$('.prompt3').css({'opacity':'0','z-index':'-1'});
		},1500);
	})
	$("#register_password").blur(function(){
		var name = $(this).val().trim();
		var reg = /^[\w]{6,12}$/;

		if(name == ''){
			$(".prompt3").text("请输入密码");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
		}else if(reg.test(name) == false){
			$(".prompt3").text("密码格式错误");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
		}else{
			$(".prompt3").text("");
		}		
		setTimeout(function(){
			$('.prompt3').css({'opacity':'0','z-index':'-1'});
		},1500);
	})
	
	//点击获取短信验证码
	var totalTime = 60;
	var flag5 = true;
	$('.get-code-btn').tap(function(){
		var flag4 = false;
		var name1 = $("#register_telephone").val().trim();
		
		if(name1 == ''){
			$(".prompt3").text("请输入手机号");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}else if(reg1.test(name1) == false){
			$(".prompt3").text("手机号格式错误");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}else{
			$(".prompt3").text("");
			flag4 = true;
		}
		
		if(flag4&&flag5){
			timer = setInterval(function(){
				totalTime--;
				if(totalTime >= 0){
					var second = totalTime % 60;
					if(second < 10){
						second = "0" + second;
					}

					if(totalTime > 0){
						$(".get-code-btn").html("").append('<div style="color: #808080;background:#ddd;border-radius: 5px;">重发验证码('+'<u>'+second+'</u>'+'&nbsp;s)</div>');						
						$(".get-code-btn").css('background','#ddd');
					}else if(totalTime == 0){
						$(".get-code-btn").html("").append('获取短信验证码');
						$(".get-code-btn").css('background','#f60');
					}
					flag5 = false;
				}else{
					totalTime = 60;
					clearInterval(timer);
					flag5 = true;
				}
			},1000)
		}
	})
	
	//点击注册
	$('.register-btn').tap(function(){
		var name1 = $("#register_telephone").val().trim();
		var reg1 = /^1\d{10}$/;
		var name2 = $("#register_nickname").val().trim();
		var len = $("#register_nickname").val().length;
		var name3 = $("#register_password").val().trim();
		var reg3 = /^[\w]{6,12}$/;	
		var flag4 = false;

		if(name1 == ''){
			$(".prompt3").text("请输入手机号");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}else if(reg1.test(name1) == false){
			$(".prompt3").text("手机号格式错误");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}else if(name2 == ''){
			$(".prompt3").text("请输入昵称");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}else if(len<4 || len > 20){
			$(".prompt3").text("昵称格式错误");
			$('.prompt3').css({'opacity':'1','z-index':'113'});
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}else if(name3 == ''){
			$(".prompt3").text("请输入密码");
			$('.prompt3').css('opacity','1');
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}else if(reg3.test(name3) == false){
			$(".prompt3").text("密码格式错误");
			$('.prompt3').css('opacity','1');
			setTimeout(function(){
				$('.prompt3').css({'opacity':'0','z-index':'-1'});
			},1500);
			flag4 = false;
		}
//		else if("code"){
//			//这里判断验证码是否正确
//			
//			flag4 = false;
//		}
		else{
			$(".prompt3").text("");
			flag4 = true;
			
			//注册成功
			$(".login").css('left','0');
			$('.register').css('left','100%');
		}	
			
	})
	
	
})

function login(){
	var userName = $("#login_telephone").val().trim();
	var password = $("#login_password").val().trim();
	var reg = /^1\d{10}$/;
	var flagN = false;

	if(userName == ""){
		$(".prompt1").text("请输入手机号");
		flagN = false;
	}else if(reg.test(userName) == false){
		$(".prompt1").text("手机号格式错误");
		flagN = false;
	}else if(password == ''){
		$(".prompt2").text("请输入密码");
		flagN = false;
	}else{
		$(".prompt2").text("");
		$(".prompt").text("");
		flagN = true;
		
		//登录成功后
		localStorage.setItem('a',userName);
		localStorage.setItem('b',password);
	}
	
	local_usename = localStorage.getItem("a");//获取a的值
	local_password = localStorage.getItem("b");//获取b的值
	console.log(local_usename);
	if(flagN && userName == local_usename && password == local_password){
		location.href="home.html";
	}
}
















