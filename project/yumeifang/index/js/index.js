$(function(){
	//单张图片轮播
	single_carouse1();
	single_carouse2();

	//底部图片轮播，多张图片
	carouse_click1();
	carouse_click2();

	//点击视频
	$(".con-video-list li").click(function(){
		var src = $(this).attr("data-src");
		$("#video_embed").attr("src",src);
	})
})
function single_carouse1(){
	var i = 0;
    var imgWidth = parseInt($("#show-area3 ul li").width())+parseInt($("#show-area3 ul li").css("marginRight"));
    var clone = $("#show-area3 ul li").first().clone();
    $("#show-area3 ul").append(clone);
    var size = $("#show-area3 ul li").size();//得到所有li的个数
    //ul宽度
    var ul_width = imgWidth*(size+1);
    $("#show-area3 ul").css({"width":ul_width+"px"});
    //左按钮
   $("#button-left3").click(function(){
       i++;
       if(i==size){//一张时，是size
          $("#show-area3 ul").css({left:0});
          i = 1;     
       }
       $("#show-area3 ul").stop().animate({left:-i*imgWidth},500);
      show_area_p(i);
   })   
   //右按钮
   $("#button-right3").click(function(){
      i--;
      if(i==-1){
         $("#show-area3 ul").css({left:-(size - 1)*imgWidth});//一张时，是size-1
         i=size-2;//一张时，是size-2
          
      }   
      $("#show-area3 ul").animate({left:-i*imgWidth},500);  
      show_area_p(i);     
   })

   function show_area_p(i){
   	var clone = $("#show-area3-p p").first().clone();
    $("#show-area3-p").append(clone);
    $("#show-area3-p p").eq(i).fadeIn("slow").siblings().hide();
   }
    
}
function single_carouse2(){
	var i = 0;
    var imgWidth = parseInt($("#show-area4 ul li").width())+parseInt($("#show-area4 ul li").css("marginRight"));
    var clone = $("#show-area4 ul li").first().clone();
    $("#show-area4 ul").append(clone);
    var size = $("#show-area4 ul li").size();//得到所有li的个数
    //ul宽度
    var ul_width = imgWidth*(size+1);
    $("#show-area4 ul").css({"width":ul_width+"px"});
    //左按钮
   $("#button-left4").click(function(){
       i++;
       if(i==size){//一张时，是size
          $("#show-area4 ul").css({left:0});
          i = 1;     
       }
       $("#show-area4 ul").stop().animate({left:-i*imgWidth},500);
      show_area_p(i);
   })   
   //右按钮
   $("#button-right4").click(function(){
      i--;
      if(i==-1){
         $("#show-area4 ul").css({left:-(size - 1)*imgWidth});//一张时，是size-1
         i=size-2;//一张时，是size-2
          
      }   
      $("#show-area4 ul").animate({left:-i*imgWidth},500);  
      show_area_p(i);     
   })

   function show_area_p(i){
   	var clone = $("#show-area4-p p").first().clone();
    $("#show-area4-p").append(clone);
    $("#show-area4-p p").eq(i).fadeIn("slow").siblings().hide();
   }
    
}
function carouse_click2(){
	var i = 0;
    var imgWidth = parseInt($("#show-area2 ul li").width())+parseInt($("#show-area2 ul li").css("marginRight"));
    for(var j=0;j<3;j++){
    	var clone = $("#show-area2 ul li").eq(j).clone();
    	$("#show-area2 ul").append(clone);
    } 
   var size = $("#show-area2 ul li").size();//得到所有li的个数
   //ul宽度
    var ul_width = imgWidth*(size+1);
    $("#show-area2 ul").css({"width":ul_width+"px"});
   //左按钮
   $("#button-left2").click(function(){
       i++;
       if(i==size-2){//一张时，是size
          $("#show-area2 ul").css({left:0});
          i = 1;     
       }
       $("#show-area2 ul").stop().animate({left:-i*imgWidth},500);
      
   })   
   //右按钮
   $("#button-right2").click(function(){
      i--;
      if(i==-1){
         $("#show-area2 ul").css({left:-(size - 3)*imgWidth});//一张时，是size-1
         i=size-4;//一张时，是size-2
          
      }   
      $("#show-area2 ul").animate({left:-i*imgWidth},500);       
   })
}
function carouse_click1(){
	var i = 0;
    var imgWidth = parseInt($("#show-area ul li").width())+parseInt($("#show-area ul li").css("marginRight"));
    for(var j=0;j<3;j++){
    	var clone = $("#show-area ul li").eq(j).clone();
    	$("#show-area ul").append(clone);
    } 
   var size = $("#show-area ul li").size();//得到所有li的个数
     //ul宽度
    var ul_width = imgWidth*(size+1);
    $("#show-area ul").css({"width":ul_width+"px"});
   
   //左按钮
   $("#button-left").click(function(){
       i++;
       if(i==size-2){//一张时，是size
          $("#show-area ul").css({left:0});
          i = 1;     
       }
       $("#show-area ul").stop().animate({left:-i*imgWidth},500);
      
   })   
   //右按钮
   $("#button-right").click(function(){
      i--;
      if(i==-1){
         $("#show-area ul").css({left:-(size - 3)*imgWidth});//一张时，是size-1
         i=size-4;//一张时，是size-2
          
      }   
      $("#show-area ul").animate({left:-i*imgWidth},500);       
   })
}

















