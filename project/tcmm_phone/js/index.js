$(function(){
    //当页面内容不足一屏时，将bottom-link固定于底部
    var middle_h = $(".content-middle").height();
    var window_h = $(window).height();
    //console.log($(".content-middle").height());
    if(middle_h/window_h<0.7&&middle_h){
      $(".bottom-link").addClass("fixed");
    }else{
      $(".bottom-link").removeClass("fixed");
    }

	//特色课程
	//course();

  //头部导航 
  $(".menu-img").click(function(){
    $(".menu-list").toggle();
  })

  //页面导航
  $(".con-top-list li").click(function(){
    $(this).addClass("light").siblings().removeClass("light");
    var index = $(this).index();
    $(".con-middle-part").eq(index).css({"display":"block"});
    $(".con-middle-part").not($(".con-middle-part").eq(index)).css({"display":"none"});
  })

  //特色课程--右侧导航
  var fontSize = document.documentElement.clientWidth / 6.4;
  var btn_right = parseInt(fontSize* 5.2);
  var btn_right2 = parseInt(fontSize*0.16);
  var ctl_flag = true;
  $("#control_btn").click(function(){
    if(ctl_flag){
      $(this).css({"right":btn_right});
      $("#control_nav").css({"right":0});   
      ctl_flag = false;  
    }else{
      $(this).css({"right":btn_right2});
      $("#control_nav").css({"right":'-'+btn_right+'px'});
      ctl_flag = true;  
    }
  })

  //核心优势--品牌背景
  var len = $(".ys-item2-list2 li").length;
  for(var i=0;i<len;i++){
    var j_h = $(".ys-item2-list2 li").eq(i).css("height");
    $(".ys-item2-list1 li").eq(i).css({"height":j_h});
  }
  //核心优势--scroll
  advantage_scroll();
  $("#advan_li1").click(function(){
    advantage_scroll();    
    $(".ys-list1 li").eq(0).addClass("light").siblings().removeClass("light");
    $(".ys-list1 li").eq(0).find("img").attr("src","img/bjlogo_10.png");
    $(".ys-list1 li").eq(1).find("img").attr("src","img/logo_12.png");
    $(".ys-list1 li").eq(3).find("img").attr("src","img/logo_16.png");
    $(".ys-list1 li").eq(2).find("img").attr("src","img/logo_14.png");
  })
  $("#advan_li").click(function(){
    advantage_scroll_two();  
    $(".ys-list3 li").eq(0).addClass("light").siblings().removeClass("light");
    $(".ys-list3 li").eq(0).find("img").attr("src","img/logo1_10.png");
    $(".ys-list3 li").eq(1).find("img").attr("src","img/hxys_12.png");
    $(".ys-list3 li").eq(2).find("img").attr("src","img/hxys_14.png");
    $(".ys-list3 li").eq(3).find("img").attr("src","img/hxys_16.png");
    $(".ys-list3 li").eq(4).find("img").attr("src","img/hxys_18.png"); 
  })
  
})

