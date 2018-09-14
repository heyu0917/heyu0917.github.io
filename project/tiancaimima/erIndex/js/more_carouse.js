$(function(){
    var i = 0;
    var imgWidth = parseInt($("#show-area ul li").width())+parseInt($("#show-area ul li").css("marginRight"));

    for(var j=0;j<3;j++){
    	var clone = $("#show-area ul li").eq(j).clone();
    	$("#show-area ul").append(clone);
    }
   //复制第一张图片并且添加到最后达到无缝连接的效果
   
   var size = $("#show-area ul li").size();//得到所有li的个数
   var ul_width = imgWidth*(size+1);
  $("#show-area ul").css({"width":ul_width+"px"});
   
   
   /*第二步*/
   //左按钮
   $("#button-left").click(function(){
      Toleft();
      
   })
   
   
   //右按钮
   $("#button-right").click(function(){
      Toright();
      
   })
   
   /*第2.1步*/
   //左按钮实现的函数
   function Toleft(){
       
     i++;
     if(i==size-2){////一张时，是size
        //当当前图片为最后一张图片的时候（我们一开始复制并且添加到ul最后面的图片）并且再点击了一次左按钮，这时候我们就利用css的快速转换效果把ul移动第一张图片的位置并且第二张图片滑入达到无缝效果（css的变换效果很快我们肉眼是很难看见的）
        $("#show-area ul").css({left:0});
        i = 1;     
     }
     $("#show-area ul").stop().animate({left:-i*imgWidth},500);
   }
   
   
   /*第2.2步*/
   //右按钮实现的函数
   function Toright(){
       
       //同理，如果当前图片位置是第一张图片我再按一下右按钮那么我们也利用css的快速变换使它的位置来到最后一张图片的位置（size-1），并且让倒数第二张图片滑动进来
      i--;
      if(i==-1){
         $("#show-area ul").css({left:-(size - 3)*imgWidth});//一张时，是size-1
         i=size-4;//一张时，是size-2
          
      }   
      $("#show-area ul").animate({left:-i*imgWidth},500);  
       
   }
   
   
   
});