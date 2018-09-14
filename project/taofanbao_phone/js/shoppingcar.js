window.onload = function(){

	//用户交互
	user_tap();		

	//页面跳转提示
	$('#settle_right').click(function(){
		//var selectedTotal = document.getElementById('selectedTotal'); //已选商品数目
		if(selectedTotal.innerHTML == 0){
			$('#delete_popup_sellect').html("您还没有选择商品哦！");
	    	$('#delete_popup_sellect').css("opacity","1");
	        setTimeout(function(){
	        	$('#delete_popup_sellect').css("opacity","0");
	        },2000);			        
	    }else{
	    	$('#delete_popup_sellect').css("opacity","0");
	    	location.href="sure_order.html?flag=shoppingCar";
	    }
	})

	//跳转到详情页面?id=
	$(".shop-con-link").click(function(){
		var goods_id = $(this).parents("li").attr("id").substr(3);
		//console.log(goods_id);
		location.href="detail.html?id="+goods_id;
	})
						
	//点击编辑
	var edit_flag = true;
	$("#edit").click(function(){
		if(edit_flag){
			$(this).html("<span>完成</span>");
			$("#settle_middle").css({"display":"none"});
			$("#settle_right").css({"display":"none"});
			$("#settle_right_btn").css({"display":"block"});
			edit_flag = false;
		}else{
			$(this).html("<span>编辑</span>");
			$("#settle_middle").css({"display":"block"});
			$("#settle_right").css({"display":"block"});
			$("#settle_right_btn").css({"display":"none"});
			edit_flag = true;
		}
	})			

}


