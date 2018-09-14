$(function(){
  //二级左侧导航栏
  $("#nav_list li").click(function(){
    $(this).addClass("light").siblings().removeClass("light");
    var index = $(this).index();
    $(".right-part-item").eq(index).css({"display":"block"});
    $(".right-part-item").not($(".right-part-item").eq(index)).css({"display":"none"});
  })  

  //三级导航栏
  $(".item-nav-list li").click(function(){
    $(this).addClass("light").siblings().removeClass("light");
    var index = $(this).index();
    $(".item-con-part").eq(index).css({"display":"block"});
    $(".item-con-part").not($(".item-con-part").eq(index)).css({"display":"none"});
  })
})






















