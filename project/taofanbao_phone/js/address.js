$(function(){
				
	//添加地址
	$("#add_address_btn,#add_address_btn2").click(function(){
		$(".address-popup").css({"left":"-100%"});
		$('.add-address-popup').css('left','0');
		//点击保存
		$(".button-big-save").click(function(){
			$(".address-popup").css({"left":"0"});
			$('.add-address-popup').css('left','100%');
			$(".save-popup").html('编辑成功');
			$(".save-popup").css('opacity','1');
			setTimeout(function(){
				$(".save-popup").css('opacity','0');
			},1500);
		})
	})
	$("#add_address_back").click(function(){
		$(".address-popup").css({"left":"0"});
		$('.add-address-popup').css('left','100%');
	})
	//编辑地址
	$(".edit-btn").click(function(){
		$(".address-popup").css({"left":"-100%"});
		$('.edit-address-popup').css('left','0');
		//点击保存
		$(".button-big-save").click(function(){
			$(".address-popup").css({"left":"0"});
			$('.edit-address-popup').css('left','100%');
			$(".save-popup").html('编辑成功');
			$(".save-popup").css('opacity','1');
			setTimeout(function(){
				$(".save-popup").css('opacity','0');
			},1500);
		})
	})	
		//点击删除
		$('#edit_delete').click(function(){
			$('.bg').css({'opacity':'1','z-index':'1112'});
			$('.delete-popup').css({'opacity':'1','z-index':'1113',"transform": "scale(1)","-webkit-transform": "scale(1)","-ms-transform": "scale(1)","-o-transform": "scale(1)","-moz-transform": "scale(1)"});
			
			//确定删除
			$('#sure_btn').click(function(){
				$('.delete-popup').css({'opacity':'0','z-index':'-1',"transform": "scale(0.5)","-webkit-transform": "scale(0.5)","-ms-transform": "scale(0.5)","-o-transform": "scale(0.5)","-moz-transform": "scale(0.5)"});
				$('.bg').css({'opacity':'0','z-index':'-1'});
			})
			//取消删除
			$('#cancel_btn').click(function(){
				$('.delete-popup').css({'opacity':'0','z-index':'-1',"transform": "scale(0.5)","-webkit-transform": "scale(0.5)","-ms-transform": "scale(0.5)","-o-transform": "scale(0.5)","-moz-transform": "scale(0.5)"});
				$('.bg').css({'opacity':'0','z-index':'-1'});
			})
		})
	
	$("#edit_address_back").click(function(){
		$(".address-popup").css({"left":"0"});
		$('.edit-address-popup').css('left','100%');
	})

	//点击默认地址 图片的更换
	$(".haveAddress-img").click(function(){
		var imgObj = $(this).find('img');
		var otherObj = $(this).parents('li').siblings().find('.defalut-img');
		if(imgObj.attr('src') == '../img/round.png'){
			imgObj.attr('src','../img/right.png');
			otherObj.attr('src','../img/round.png');
			
		}
	})	
	
	//点击删除
	$('.delete-btn').click(function(){
		var imgObj = $(this).parents('li').find('.defalut-img');
		if(imgObj.attr('src') == '../img/right.png'){
			$('.delete-popup').css({'opacity':'1','z-index':'1113',"transform": "scale(1)","-webkit-transform": "scale(1)","-ms-transform": "scale(1)","-o-transform": "scale(1)","-moz-transform": "scale(1)"});
			$('.bg').css({'opacity':'1','z-index':'1112'});
			
			//确定删除
			$('#sure_btn').click(function(){
				$('.delete-popup').css({'opacity':'0','z-index':'-1',"transform": "scale(0.5)","-webkit-transform": "scale(0.5)","-ms-transform": "scale(0.5)","-o-transform": "scale(0.5)","-moz-transform": "scale(0.5)"});
				$('.bg').css({'opacity':'0','z-index':'-1'});
			})
			//取消删除
			$('#cancel_btn').click(function(){
				$('.delete-popup').css({'opacity':'0','z-index':'-1',"transform": "scale(0.5)","-webkit-transform": "scale(0.5)","-ms-transform": "scale(0.5)","-o-transform": "scale(0.5)","-moz-transform": "scale(0.5)"});
				$('.bg').css({'opacity':'0','z-index':'-1'});
			})
		}
	})

})


