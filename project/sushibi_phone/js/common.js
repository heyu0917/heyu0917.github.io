$(function(){
	var m_flag = true;
	$("#menu").click(function(){
		if(m_flag){
			$("#nav_list").css({"right":0});	
			m_flag = false;
		}else{
			$("#nav_list").css({"right":"-110%"});
			m_flag = true;
		}
	})
	$("#nav_list li h2").click(function(){
		$(this).next('.er-menu').css({"display":"block"});
		$(this).parent().siblings().find('.er-menu').css({"display":"none"});
	})

	$("#nav_list li").find('.light').parents('.er-menu').css({"display":"block"});
	
	//懒加载{ threshold : 200 }
	$("img.lazy").lazyload();
})
