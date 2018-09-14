$(function(){
	// 人脸需求
	var face_flag = true;
	$("#face_btn").click(function(){
		var $span = $(this).find('span');
		if(face_flag){
			$span.addClass('on');
			face_flag = false;
		}else{
			$span.removeClass('on');
			face_flag = true;
		}
	})
	
	// 全国流窜
	var fled_flag = true;
	$("#fled_btn").click(function(){
		var $span = $(this).find('span');
		if(fled_flag){
			$span.addClass('on');
			fled_flag = false;
		}else{
			$span.removeClass('on');
			fled_flag = true;
		}
	})
	
	// 获取名称
	var parm = window.location.search;
	var name = ['求身份','求并案','求抓获']
	if(parm) {
		parm = parm.substr(6);
	}
	$('.part1 .title').html(name[parm]);
	
	
	// 上传图片前端部分
	$('#input_file').change(function(){
		// 限制图片数量
		var len = $('#add_img img').length;
		if(len >= 10){
			$('.prompt').html('最多可上传10张图片');
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