function user_tap(){
	var list = document.getElementById('shop_list');//购物车列表
    var selectInputs = document.getElementsByClassName('check'); // 所有勾选框
    var checkAllInputs = document.getElementsByClassName('check-all'); // 全选框
    var checkImgs = document.getElementsByClassName('check-img'); // 所有勾选框图片
    var checkAllImgs = document.getElementsByClassName('check-all-img'); // 全选框图片
    var li = list.getElementsByTagName('li') //每一个li
    var selectedTotal = document.getElementById('selectedTotal'); //已选商品数目
    var priceTotal1 = document.getElementById('priceTotal1'); //总计价格
    //var deleteAll = document.getElementById('deleteAll'); // 删除全部按钮
	
	//console.log(li.getElementsByTagName('input')[3]);
	//更新总数和总价格
	function getTotal(){
		var seleted = 0;
		var prices = 0;
		var num = 0;
		for (var i = 0; i < li.length; i++) {
			if (li[i].getElementsByTagName('input')[0].checked) {
				seleted += parseInt(li[i].getElementsByTagName('input')[2].value);
				num = i+1;
				
				if(li[i].getElementsByTagName('input')[3].value == "NaN"){//判断值是否为空
			    	li[i].getElementsByTagName('input')[3].value = li[i].getElementsByTagName('input')[1].value;
			    }
				
				prices += parseFloat(li[i].getElementsByTagName('input')[3].value);	

			}
		}	

		selectedTotal.innerHTML = seleted;
		selectedTotal.className = 'selectedTotal'+num+'';
		priceTotal1.innerHTML = prices;
				
	}
	
    // 计算单行价格  
    function getSubtotal(i) {
    	var price = i.parents("li").find(".shop-con-right input").eq(0).val();//单价	
    	var countInput = i.parent().find("input").eq(0);//数量
    	var subtotal = i.parent().find("input").eq(1);//单行总价
    	var i = i.parent().find("i").eq(0);//-号		   
        subtotal.val((parseInt(countInput.val()) * parseFloat(price)).toFixed(2));//计算单个商品的总价：单价*数量
        
        //如果数目只有一个，把-号更换颜色
        if (countInput.val() == 1) {
            i.css({"color":"#e6e6e6"});
        }else{
            i.css({"color":"#000"});
        }
        
    }

	// 点击选择框
	var cart_id2 = "";
    for(var i = 0; i < selectInputs.length; i++ ){
        var m = 0;
        selectInputs[i].onclick = function () {
        	if(this.className.indexOf('check-one') >= 0){  //单选
        		if(this.checked){//获取选中的个数
        			this.nextElementSibling.src = '../img/right.png';
        			
        			m++;				        		
        		}else{
        			m--;

        		}
        		if(m == selectInputs.length-1){//如果单选全都选中了，则把全选选中
	        			checkAllInputs[0].checked = true;
	        			checkAllImgs[0].src = '../img/right.png';
	        			m = 2;
	        	}
        		
          		//单选
        		var i = $(this).parents("li").find(".add");
        		getSubtotal(i);
            	getTotal();
        	}
        				        	
            if (this.className.indexOf('check-all') >= 0) { //如果是全选，则把所有的选择框选中
                for (var j = 0; j < selectInputs.length; j++) {
                	if(this.checked){
                    	selectInputs[j].checked = this.checked;
                    	checkImgs[j].src = '../img/right.png';                   	                    	
                	}else{
                		selectInputs[j].checked = false;
                		checkImgs[j].src = '../img/round.png';                		
                	}
                }
                
                //存储
                for (var j = 0; j < selectInputs.length-1; j++) {
                	
                	//全选 总价
                	var i = $("#shop_list").find("li").eq(j).find(".add");
	        		getSubtotal(i);
	            	getTotal();
                }
                
        		
            }
            if (!this.checked) { //只要有一个未勾选，则取消全选框的选中状态
            	this.nextElementSibling.src = '../img/round.png';
                for (var i = 0; i < checkAllInputs.length; i++) {
                    checkAllInputs[i].checked = false;
                    checkAllImgs[i].src = '../img/round.png';
                }
            }
            getTotal();
        }
    }			    			    
    //加减
	var n,m;
	$('.add-em').click(function(){
		var _this = $(this).next();
		
		n = $(this).prev().val();
		
		//给加的input增加一个class
		$(this).prev().addClass("light");

		$(".shop-num.light").val(n*1+1);
		if($(".shop-num.light").val() > 1){
			$(".shop-num.light").parent().find(".reduce").css({"color":"#000"})
		}
		$(".shop-num.light").removeClass("light");
		n = n*1+1;
		
		//当数量达到库存值时，不再加
		n++;
		//$(this).prev().val(n);
	
		getSubtotal(_this);					
		getTotal();
	})
	$('.reduce-em').click(function(){
		var _this = $(this).prev();
		n = $(this).next().val();
		
		$(this).next().addClass("light");

		if(n<=2){
			n = 2;
		}

		$(".shop-num.light").val(n*1-1);
		if($(".shop-num.light").val() < 2){
			$(".shop-num.light").parent().find(".reduce").css({"color":"#e6e6e6"})
		}
		$(".shop-num.light").removeClass("light");
		
		getSubtotal(_this);
		getTotal();

	})
	
	// 点击删除
	$("#deleteAll").click(function(){
		if (selectedTotal.innerHTML != 0) {
	        //弹出确认框
	        $("#bg").css({"opacity":1,"z-index":1121});
	        $("#delete_popup").css({"opacity":1,"z-index":1131,"transform":"scale(1)","-webkit-transform":"scale(1)","-ms-transform":"scale(1)"});

	        //在弹框中显示商品个数
	        var num = selectedTotal.className.substr(13);
	        var top_text = '<p class="delete-popup-top">确认要删除这'+num+'种商品吗？</p>';
	        $(".delete-popup-btn").before(top_text);
	        //取消
            $("#cancel_btn").click(function(){
            	$("#bg").css({"opacity":0,"z-index":"-1"});
	        	$("#delete_popup").css({"opacity":0,"z-index":"-1","transform":"scale(0)","-webkit-transform":"scale(0)","-ms-transform":"scale(0)"});
           		
           		setTimeout(function(){
           			$(".delete-popup-top").remove();
           		},200)
            })
            //确认
            $("#sure_btn").click(function(){     
            	$("#bg").css({"opacity":0,"z-index":"-1"});
	        	$("#delete_popup").css({"opacity":0,"z-index":"-1","transform":"scale(0)","-webkit-transform":"scale(0)","-ms-transform":"scale(0)"});
				setTimeout(function(){
           			$(".delete-popup-top").remove();
           		},200)			            
            })
        } else {
        	console.log('c');
        	$("#delete_popup_sellect").html("您还没有选择商品哦！");
            $("#delete_popup_sellect").css({"opacity":1});
            setTimeout(function(){
            	$("#delete_popup_sellect").css({"opacity":0});
            },2000)
        }
        getTotal(); //更新总数
	})	
	
	// 点击移入收藏
	$("#move_collect").click(function(){
		if (selectedTotal.innerHTML != 0) {
	        //弹出确认框
	        $("#bg").css({"opacity":1,"z-index":1121});
	        $("#delete_popup").css({"opacity":1,"z-index":1131,"transform":"scale(1)","-webkit-transform":"scale(1)","-ms-transform":"scale(1)"});

	        //在弹框中显示商品个数
	        var num = selectedTotal.className.substr(13);
	        var top_text = '<p class="collect-popup-top">当前选中的'+num+'种商品收藏成功后，将从购物车删除，请您确认</p>';
	        $(".delete-popup-btn").before(top_text);

	        //取消
            $("#cancel_btn").click(function(){
            	$("#bg").css({"opacity":0,"z-index":"-1"});
	        	$("#delete_popup").css({"opacity":0,"z-index":"-1","transform":"scale(0)","-webkit-transform":"scale(0)","-ms-transform":"scale(0)"});
            	setTimeout(function(){
           			$(".collect-popup-top").remove();
           		},200)
            })
            //确认
            $("#sure_btn").click(function(){     
            	$("#bg").css({"opacity":0,"z-index":"-1"});
	        	$("#delete_popup").css({"opacity":0,"z-index":"-1","transform":"scale(0)","-webkit-transform":"scale(0)","-ms-transform":"scale(0)"});
				setTimeout(function(){
           			$(".collect-popup-top").remove();
           		},200)
				
	            var id = "";
	            for(var i = 0; i < li.length; i++){
	            	if (li[i].getElementsByTagName('input')[0].checked) {
						// 删除相应节点						
						id += "_"+$(li[i]).attr("class").substr(3);
                    }
	            }
	           	var cart_id = id.substr(1);
	            $.ajax({
	            	type: "post",
	            	url: domain_name+"cart_collect",
	            	dataType: "json",
	            	data: {
	            		cart_id: cart_id
	            	},
	            	success: function(re){
	            		if(re.status == 1){
	            			$(".prompt").css({'opacity':'1','z-index':'113'});
	            			$(".prompt").html("收藏成功");
	            			
	            		}else{
	            			$(".prompt").css({'opacity':'1','z-index':'113'});
	            			$(".prompt").html("收藏失败");
	            		}
	            		
            			setTimeout(function(){
            				window.location.reload();
            			},1000)
	            	}
	            	
	            })
	            
            })
        } else {
        	$("#delete_popup_sellect").html("您还没有选择商品哦！");
            $("#delete_popup_sellect").css({"opacity":1});
            setTimeout(function(){
            	$("#delete_popup_sellect").css({"opacity":0});
            },2000)
        }
        getTotal(); //更新总数
	})


}


