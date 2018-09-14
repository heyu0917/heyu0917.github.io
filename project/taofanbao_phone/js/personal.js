$(function(){
	//点击头像
	$('.touxiang-li').click(function(){
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

            var src = url;
            $('#gallery_img').attr('src',src);
				
			 //上传图片
//        	var task = plus.uploader.createUpload("http://puji.tumujinhua.com/update_test",
//	        var task = plus.uploader.createUpload(domain_name + "uploader",
//	            {method: "POST"},
//	            function (t, status) {
//	                // 上传完成
//	                if (status == 200) {
//	//                  alert("Upload success: " + t.url);
////	                    alert("图像上传成功！");
//	                    $(".prompt3").text("图像上传成功");
//						$('.prompt3').css({'opacity':'1','z-index':'113'});
//	                } else {
//	                	$(".prompt3").text("图像上传失败");
//						$('.prompt3').css({'opacity':'1','z-index':'113'});
//	//                  alert("Upload failed: " + status);
////	                    alert("图像上传失败！");
//	                }
//					setTimeout(function(){
//						$('.prompt3').css({'opacity':'0','z-index':'-1'});
//					},1500);
//	            }
//	        );
//	    
////      	task.addFile(src, {key: "text-img"});
//	        task.addFile(src, {key: openid});//重要
//	
//	        task.start();
		
            wt.close();  
              
        }
	})
	
})
























