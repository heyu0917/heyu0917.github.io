$(function(){
	
	// 上传图片前端部分
	$('#input_file').change(function(){
		// 限制图片数量
		var len = $('#add_img img').length;
		if(len >= 1){
			$('.prompt').html('最多可上传1张图片');
			$('.prompt').show();
			setTimeout(function(){
				$('.prompt').hide();
			},2000);
			return
		}		
		
		//获取文件  
		var file = $("#img_wrapper").find("input")[0].files[0]; 
		
		//创建读取文件的对象  
	    var reader = new FileReader();  
	    
	    //创建文件读取相关的变量  
	    var imgFile;
	    
	    //为文件读取成功设置事件  
	    reader.onload=function(e) {  
	        imgFile = e.target.result;   
	        //$("#imgContent").attr('src', imgFile);  
	        var span = document.createElement('span');
	        var img = document.createElement('img');
	        var i = document.createElement('i');
	        var $img = $(img), // DOM对象转成jQuery对象
		        $span = $(span),
		        $I = $(i);
	        $img.attr('src',imgFile);	
	        $span.append($img);
	        $span.append($I);
	        $('#add_img').append($span);
	        $('#add_img i').html('X');
	        $('#add_img i').attr('title','删除');
	    };  
	    
	    //正式读取文件  
	    reader.readAsDataURL(file);
	    
	    // 删除图片
	    setTimeout(function(){
	    	delete_img();
	    },1000)
	})
	
	
	//点击获取短信验证码 -->发给上属民警
	var totalTime1 = 60;
	var flag_time1 = true;
	$('.get-code-btn2').click(function(){
		var reg1 = /^1\d{10}$/;
		var phone = $("#r_phone").val().trim();
		
		if(phone == ''){
			$(".prompt").html("请输入手机号");
			$('.prompt').show();
			flag4 = false;
		}else if(reg1.test(phone) == false){
			$(".prompt").html("手机号格式错误");
			$('.prompt').show();
			flag4 = false;
		}else{
			if(flag_time){
				$(".prompt").html("验证码发送成功");
				$('.prompt').show();
				
				timer = setInterval(function(){
					totalTime1--;
					if(totalTime1 >= 0){
						var second = totalTime1 % 60;
						if(second < 10){
							second = "0" + second;
						}
	
						if(totalTime1 > 0){
							$(".get-code-btn2").html("").append('<div style="color: #808080;background:#ddd;">重发('+'<b>'+second+'</b>'+'&nbsp;s)</div>');						
						}else if(totalTime == 0){
							$(".get-code-btn2").html("").append('获取验证码');
						}
					}else{
						totalTime1 = 60;
						flag_time1 = true;
						clearInterval(timer);
					}
				},1000);
				
			}
		}	
		setTimeout(function(){
			$('.prompt').hide();
		},1500);
		
	})

	
	//点击获取短信验证码
	var totalTime = 60;
	var flag_time = true;
	$('.get-code-btn').click(function(){
		var reg1 = /^1\d{10}$/;
		var phone = $("#register_telephone").val().trim();
		
		if(phone == ''){
			$(".prompt").html("请输入手机号");
			$('.prompt').show();
			flag4 = false;
		}else if(reg1.test(phone) == false){
			$(".prompt").html("手机号格式错误");
			$('.prompt').show();
			flag4 = false;
		}else{
			if(flag_time){
				$(".prompt").html("验证码发送成功");
				$('.prompt').show();
				
				timer = setInterval(function(){
					totalTime--;
					if(totalTime >= 0){
						var second = totalTime % 60;
						if(second < 10){
							second = "0" + second;
						}
	
						if(totalTime > 0){
							$(".get-code-btn").html("").append('<div style="color: #808080;background:#ddd;">重发('+'<b>'+second+'</b>'+'&nbsp;s)</div>');						
						}else if(totalTime == 0){
							$(".get-code-btn").html("").append('获取验证码');
						}
					}else{
						totalTime = 60;
						flag_time = true;
						clearInterval(timer);
					}
				},1000);
				
			}
		}	
		setTimeout(function(){
			$('.prompt').hide();
		},1500);
	})
	
	
	//点击注册
	$("#register_btn").click(function(){
		var phone = $("#register_telephone").val().trim();
		var reg1 = /^1\d{10}$/;
		var reg2 = /^[A-Za-z0-9]{6,12}$/;	
		var nickname = $("#nickname").val().trim();
		var password_ = $("#password").val().trim();
		var sure_password = $("#sure_password").val().trim();
		var r_phone = $("#r_phone").val().trim();
		var code = $("#code_input").val().trim();
		var r_code = $("#r_code").val().trim();//推荐码  
		var area_ = $("#input_address").val().trim();
		var img_len = $('#add_img span').length;
	    
		if(phone == ""){
			$(".prompt").html("请输入手机号");
			$('.prompt').show();
		}else if(reg1.test(phone) == false){
			$(".prompt").html("手机号格式错误");
			$('.prompt').show();
		}else if(nickname == ""){
			$(".prompt").html("请输入您的昵称");
			$('.prompt').show();
		}else if(password_ == ""){
			$(".prompt").html("请输入密码");
			$('.prompt').show();
		}else if(reg2.test(password_) == false){
			$(".prompt").html("密码格式错误");
			$('.prompt').show();
		}else if(sure_password == ""){
			$(".prompt").html("请再次输入您的密码");
			$('.prompt').show();
		}else if(reg2.test(sure_password) == false){
			$(".prompt").html("两次密码不一致");
			$('.prompt').show();
		}else if(code == ""){
			$(".prompt").html("请输入验证码");
			$('.prompt').show();
		}else if(r_phone == ""){
			$(".prompt").html("请输入上属民警手机号");
			$('.prompt').show();
		}else if(reg1.test(r_phone) == false){
			$(".prompt").html("上属民警手机号格式错误");
			$('.prompt').show();
		}else if(r_code == ""){
			$(".prompt").html("请输入推荐码");
			$('.prompt').show();
		}else if($("#agreement_img").attr("src").indexOf('right') < 0){
			$(".prompt").html("同意用户协议后可注册");
			$('.prompt').show();
		}else if(area_ == ""){
			$(".prompt").html("请输入所属单位");
			$('.prompt').show();
		}else if(r_phone !== '' && reg1.test(r_phone) == false){
				$(".prompt").html("推荐人手机号格式错误");
				$('.prompt').show();		
		}
		else if(img_len !== 1){
			$(".prompt").html("请上传本人身份证正面照");
			$('.prompt').show();
		}
		else{
			setTimeout(function(){
				location.href="login.html";
			},1500);
		}
		
		setTimeout(function(){
			$('.prompt').hide();
		},1500);
	})


})

function delete_img(){
	$('#add_img span i').click(function(){
		$(this).parent().remove();
		$('.prompt').html('删除成功');
		$('.prompt').show();
		
		setTimeout(function(){
	    	$('.prompt').hide();
	    },1500)
	})
}







