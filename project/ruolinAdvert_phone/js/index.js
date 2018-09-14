$(function(){
	$('#fullpage').fullpage({
		scrollingSpeed: 500,
		//controlArrows: false,
		//		resize:true,
		//fixedElements: ".contact-wrapper",
		verticalCentered: false,
		//slidesNavigation: true,
		autoScrolling: false,//出现浏览器自带的滚动条	
		//continuousVertical: true,
		scrollBar: true,//滚动条
		//anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		//menu:"#menu",//屏导航
		afterRender: function() {
			setTimeout(function(){							
				var s1_h = $(".section1-wrap").height();
				$(".section1").height(s1_h);
				
				var s2_h = $(".section2-wrap").height();
				$(".section2").height(s2_h);
				
				var s3_h = $(".section3-wrap").height();
				$(".section3").height(s3_h);
				
				var s4_h = $(".section4-wrap").height();
				$(".section4").height(s4_h);
				
				var s5_h = $(".section5-wrap").height();
				$(".section5").height(s5_h);				
				
				var s6_h = $(".section6-wrap").height();
				$(".section6").height(s6_h);
				
				var s7_h = $(".section7-wrap").height();
				$(".section7").height(s7_h);
				
				
			},400)
		},
		afterLoad: function(anchorLink, index) {
			//从1开始
			if(index == 1) {
				$('.sec1-step1-right').stop().animate({
					right: '10%'
				}, 900, 'easeOutCirc');	
				
				$('.sec1-step2-left').stop().animate({
					left: '10%'
				}, 1500, 'easeOutCirc');	
				
				$('.sec1-step2-right').stop().animate({
					opacity: '1'
				}, 2300, 'easeOutCirc');	
								
				$('.sec1-3-left1').stop().animate({
					marginLeft: '0'
				}, 600, 'easeOutCirc');	
				$('.sec1-3-left2').stop().animate({
					marginLeft: '0'
				}, 900, 'easeOutCirc');	
				$('.sec1-3-left3').stop().animate({
					marginLeft: '0'
				}, 1200, 'easeOutCirc');	
				$('.sec1-3-left4').stop().animate({
					marginLeft: '0'
				}, 1500, 'easeOutCirc');	
			};
			if(index == 2){
				$('.sec2-step2').css({"transform":'scale(1)',"-webkit-transform":'scale(1)',"-moz-transform":'scale(1)',"-o-transform":'scale(1)',"-ms-transform":'scale(1)'});
				$('.sec2-step3').stop().animate({
					right: 0
				}, 1200, 'easeOutCirc');
				$('.sec2-left2 .years-list').stop().animate({
					top:'37%'
				}, 1200, 'easeOutCirc');
				$('.sec2-left').stop().animate({
					top:'129%'
				}, 1200, 'easeOutCirc');			
				$('.sec2-right2').css({"transform":'scale(1)',"-webkit-transform":'scale(1)',"-moz-transform":'scale(1)',"-o-transform":'scale(1)',"-ms-transform":'scale(1)'});
				$('.sec2-r-item1').stop().animate({
					marginLeft:'0'
				}, 1600, 'easeOutCirc');
			};
			if(index == 3){
				$('.sec4-part1 .add-img').stop().animate({
					left: '17%'
				}, 1000, 'easeOutCirc');
				$('.sec4-part1-left').stop().animate({
					marginLeft: '2.5%',
					opacity:'1'
				}, 1200, 'easeOutCirc');
				$('.sec4-part2 .years-list').stop().animate({
					left:'-40%'
				}, 1200, 'easeOutCirc');
				$('.friend-img').css({'transform':"rotate(1440deg)",'-webkit-transform':"rotate(1440deg)",'-moz-transform':"rotate(1440deg)",'-o-transform':"rotate(1440deg)",'-ms-transform':"rotate(1440deg)"});
				$('.sec4-part2-right').stop().animate({
					marginLeft:'0'
				}, 1200, 'easeOutCirc');
				$('.sec4-part1-right').stop().animate({
					top: '74%'
				}, 1200, 'easeOutCirc');
			};
			if(index == 4){
				$('.sec3-part1 .add-img').stop().animate({
					left: '2.5%'
				}, 1000, 'easeOutCirc');
				$('.ruolin-img').stop().animate({
					top: 0
				}, 1200, 'easeOutCirc');
				$('.sec3-part1-right').stop().animate({
					marginLeft:'45%'
				}, 1200, 'easeOutCirc');
				$('.sec3-part2-right').stop().animate({
					marginLeft:'45%'
				}, 2000, 'easeOutCirc');
			};
			if(index == 5){
				$('.sec5-right .sec5-img2').stop().animate({
					right:'34%'
				}, 900, 'easeOutCirc');
				$('.sec5-right .sec5-img3').stop().animate({
					right:'34%'
				}, 1200, 'easeOutCirc');
				$('.sec5-right .sec5-img1').stop().animate({
					right:'-3%'
				}, 1300, 'easeOutCirc');
				$('.sec5-right .sec5-img4').stop().animate({
					right:'0'
				}, 1600, 'easeOutCirc');
				$('.sec5-right .sec5-img5').stop().animate({
					right:'0'
				}, 2000, 'easeOutCirc');
				$('.sec5-left').stop().animate({
					marginTop:0,
					opacity:"1"
				}, 1200, 'easeOutCirc');
				$('.sec3-part1-right').stop().animate({
					marginLeft:'45%'
				}, 1200, 'easeOutCirc');
				$('.sec3-part2-right').stop().animate({
					marginLeft:'45%'
				}, 2000, 'easeOutCirc');
			};
			if(index == 6){
				$('.sec6-left .years-list').stop().animate({
					top:0
				}, 1000, 'easeOutCirc');
				$('.sect6-right-item1').stop().animate({
					marginLeft:0
				}, 800, 'easeOutCirc');
				$('.sect6-right-item2').stop().animate({
					marginLeft:0
				}, 1600, 'easeOutCirc');
				$('.sect6-right-item3').stop().animate({
					marginLeft:0
				}, 2000, 'easeOutCirc');
				$('.sect6-right-item4').stop().animate({
					marginLeft:0
				}, 2400, 'easeOutCirc');
				$('.sec6-right .add-img').stop().animate({
					opacity:'1'
				}, 3000, 'easeOutCirc');				
			};
			if(index == 7){
				$('.sec7-part2').css({"transform":'scale(1)',"-webkit-transform":'scale(1)',"-moz-transform":'scale(1)',"-o-transform":'scale(1)',"-ms-transform":'scale(1)'});
				$('.sec7-part1').stop().animate({
					right:'4%'
				}, 800, 'easeOutCirc');								
			};
		},
		onLeave: function(index, direction) {
			if(index == 1) {
//				$('.sec1-step1-right').stop().animate({
//					right: '-120%'
//				}, 1500, 'easeOutExpo');	
//				
//				$('.sec1-step2-left').stop().animate({
//					left: '120%'
//				}, 1500, 'easeOutExpo');	
//				
//				$('.sec1-step2-right').stop().animate({
//					opacity: '0'
//				}, 1500, 'easeOutExpo');
//				
//				$('.sec1-3-left1').stop().animate({
//					marginLeft: '-300%'
//				}, 1500, 'easeOutExpo');	
//				$('.sec1-3-left2').stop().animate({
//					marginLeft: '-300%'
//				}, 1500, 'easeOutExpo');	
//				$('.sec1-3-left3').stop().animate({
//					marginLeft: '-300%'
//				}, 1500, 'easeOutExpo');	
//				$('.sec1-3-left4').stop().animate({
//					marginLeft: '-300%'
//				}, 1500, 'easeOutExpo');
			};
		},
	});	
	
	//懒加载{ threshold : 200 }
	$("img.lazy").lazyload({ threshold : 200 });
})

