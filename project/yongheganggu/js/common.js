$(function(){
	
	//一级导航
	$(".nav-list li").hover(function(){
		$(this).find('.li-item').fadeIn(200);
	},function(){
		$(this).find('.li-item').hide();
	});
	
	//三级导航
	$("#th_nav_list li").click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		
		var idx = $(this).index();
		$('.main .th-box').eq(idx).css({"display":"block"});
		$('.main .th-box').not($('.main .th-box').eq(idx)).css({"display":"none"});
	})
				
	
	//banner图的索引按钮
	var b_len = $(".banner-list li").length;
	var li = "";
	for(var i=0;i<b_len;i++){
		li += '<li></li>';
	}
	var b_create = document.createElement('ul');
	b_create.className = "banner-btn-list";
	$(".banner-list").after(b_create);
	$(".banner-btn-list").html(li);
	$(".banner-btn-list li").eq(0).addClass('light');
	
	//part1中的banner图切换效果
	var b = 0;
	var timer,timeout;
	$(".banner-btn-list li").mouseover(function(){
		clearInterval(timer);
		
		$(this).addClass('light').siblings().removeClass('light');
		var index = $(this).index();
		b=index;
		$(".banner-list li").eq(index).fadeIn(1000).siblings().hide();
	})
	$(".banner-btn-list li").mouseout(function(){
		timer = setInterval(timeout,3000);
	})
	timeout = function(){
		b++;
		if(b>=b_len){
			b = 0;
		}
		$(".banner-list li").eq(b).fadeIn(1000).siblings().hide();
		$(".banner-btn-list li").eq(b).addClass('light').siblings().removeClass('light');
	}
	//放下面
	timer = setInterval(timeout,3000);
})

//加入收藏
function AddFavorite(sURL, sTitle) {
    sURL = encodeURI(sURL);
    try{
        window.external.addFavorite(sURL, sTitle);
    }catch(e) {
        try{
            window.sidebar.addPanel(sTitle, sURL, "");
        }catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
        }
    }
}
