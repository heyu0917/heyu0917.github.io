$(function(){
	//案例详情--查看更多
	var m_flag = true;
	var el = $(".casesdetail-list1-box"),
		curHeight = el.height();
	$("#casesdetail_more").click(function(){
		if(m_flag){
			autoHeight = el.css('height', 'auto').height();
			el.height(curHeight).animate({height: autoHeight}, 500);
			$(this).find("span").html("收起");
			$(this).find("img").addClass('open');
			m_flag = false;			
		}else{
			autoHeight = el.css('height', 'auto').height();
			el.height(autoHeight).animate({height: curHeight}, 500);
			$(this).find("span").html("查看更多");
			$(this).find("img").removeClass('open');
			m_flag = true;	
		}
	})
	
	//案例综述--查看更多
	var m_flag2 = true;
	var el2 = $("#case_zhongshu"),
		curHeight2 = el2.height();
	$("#more_detail").click(function(){
		if(m_flag2){
			autoHeight = el2.css('height', 'auto').height();
			el2.height(curHeight2).animate({height: autoHeight}, 300);
			$(this).find("span").html("收起");
			$(this).find("img").addClass('open');
			m_flag2 = false;			
		}else{
			autoHeight = el2.css('height', 'auto').height();
			el2.height(autoHeight).animate({height: curHeight2}, 300);
			$(this).find("span").html("查看更多");
			$(this).find("img").removeClass('open');
			m_flag2 = true;	
		}
	})

})
