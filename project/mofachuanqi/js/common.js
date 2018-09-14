$(function(){	
	//一级导航
	$(".nav li").hover(function(){		
		var index = $(this).index();		
		$(this).addClass('active').siblings().removeClass('active');
		if(index !== 0 && index !== 4){
			if(4 > index >= 1 ){
				index = index - 1;
			}
			if(index > 4){
				index = index - 2;
			}
			//console.log(index);
			$('.nav-list li').eq(index).fadeIn(200);
		}		
		
	},function(){
		var index = $(this).index();
		$(this).removeClass('active');
		
		if(index !== 0 && index !== 4){
			if(4 > index >= 1){
				index = index - 1;
			}
			if(index > 4){
				index = index - 2;
			}
			//console.log(index);
			$('.nav-list li').eq(index).hide();
		}
				
	});
	
	$(".nav-list li").hover(function(){
		var index = $(this).index();		
		$('.nav-list li').eq(index).show();		
	},function(){
		var index = $(this).index();
		$('.nav-list li').eq(index).hide();
	});
	
	
	$(".li-item a").hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
	},function(){
		$(this).removeClass('active');
	})
				

})

