$(function(){		

	//点击搜索后的页面中导航栏
	var rank_flag = true;
	$('.search-nav-list li').click(function(){
		$(this).addClass('select').siblings().removeClass('select');
		
		var idx = $(this).index();
		if(idx !== 0){
			$('.ranking').find('i').css('border-top-color','#666');
			$('.ranking').find('i').css({'border-top':'.14rem solid #666','border-bottom':'none'});
			$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
			rank_flag = true;
		}
		if(idx == 2){
			$(this).find('img').attr('src','../img/screen_.png');
			
			//筛选内容出现
			screen();
		}else{
			$('.search-nav-list li').eq(2).find('img').attr('src','../img/screen.png');
		}
	})

	//搜索栏 实时监测input中值的变化
	$('#input_val').bind('input propertychange', function() {  
		if($(this).val().length >= 1){
			$(".clear-box").css({"display":"block"});
		}else{
			$(".clear-box").css({"display":"none"});
		}
	});

	//清空input中值
	$(".clear-box").click(function(){
		$('#input_val').val('');
		$(this).css({"display":"none"});
		$('#input_val').focus();
	})

	//搜索
	$('#search_btn').click(function(){
		var search_text = $("#input_val").val().trim();
		if(search_text !== ""){
			
		}
	})
	
	//点击综合排序的下拉列表
	$('.ranking').click(function(){
		if(rank_flag){
			$('.ranking-wrap').css({'opacity':'1','z-index':'114'});
			$(this).find('i').css({'border-bottom':'.14rem solid#fccc18','border-top':'none'});
			
			$(".ranking-list li").click(function(){
				var condition = $(this).find('span').html();
				$("#search_after_condition").html(condition);
				$(this).addClass('select').siblings().removeClass('select');
				$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
				$('.ranking').find('i').css({'border-top':'.14rem solid#fccc18','border-bottom':'none'});
				rank_flag = true;
			})
			rank_flag = false;
		}else{
			$('.ranking-wrap').css({'opacity':'0','z-index':'-1'});
			$(this).find('i').css({'border-top':'.14rem solid#fccc18','border-bottom':'none'});
			rank_flag = true;
		}
	})

})

function screen(){
	$('.bg2').css({'opacity':'1','z-index':'112'});
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













