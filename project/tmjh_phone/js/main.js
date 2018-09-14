$(function(){

    //点击第二屏四个模块
	// var isShow = true;
	// $("#awuw_wrap").find("a").click(function(){
	// 	if(isShow){
	// 		$(this).find(".awuw-h").addClass("awuw-active");
	// 		$(this).find("strong").addClass("strong-active");
	// 		$(this).find("u").addClass("u-active");
	// 		$(this).find("p").addClass("p-active");
	// 		isShow = false;
	// 	}else{
	// 		$(this).find(".awuw-h").removeClass("awuw-active");
	// 		$(this).find("strong").removeClass("strong-active");
	// 		$(this).find("u").removeClass("u-active");
 //            $(this).find("p").removeClass("p-active");
	// 		isShow = true;
	// 	}
	// })

    //点击第二屏四个模块
    $("#awuw_wrap").find("a").click(function(){
        $(this).find(".awuw-h").addClass("awuw-active");
        $(this).find("strong").addClass("strong-active");
        $(this).find("u").addClass("u-active");
        $(this).find("p").addClass("p-active");

        var $this = $(this);

        setTimeout(function(){
            $this.find(".awuw-h").removeClass("awuw-active");
            $this.find("strong").removeClass("strong-active");
            $this.find("u").removeClass("u-active");
            $this.find("p").removeClass("p-active");
        },3000);
    });

    //右侧导航栏
    $("#menu_box").toggle(
        function(){
            $(this).css("right",".7rem");
            $("#menu_box i").css({"color":"#18aaf4"});
            $("#nav_list").css({"right":0});
        },
        function(){
            $(this).css("right",".5rem");
            $("#menu_box i").css({"color":"#fff"});          
            $("#nav_list").css({"right":"-1.5rem"});
        }
    )

    //第八屏服务流程
    if(winW >= 768){
        $(".section8-list span").addClass("section8-round");
    }else{
        $(".section8-list span").removeClass("section8-round");
    }

})













