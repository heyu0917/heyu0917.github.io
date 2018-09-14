$(function(){
	//进入搜索界面		
	$('#keyword_input2').focus();
	
	//点击历史搜索下面的列
	$('.search-before-list li').tap(function(){
		$('.search-before-ponup').css({"left":"-100%"});
		$('.search-after-ponup,.search-nav-list').css('left','0');

		$("#keyword_input3").val($(this).html());
		
		$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
		$('.search-nav-list li i').css({'border-top':'.14rem solid #f60','border-bottom':'none'});
		
		search_after();
	})
	
	//点击搜索
	$('#search_btn').tap(function(){
		var value = $('#keyword_input2').val();
		if(value !== ''){
			$('.search-before-ponup').css({"left":"-100%"});
			$('.search-after-ponup,.search-nav-list').css('left','0');
			
			$("#keyword_input3").val(value);
			
			$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
			$('.search-nav-list li i').css({'border-top':'.14rem solid #f60','border-bottom':'none'});
		}
		
		search_after();
	});
		
	//search_after_back
	$('#search_after_back').tap(function(){
		$('.search-before-ponup').css({"left":"0"});
		$('.search-after-ponup,.search-nav-list').css('left','100%');
	})
	
	//从分类中的列表中进入
	var URL = decodeURI(window.location.href);
	var index = URL.lastIndexOf("\/"); 
	var text_  = URL.substring(index + 1 , URL.length);
	var ss = window.location.search.substr(1, 4);
	var text_2 = text_.substr(0);
	
	if(ss == 'flag'){
		$('.search-before-ponup').css({"left":"-100%"});
		$('.search-after-ponup,.search-nav-list').css('left','0');
		
		$("#keyword_input3").val(text_2);
	}
	

})

function search_after(){
	//点击搜索后的页面中导航栏
	var rank_flag = true;
	$('.search-nav-list li').tap(function(){
		$(this).addClass('select').siblings().removeClass('select');
		
		var idx = $(this).index();
		if(idx !== 0){
			$('.ranking').find('i').css('border-top-color','#666');
			$('.ranking').find('i').css({'border-top':'.14rem solid #666','border-bottom':'none'});
			$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
			rank_flag = true;
		}
		if(idx == 2){
			$(this).find('img').attr('src','img/screen_.png');
			
			//筛选内容出现
			screen();
		}else{
			$('.search-nav-list li').eq(2).find('img').attr('src','img/screen.png');
		}
	})
	
	//点击综合排序的下拉列表
	$('.ranking').tap(function(){
		if(rank_flag){
			$('.ranking-wrap').css({'opacity':'1','z-index':'114'});
			$(this).find('i').css({'border-bottom':'.14rem solid #f60','border-top':'none'});
			
			$(".ranking-list li").tap(function(){
				$(this).addClass('select').siblings().removeClass('select');
				$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
				$('.ranking').find('i').css({'border-top':'.14rem solid #f60','border-bottom':'none'});
				rank_flag = true;
			})
			rank_flag = false;
		}else{
			$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
			$(this).find('i').css({'border-top':'.14rem solid #f60','border-bottom':'none'});
			rank_flag = true;
		}
	})
}

function screen(){
	$('.bg2').css({'opacity':'1','z-index':'112'});
	$('.screen-wrap,.screen-bottom-btn').css('right','0');
	
	//点击全部分类
	$('.all-type').tap(function(){
		$('.screen-wrap').css('display','none');
		$('.allType-wrap').css('right','0');
		
		$('.allType-con-li').eq(0).find('.allType-middle-list').css('display','block');
		$('.allType-con-li').eq(0).find('.allType-arrowT_t').attr('src','img/arrowT_t.png');
		
		$('.allType-middle-list li').tap(function(){
			$('.screen-wrap').css('display','block');
			$('.allType-wrap').css('right','-88%');
			
			var par = $(this).parents('.allType-con-li').find('.allType-above-title').html();
			$('.all-type-text').html(par+'/'+$(this).html());
		})
		
		$('#allType_back').tap(function(){
			$('.screen-wrap').css('display','block');
			$('.allType-wrap').css('right','-88%');
		})
	})
	//点击全部分类里的列
	$('.allType-con-above').tap(function(){
		var imgObj = $(this).find('.allType-arrowT_t');
		if(imgObj.attr('src') == 'img/arrowD_t.png'){
			$(this).next('.allType-middle-list').css('display','block');
			$(this).parent().find('.allType-arrowT_t').attr('src','img/arrowT_t.png');
		}else{
			$(this).next('.allType-middle-list').css('display','none');
			$(this).parent().find('.allType-arrowT_t').attr('src','img/arrowD_t.png');
		}
		
	})
	
	//点击全部
	$('.other-type-title').tap(function(){
		var imgObj = $(this).find('.arrowD_t');
		if(imgObj.attr('src') == 'img/arrowD_t.png'){
			imgObj.attr('src','img/arrowT_t.png');
			$(this).next('ul').css('height','auto');
		}else{
			imgObj.attr('src','img/arrowD_t.png');
			$(this).next('ul').css('height','.76rem');
		}
	})
	
	//点击不同的类
	$('.type-list li').tap(function(){
		var tapStatus = $(this).attr('tapStatus');
		if(!tapStatus){
			$(this).attr('tapStatus',true);
			$(this).find('span').css({'color':'#f60','background':'none','border':'1px solid #f60','padding-left':'.32rem'})
			$(this).append("<img src='img/right.png'>");
		}else{
			$(this).find('span').css({'color':'#222','background':'#e9e9e9','border':'1px solid #e5e5e5','padding-left':'0'})
			$(this).find('img').remove();
			$(this).removeAttr('tapStatus');
		}
	})
	
	//点击重置
	$('.screen-reset').tap(function(){
		$('.type-list li').find('span').css({'color':'#222','background':'#e9e9e9','border':'1px solid #e5e5e5','padding-left':'0'})
		$('.type-list li').find('img').remove();
		$('.type-list li').removeAttr('tapStatus');
	})
	
	//点击确定
	$('.screen-sure').tap(function(){
		$('.bg2').css({'opacity':'0','z-index':'-1'});
		$('.screen-wrap,.screen-bottom-btn').css('right','-88%');
	})
}













