$(function(){		

	//点击搜索后的页面中导航栏
	var rank_flag = true;
	var price_flag = true;
	$('#mall_nav_list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		
		var idx = $(this).index();
		if(idx == 2){
			if(price_flag){
				$(this).find("i").eq(0).addClass('active').siblings().removeClass('active');
				price_flag = false;
			}else{
				$(this).find("i").eq(1).addClass('active').siblings().removeClass('active');
				price_flag = true;
			}			
		}else{
			$('#mall_nav_list li').eq(2).find("i").removeClass('active');
			price_flag = true;
		}
		
		if(idx == 3){
			$(this).find("img").attr("src",'../img/screen.png');
			
			//筛选内容出现
			screen();
		}else{
			$(this).find("img").attr("src",'../img/sx.png');
		}
	})
	
	//滑动到对应位置，导航固定
	var fontSize = document.documentElement.clientWidth / 7.5;
	window.onscroll = function() {
	    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
	    if(scrollTop >= 4.08 * fontSize){
			$(".con-nav").addClass('fixed');
		}else{
			$(".con-nav").removeClass('fixed');
		}
	}

	
})

function screen(){
	$('.bg2').css({'opacity':'1','z-index':'116'});
	$('.screen-wrap,.screen-bottom-btn').css('right','0');
	
	//点击全部分类
	$('.all-type').click(function(){
		$('.screen-wrap').css('display','none');
		$('.allType-wrap').css('right','0');
		
		$('.allType-con-li').eq(0).find('.allType-middle-list').css('display','block');
		$('.allType-con-li').eq(0).find('.allType-arrowT_t').attr('src','../img/arrowT_t.png');
		
		$('.allType-middle-list li').click(function(){
			$('.screen-wrap').css('display','block');
			$('.allType-wrap').css('right','-86%');
			
			var par = $(this).parents('.allType-con-li').find('.allType-above-title').html();
			$('.all-type-text').html(par+'/'+$(this).html());
		})
		
		$('#allType_back').click(function(){
			$('.screen-wrap').css('display','block');
			$('.allType-wrap').css('right','-86%');
		})
	})
	//点击全部分类里的列
	$('.allType-con-above').click(function(){
		var imgObj = $(this).find('.allType-arrowT_t');
		if(imgObj.attr('src') == '../img/arrowD_t.png'){
			$(this).next('.allType-middle-list').css('display','block');
			$(this).parent().find('.allType-arrowT_t').attr('src','../img/arrowT_t.png');
		}else{
			$(this).next('.allType-middle-list').css('display','none');
			$(this).parent().find('.allType-arrowT_t').attr('src','../img/arrowD_t.png');
		}
		
	})
	
	//点击全部
	$('.other-type-title').click(function(){
		var imgObj = $(this).find('.arrowD_t');
		if(imgObj.attr('src') == '../img/arrowD_t.png'){
			imgObj.attr('src','../img/arrowT_t.png');
			$(this).next('ul').css('height','auto');
		}else{
			imgObj.attr('src','../img/arrowD_t.png');
			$(this).next('ul').css('height','.76rem');
		}
	})
	
	//点击不同的类
	$('.type-list li').click(function(){
		var tapStatus = $(this).attr('tapStatus');
		if(!tapStatus){
			$(this).attr('tapStatus',true);
			$(this).find('span').css({'color':'#fccc18','background':'none','border':'1px solid #fccc18','padding-left':'.32rem'})
			$(this).append("<img src='../img/right2.png'>");
		}else{
			$(this).find('span').css({'color':'#222','background':'#e9e9e9','border':'1px solid #e5e5e5','padding-left':'0'})
			$(this).find('img').remove();
			$(this).removeAttr('tapStatus');
		}
	})
	
	//点击重置
	$('.screen-reset').click(function(){
		$('.type-list li').find('span').css({'color':'#222','background':'#e9e9e9','border':'1px solid #e5e5e5','padding-left':'0'})
		$('.type-list li').find('img').remove();
		$('.type-list li').removeAttr('tapStatus');
	})
	
	//点击确定
	$('.screen-sure').click(function(){
		$('.bg2').css({'opacity':'0','z-index':'-1'});
		$('.screen-wrap,.screen-bottom-btn').css('right','-86%');
	})
}