function advantage_scroll(){
  var ul_h = $(".ys-list1").height();
  var top_h = $(".content-top").height();
  var con_top = top_h+ul_h;
  var con1_h = $(".ys-con1-item1").height()-top_h;
  var con2_h = $(".ys-con1-item2").height()+con1_h;
  var con3_h = $(".ys-con1-item3").height()+con2_h;
  $(".ys-list1 li").click(function(){
    var index = $(this).index();
    if(index == 0){
      $(".content").scrollTop(0);
      $(".ys-list1 li").eq(0).addClass("light").siblings().removeClass("light");
      $(".ys-list1 li").eq(0).find("img").attr("src","img/bjlogo_10.png");
      $(".ys-list1 li").eq(1).find("img").attr("src","img/logo_12.png");
      $(".ys-list1 li").eq(3).find("img").attr("src","img/logo_16.png");
      $(".ys-list1 li").eq(2).find("img").attr("src","img/logo_14.png");
    }
    if(index == 1){
      $(".content").scrollTop(con1_h+ul_h*2/3+top_h);
    }
    if(index == 2){
      $(".content").scrollTop(con2_h+ul_h*2/3+top_h);
    }
    if(index == 3){
      $(".content").scrollTop(con3_h+ul_h*2/3+top_h);
    }
    return false;
  })

  $(".content").scroll(function(){    
    var scroll_h = $(".content").scrollTop();
    if(scroll_h>=top_h){
      $(".ys-list1").addClass("fixed");
      
      //第二个小导航图标
      if(0<=scroll_h){
        $(".ys-list1 li").eq(0).addClass("light").siblings().removeClass("light");
        $(".ys-list1 li").eq(0).find("img").attr("src","img/bjlogo_10.png");
        $(".ys-list1 li").eq(1).find("img").attr("src","img/logo_12.png");
        $(".ys-list1 li").eq(3).find("img").attr("src","img/logo_16.png");
        $(".ys-list1 li").eq(2).find("img").attr("src","img/logo_14.png");
      }
      if(con1_h<=scroll_h){
        $(".ys-list1 li").eq(1).addClass("light").siblings().removeClass("light");
        $(".ys-list1 li").eq(1).find("img").attr("src","img/bjlogo_12.png");
        $(".ys-list1 li").eq(0).find("img").attr("src","img/logo_10.png");
        $(".ys-list1 li").eq(2).find("img").attr("src","img/logo_14.png");
        $(".ys-list1 li").eq(3).find("img").attr("src","img/logo_16.png");
      }
      if(con2_h<=scroll_h){
        $(".ys-list1 li").eq(2).addClass("light").siblings().removeClass("light");
        $(".ys-list1 li").eq(2).find("img").attr("src","img/bjlogo_14.png");
        $(".ys-list1 li").eq(1).find("img").attr("src","img/logo_12.png");
        $(".ys-list1 li").eq(3).find("img").attr("src","img/logo_16.png");
        $(".ys-list1 li").eq(0).find("img").attr("src","img/logo_10.png");
        
      }
      if(con3_h<=scroll_h){
        $(".ys-list1 li").eq(3).addClass("light").siblings().removeClass("light");
        $(".ys-list1 li").eq(3).find("img").attr("src","img/bjlogo_16.png");
        $(".ys-list1 li").eq(2).find("img").attr("src","img/logo_14.png");
        $(".ys-list1 li").eq(0).find("img").attr("src","img/logo_10.png");
        $(".ys-list1 li").eq(1).find("img").attr("src","img/logo_12.png");
      }

    }else{
      $(".ys-list1").removeClass("fixed");
    }

  })
}
function advantage_scroll_two(){
  var ul_h = $(".ys-list3").height();
  var top_h = $(".content-top").height();
  var con_top = top_h+ul_h;
  var con1_h = $(".ys-con2-item1").height()-top_h;
  var con2_h = $(".ys-con2-item2").height()+con1_h;
  var con3_h = $(".ys-con2-item3").height()+con2_h;
  var con4_h = $(".ys-con2-item4").height()+con3_h;
  $(".ys-list3 li").click(function(){
    var index = $(this).index();
    if(index == 0){
      $(".content").scrollTop(0);
      $(".ys-list3 li").eq(0).addClass("light").siblings().removeClass("light");
      $(".ys-list3 li").eq(0).find("img").attr("src","img/logo1_10.png");
      $(".ys-list3 li").eq(1).find("img").attr("src","img/hxys_12.png");
      $(".ys-list3 li").eq(2).find("img").attr("src","img/hxys_14.png");
      $(".ys-list3 li").eq(3).find("img").attr("src","img/hxys_16.png");
      $(".ys-list3 li").eq(4).find("img").attr("src","img/hxys_18.png");
    }
    if(index == 1){
      $(".content").scrollTop(con1_h+ul_h/2+top_h);
    }
    if(index == 2){
      $(".content").scrollTop(con2_h+ul_h/2+top_h);
    }
    if(index == 3){
      $(".content").scrollTop(con3_h+ul_h/2+top_h);
    }
    if(index == 4){
      $(".content").scrollTop(con4_h+ul_h/2+top_h);
    }
    return false;
  })

  $(".content").scroll(function(){    
    var scroll_h = $(".content").scrollTop();
    if(scroll_h>=top_h){
      $(".ys-list3").addClass("fixed");
      
      //第二个小导航图标
      if(0<=scroll_h){
        $(".ys-list3 li").eq(0).addClass("light").siblings().removeClass("light");
        $(".ys-list3 li").eq(0).find("img").attr("src","img/logo1_10.png");
        $(".ys-list3 li").eq(1).find("img").attr("src","img/hxys_12.png");
        $(".ys-list3 li").eq(2).find("img").attr("src","img/hxys_14.png");
        $(".ys-list3 li").eq(3).find("img").attr("src","img/hxys_16.png");
        $(".ys-list3 li").eq(4).find("img").attr("src","img/hxys_18.png");
      }
      if(con1_h<=scroll_h){
        $(".ys-list3 li").eq(1).addClass("light").siblings().removeClass("light");
        $(".ys-list3 li").eq(0).find("img").attr("src","img/hxys_10.png");
        $(".ys-list3 li").eq(1).find("img").attr("src","img/logo1_12.png");
        $(".ys-list3 li").eq(2).find("img").attr("src","img/hxys_14.png");
        $(".ys-list3 li").eq(3).find("img").attr("src","img/hxys_16.png");
        $(".ys-list3 li").eq(4).find("img").attr("src","img/hxys_18.png");
      }
      if(con2_h<=scroll_h){
        $(".ys-list3 li").eq(2).addClass("light").siblings().removeClass("light");
        $(".ys-list3 li").eq(0).find("img").attr("src","img/hxys_10.png");
        $(".ys-list3 li").eq(1).find("img").attr("src","img/hxys_12.png");
        $(".ys-list3 li").eq(2).find("img").attr("src","img/logo1_14.png");
        $(".ys-list3 li").eq(3).find("img").attr("src","img/hxys_16.png");
        $(".ys-list3 li").eq(4).find("img").attr("src","img/hxys_18.png");
        
      }
      if(con3_h<=scroll_h){
        $(".ys-list3 li").eq(3).addClass("light").siblings().removeClass("light");
        $(".ys-list3 li").eq(0).find("img").attr("src","img/hxys_10.png");
        $(".ys-list3 li").eq(1).find("img").attr("src","img/hxys_12.png");
        $(".ys-list3 li").eq(2).find("img").attr("src","img/hxys_14.png");
        $(".ys-list3 li").eq(3).find("img").attr("src","img/logo1_16.png");
        $(".ys-list3 li").eq(4).find("img").attr("src","img/hxys_18.png");
      }
      if(con4_h<=scroll_h){
        $(".ys-list3 li").eq(4).addClass("light").siblings().removeClass("light");
        $(".ys-list3 li").eq(0).find("img").attr("src","img/hxys_10.png");
        $(".ys-list3 li").eq(1).find("img").attr("src","img/hxys_12.png");
        $(".ys-list3 li").eq(2).find("img").attr("src","img/hxys_14.png");
        $(".ys-list3 li").eq(3).find("img").attr("src","img/hxys_16.png");
        $(".ys-list3 li").eq(4).find("img").attr("src","img/logo1_18.png");
      }

    }else{
      $(".ys-list3").removeClass("fixed");
    }

  })
}

