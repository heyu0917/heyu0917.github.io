$(function(){
	function e(e) {
        var n = 0,
        a = 0,
        i = !0,
        o = !0;
        $(e).mousewheel(function(e, t) {
            n = (new Date).getTime(),
            t < 0 && i && a - n <= -300 && (i = !1, $.fn.fullpage.moveSlideRight(), i = !0, a = (new Date).getTime()),
            t > 0 && o && a - n <= -300 && (o = !1, $.fn.fullpage.moveSlideLeft(), o = !0, a = (new Date).getTime())
        })
    }

	$("#container").fullpage({
		anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7", "page8", "page9", "page10", "page11", "page12", "page13", "page14"],
		controlArrows: !1,
		loopHorizontal: !1,
		slidesNavigation: true,
		afterLoad: function(e,index){
			if(index != 1){
				$('.back-top').show();
			}else{
				$('.back-top').hide();
			}
		}
	});
	e('#section4');
	e('#section6');
	e('#section9');
	$(".back-top").click(function(e) {
        $("#container").fullpage.moveTo(1);
    })
	
	jQuery(".section1 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"topLoop",vis:3,delayTime:300,interTime:1000});
	jQuery(".section8 .picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:5,delayTime:300,interTime:2000});
	jQuery(".section9 .picScroll-left1").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:3,delayTime:300,interTime:2000});
	jQuery(".section9 .picScroll-left2").slide({titCell:".hd ul",mainCell:".bd ul",autoPlay:true,autoPage:true,effect:"leftLoop",vis:3,delayTime:300,interTime:2000});
	
	 $('#slide3d1').slideCarsousel({slideType:'3d',indicatorEvent:'mouseover',isAutoChange:true,direction: 2000,});
	 $('#slide3d2').slideCarsousel({slideType:'3d',indicatorEvent:'mouseover',isAutoChange:true,direction: 2000,});

	$('.section9 .list1 li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$('.section9 .box .picScroll-left').eq(index).show().siblings().hide();
	})
})