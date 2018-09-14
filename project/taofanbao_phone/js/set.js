		$(function(){		
			var local_usename = localStorage.getItem("a");//获取a的值
			var local_password = localStorage.getItem("b");//获取b的值
			if(local_usename == null && local_password == null){
				$("#login_out").css({'background':'#e5e5e5','color':'#999'});
				
			}else{
				$("#login_out").css({'background':'#f60','color':'#fff'});
				
				$('#login_out').tap(function(){
					localStorage.removeItem('a');//清除用户名
					localStorage.removeItem('b');//清除密码
					
					$("#login_out").css({'background':'#e5e5e5','color':'#999'});
					
					location.href="my.html";					
				})
			}
			
			
			//判断是否登录
			$("#personal_page").click(function(){	
				//judge_login();
				location.href="personal.html";

			})
			$("#safe_page").click(function(){
				//judge_login();
				location.href="safe.html";
			})
			
		})
		
		// function judge_login(){
		// 	var local_usename = localStorage.getItem("a");//获取a的值
		// 	var local_password = localStorage.getItem("b");//获取b的值
		// 	if(local_usename == null && local_password == null){
		// 		$("#prompt_popup").css({"opacity":1});
		// 		$("#prompt_popup").html("请登录！");
		// 		setTimeout(function(){
		// 			$("#prompt_popup").css({"opacity":0});
		// 		},2000);
		// 	}else{
		// 		$("#prompt_popup").css({"opacity":0});
		// 		$("#prompt_popup").html("");
		// 	}
		// }