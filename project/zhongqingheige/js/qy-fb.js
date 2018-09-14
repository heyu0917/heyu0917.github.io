$(function(){
	fb_effect1();
	fb_effect2();
	
	var tap_len = $("#tap_list li").length;

	$("#tap_list li").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		
		var index = $(this).index();
//		var item_n;
//		if(index >= 5){
//			item_n = index - tap_len2;
//		}else{
//			item_n = index;
//		}
		
		$('.item-wrapper .item').eq(index).addClass('show').siblings().removeClass('show');
		
		fb_effect2();
	})
	
})

function fb_effect1(){
	var i = 0; //图片li索引
	var imgWidth = parseInt($("#show-area ul li").width());
	var before_index = $("#show-area ul li").length;
	
	if(before_index >= 5){
	    for(var j=0;j<5;j++){
	    	var clone = $("#show-area ul li").eq(j).clone();
	    	$("#show-area ul").append(clone);
	    }
   	
		var len = $("#show-area ul li").length;
		
	    var ul_width = imgWidth*(len+1);
	    $("#show-area ul").css({"width":ul_width+"px"});
	    
	    //右按钮
		$("#arrow_right").click(function(){
			if((before_index-5) > i){
				i++;
				
			    if(i==len-4){
					$("#show-area ul").css({left:0});
					i = 1;     
				}
				$("#show-area ul").stop().animate({left:-i*imgWidth},500);
			}
		})
	   
	    $("#arrow_left").click(function(){
			if(i>=1){
				i--;
			    if(i==-1){
			        $("#show-area ul").css({left:-(len - 3)*imgWidth});
			        i=len-6;
			    }   
				$("#show-area ul").stop().animate({left:-i*imgWidth},500);
			}
	    })
   	}
}

function fb_effect2(){
	var i = 0; 
	var imgWidth = parseInt($(".item.show ul li").width() + 30);
	var before_index = $(".item.show ul li").length;
	
	if(before_index >= 4){
	    for(var j=0;j<4;j++){
	    	var clone = $(".item.show ul li").eq(j).clone();
	    	$(".item.show ul").append(clone);
	    }
	   
		var len = $(".item.show ul li").length;
		
	    var ul_width = imgWidth*(len+1);
	    $(".item.show ul").css({"width":ul_width+"px"});
	    
	    //右按钮
		$(".item.show .arrow-right").click(function(){
			i++;
		    if(i==len-3){
				$(".item.show ul").css({left:0});
				i = 1;     
			}
			$(".item.show ul").stop().animate({left:-i*imgWidth},500);
		})
	   
	    //左按钮
	    $(".item.show .arrow-left").click(function(){
			i--;
		    if(i==-1){
		        $(".item.show ul").css({left:-(len - 3)*imgWidth});
		        i=len-5;
		    }   
			$(".item.show ul").stop().animate({left:-i*imgWidth},500);
	    })
	}
}

