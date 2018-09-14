$(function(){
	
	// 页面入口
	var parm = window.location.search;
	if(parm){
		parm = parm.substr(6);
		$("#nav_list li").eq(parm).addClass('on').siblings().removeClass('on');
		$("#index_main .container").eq(parm).css({'display':'block'}).siblings().css({'display':'none'})
	}
	
	
	// 二级导航
	$("#nav_list li").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index()
		
		$("#index_main .container").eq(index).css({'display':'block'}).siblings().css({'display':'none'})
	})
	
	// 我的发布 我的操作  我的收藏
	$('.main-nav li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		// var txt = $(this).text();
		// $('#collect_location').html(txt);
		
		var index = $(this).index();
		var $container = $(this).parents('.container');
		
		$container.find(".wrapper .item").eq(index).css({'display':'block'}).siblings().css({'display':'none'})
	})
	
	// 我的资料
	var data_flag = true;
	var arr1 = [];
	$('#data_btn').click(function(){
		var len = $('.data-con .item1 ul li').length;
		if(data_flag){
			$(this).html('保存');
			$('.data-con .item1').css({'display':'none'})
			$('.data-con .item2').css({'display':'block'})
			data_flag = false
			
			arr1 = [];
		}else{
			$(this).html('修改');
			$('.data-con .item2').css({'display':'none'})
			$('.data-con .item1').css({'display':'block'})
			data_flag = true
			
			for(var i=1;i<len;i++){
				var place = $('.data-con .item2 ul li').eq(i).find('input').val();
				arr1.push(place)
			}
			
			for(var i=1;i<len;i++){
				var j = i-1;
				if(arr1[j] !== ''){
					$('.data-con .item1 ul li').eq(i).find('span').html(arr1[j]);
				}
			}
		}
	})
	
	// 充值
	$('#recharge').attr('data-flag','one');
	$('#recharge').click(function(){
		var atr = $(this).attr('data-flag');
		var val = $('.recharge-wrapper input').val();
		
		if(atr == 'one'){
			$('.recharge-wrapper').slideDown(200);
			$(this).html("确认");
			
			$(this).attr('data-flag','two');
		}else{
			if ((/(^[1-9]\d*$)/.test(val))) {
				// 正整数
				$('.recharge-wrapper').slideDown(200);
				$(this).html("确认");
				
				$('.bg').fadeIn(100);
				$('.pay-popup').fadeIn(300);
				$(this).attr('data-flag','two');
			}else{
				// 负数或空
				$('.recharge-wrapper').slideUp(200);
				$(this).html("充值");
				$(this).attr('data-flag','one');
			}
		}
	})	
	$('.bg,#close').click(function(){
		$('.bg').fadeOut(100);
		$('.pay-popup').fadeOut(300);
	})
	
	
	// 上传图片前端部分
	$('#input_file').change(function(){
		
		//获取文件  
		var file = $(".banner").find("input")[0].files[0]; 
		
		//创建读取文件的对象  
	    var reader = new FileReader();  
	    
	    //创建文件读取相关的变量  
	    var imgFile;
	    
	    //为文件读取成功设置事件  
	    reader.onload=function(e) {  
	        imgFile = e.target.result;  
	        console.log(imgFile)
	        $(".banner").css({'background-image':'url('+imgFile+')'});
	        //$("#imgContent").attr('src', imgFile);  
//	        var img = document.createElement('img');
//	        $img.attr('src',imgFile);			        
//	        $('#add_img').append($img);
	    };  
	    
	    //正式读取文件  
	    reader.readAsDataURL(file);
	})
	
	
	// 充值成功
	// 这里用签到按钮代替一下
	$('.sign').click(function(){
		$('.bg').fadeIn(200);
		$('.success-popup').fadeIn(300);
	})
	
	$('#success_back').click(function(){
		$('.bg').fadeOut(200);
		$('.success-popup').fadeOut(200);
	})
	
})