//function course(){	
//	  var i = 0;
//  var imgWidth = parseInt($("#show-area ul li").width())+parseInt($("#show-area ul li").css("margin-right"));
//
//  for(var j=0;j<4;j++){
//  	var clone = $("#show-area ul li").eq(j).clone();
//  	$("#show-area ul").append(clone);
//  }
// //复制第一张图片并且添加到最后达到无缝连接的效果
// 
// var size = $("#show-area ul li").size();//得到所有li的个数
// //ul宽度
//  var ul_width = imgWidth*(size+1);
//  $("#show-area ul").css({"width":ul_width+"px"});
//  //ul外的div宽度
// 	var div_width = (imgWidth*4)-parseInt($("#show-area ul li").css("margin-right"));;
//  $(".course-list-wrap").css({"width":div_width+"px"});
// /*第二步*/
// //左按钮
// $("#button-left").click(function(){
//    Toleft();
//    
// })
// 
// 
// //右按钮
// $("#button-right").click(function(){
//    Toright();
// })
// 
// /*第2.1步*/
// //左按钮实现的函数
// function Toleft(){
//     
//   i++;
//   if(i==size-3){//一张时，是size
//      //当当前图片为最后一张图片的时候（我们一开始复制并且添加到ul最后面的图片）并且再点击了一次左按钮，这时候我们就利用css的快速转换效果把ul移动第一张图片的位置并且第二张图片滑入达到无缝效果（css的变换效果很快我们肉眼是很难看见的）
//      $("#show-area ul").css({left:0});
//      i = 1;     
//   }
//   //$("#show-area ul").css({left:-i*imgWidth});
//   $("#show-area ul").stop().animate({left:-i*imgWidth},500);
// }
// 
// 
// /*第2.2步*/
// //右按钮实现的函数
// function Toright(){
//     
//     //同理，如果当前图片位置是第一张图片我再按一下右按钮那么我们也利用css的快速变换使它的位置来到最后一张图片的位置（size-1），并且让倒数第二张图片滑动进来
//    i--;
//    if(i==-1){
//       $("#show-area ul").css({left:-(size - 4)*imgWidth});//一张时，是size-1
//       i=size-5;//一张时，是size-2
//        
//    }   
//    //$("#show-area ul").css({left:-i*imgWidth});  
//     $("#show-area ul").animate({left:-i*imgWidth},500);  
// }
//}











