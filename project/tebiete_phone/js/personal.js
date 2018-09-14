$(function(){
	//点击头像
	$('.touxiang-li').tap(function(){
//		$('.bg2').css({'opacity':'1','z-index':'113'});
//		$('.touxiang-popup').css('bottom','.16rem');
//		
//		//点击取消
//		$('.touxiang-cancel').tap(function(){
//			$('.bg2').css({'opacity':'0','z-index':'-1'});
//			$('.touxiang-popup').css('bottom','-3.4rem');
//		})

		//选取图片的来源，拍照和相册 
        var divid = "F_CKJLB";
		var actionbuttons=[{title:"拍照"},{title:"我的相册"}];  
		var actionstyle={cancel:"取消",buttons:actionbuttons};  
		plus.nativeUI.actionSheet(actionstyle, function(e){  
	        if(e.index==1){  
	            getImage(divid);  
	        }else if(e.index==2){  
	            galleryImg(divid);  
	        }  
		});
		
		//相册选取图片  
        function galleryImg(divid){
            plus.gallery.pick( function(p){  
                //alert(p);//file:///storage/emulated/0/DCIM/Camera/IMG_20160704_112620.jpg  
                plus.io.resolveLocalFileSystemURL(p, function(entry) {  
                    //alert(entry.toLocalURL());//file:///storage/emulated/0/DCIM/Camera/IMG_20160704_112620.jpg  
                    //alert(entry.name);//IMG_20160704_112620.jpg  
                    compressImage(entry.toLocalURL(),entry.name,divid);
                }, function(e) {  
                    plus.nativeUI.toast("读取拍照文件错误：" + e.message);
                });  
            }, function ( e ) {  
            }, {  
                filename: "_doc/camera/",  
                filter:"image"  
            } );
        }
		
        // 拍照  
        function getImage(divid){
            var cmr = plus.camera.getCamera();  
            cmr.captureImage(function(p) {  
                //alert(p);//_doc/camera/1467602809090.jpg  
                plus.io.resolveLocalFileSystemURL(p, function(entry) {  
                    //alert(entry.toLocalURL());//file:///storage/emulated/0/Android/data/io.dcloud...../doc/camera/1467602809090.jpg  
                    //alert(entry.name);//1467602809090.jpg  
                    compressImage(entry.toLocalURL(),entry.name,divid);

                }, function(e) {  
                    plus.nativeUI.toast("读取拍照文件错误：" + e.message);
                });  
            }, function(e) {  
            }, {  
                filename: "_doc/camera/"
            });
        }

        //压缩图片  
        function compressImage(url,filename,divid){
            var name="_doc/upload/"+divid+"-"+filename;//_doc/upload/F_ZDDZZ-1467602809090.jpg  
            plus.zip.compressImage({  
                    src:url,//src: (String 类型 )压缩转换原始图片的路径  
                    dst:name,//压缩转换目标图片的路径  
                    quality:20,//quality: (Number 类型 )压缩图片的质量.取值范围为1-100  
                    overwrite:true//overwrite: (Boolean 类型 )覆盖生成新文件  
                },  
                function(event) {
                    //uploadf(event.target,divid);  
                    var path = name;//压缩转换目标图片的路径  
                    //event.target获取压缩转换后的图片url路  
                    //filename图片名称  
                    saveimage(event.target,divid,filename,path);  
                },function(error) {  
                    plus.nativeUI.toast("压缩图片失败，请稍候再试");
            });  
        }  
        //保存信息到本地  
        /**  
         *   
         * @param {Object} url  图片的地址  
         * @param {Object} divid  字段的名称  
         * @param {Object} name   图片的名称  
         */  
        function saveimage(url,divid,name,path){  
            //alert(url);//file:///storage/emulated/0/Android/data/io.dcloud...../doc/upload/F_ZDDZZ-1467602809090.jpg  
            //alert(path);//_doc/upload/F_ZDDZZ-1467602809090.jpg
            var  state=0;  
            var wt = plus.nativeUI.showWaiting();  
          //  plus.storage.clear();   
            name=name.substring(0,name.indexOf("."));//图片名称：1467602809090  
            var id = document.getElementById("ckjl.id").value;  
            var itemname=id+"img-"+divid;//429img-F_ZDDZ  
            var itemvalue=plus.storage.getItem(itemname);  
            if(itemvalue==null){  
                itemvalue="{"+name+","+path+","+url+"}";//{IMG_20160704_112614,_doc/upload/F_ZDDZZ-IMG_20160704_112614.jpg,file:///storage/emulated/0/Android/data/io.dcloud...../doc/upload/F_ZDDZZ-1467602809090.jpg}  
            }else{    
                itemvalue=itemvalue+"{"+name+","+path+","+url+"}";  
            }  
            plus.storage.setItem(itemname, itemvalue);  
              
            //var src = 'src="'+url+'"';
            var src = url;
            $('#gallery_img').attr('src',src);
			
            wt.close();  
              
        }
	})
	
	//点击昵称
	$('.nickname-li').tap(function(){
		$('.personal-detail').css({'left':'-100%'});
		$('.nickname-popup').css({'left':'0'});
		$('.nickname-popup .clear-img').css('display','block');
		
		$('.nickname').val($('.nickname-text').html());
		
		setTimeout("$('.nickname').focus()",400);
		
		$('.nickname-popup .clear-img').tap(function(){
			$('.nickname').val('');
			$(this).css('display','none');
			$('.nickname').focus();
		})
		
		$('.nickname').bind('input propertychange',function(){
			if($('.nickname').val() !== ''){
				$('.nickname-popup .clear-img').css('display','block');
			}else{
				$('.nickname-popup .clear-img').css('display','none');
			}
		})
		
		$('#nickname_back').tap(function(){
			$('.personal-detail').css({'left':'0'});
			$('.nickname-popup').css({'left':'100%'});
		})
		
		$('#nickname_sure').tap(function(){
			if($('.nickname').val() == ''){
				$('.prompt').html('请输入4~20个字符作为昵称');
				$('.bg2').css({'opacity':'1','z-index':'114'});
				$('.sure-popup').css('top','50%');
				
				$('.i-know-btn').tap(function(){
					$('.prompt').html('');
					$('.bg2').css({'opacity':'0','z-index':'-1'});
					$('.sure-popup').css('top','-50%');
				})
			}else{
				$('.personal-detail').css({'left':'0'});
				$('.nickname-popup').css({'left':'100%'});
			
				$('.nickname-text').html($('.nickname').val());
			}
		})
	})
	
	//性别对应
	if($('.sex-text').html() == '女'){
		$('.female-right').css('display','block');
		$('.sex-list li').eq(1).append("<img src='img/right.png' class='fl-rt'>");
		$('.sex-list li').eq(0).find('img').remove();
	}else{
		$('.male-right').css('display','block');
		$('.sex-list li').eq(0).append("<img src='img/right.png' class='fl-rt'>");
		$('.sex-list li').eq(1).find('img').remove();
	}
	
	//点击性别
	$('.sex-li').tap(function(){
		$('.personal-detail').css({'left':'-100%'});
		$('.sex-popup').css({'left':'0'});
		
		$('.sex-list li').tap(function(){
			$(this).find('img').remove();
			$(this).append("<img src='img/right.png' class='fl-rt'>");
			$(this).siblings().find('img').remove();
		})
		
		$('#sex_back').tap(function(){
			$('.personal-detail').css({'left':'0'});
			$('.sex-popup').css({'left':'100%'});
		})
		
		$('#sex_sure').tap(function(){
			$('.personal-detail').css({'left':'0'});
			$('.sex-popup').css({'left':'100%'});
			
			var len = $('.sex-list li').length;
			for(var i=0;i<len;i++){
				var imgObj = $('.sex-list li').eq(i).find('img');
				if(imgObj.attr('src') == 'img/right.png'){
					var sex = imgObj.prev().html();
					$('.sex-text').html(sex);
				}
			}
		})
	})
	
	//点击地址
	$('.address-li').tap(function(){
		$('.personal-detail').css({'left':'-100%'});
		$('.select-province-popup').css({'left':'0'});
		
		//选择市
		$('.select-province-list li').tap(function(){
			$('.select-province-popup').css('display','none');
			$('.select-city-popup').css('display','block');
		})
		$('#select_city_back').tap(function(){
			$('.select-province-popup').css('display','block');
			$('.select-city-popup').css('display','none');
		})
		
		$('#select_province_back').tap(function(){
			$('.personal-detail').css({'left':'0'});
			$('.select-province-popup').css({'left':'100%'});
		})
	})
})





























