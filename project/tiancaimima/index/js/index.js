$(function(){
	//第三屏
	$(".section2-left-top li").hover(function(){
		$(this).addClass("light").siblings().removeClass("light");
	})

	//第八屏 选择省市
	var city_flag = true;
	$("#city_select,.city-down").click(function(){
		if(city_flag){
			$("#city_container").slideDown(300);
			$("dl.line").remove();
			city_flag = false;				
		}else{
			$("#city_container").slideUp(300);
			city_flag = true;	
		}
	})
	//点击取消
	$("#city_container .up").click(function(){
		$("#city_container").slideUp(300);
		city_flag = true;	
	})
	//点击省，将市的数据插入并显示
	var city1 = ["大连市","鞍山市","盘锦市","锦州市","阜新市","辽阳市","葫芦岛市","朝阳市","营口市","沈阳市","丹东市"];
	$("dd").click(function(){
		if($(this).attr("data-type") == 1){
			var create_dl = document.createElement("dl");
			create_dl.className = "line";
			var dd = "";
			for(var i=0;i<city1.length;i++){
				console.log(i);
				dd += '<dd data-type="2">'+city1[i]+'</dd>';
			}
			console.log(dd);
			$(this).parent().after(create_dl);
			$("dl.line").append(dd);

			$("dl.line dd").click(function(){
				var city_text = $(this).html();
				$("#city_select").val(city_text);

				$("#city_container").slideUp(300);
				city_flag = true;	
			})
		}
	})

	//第一屏新闻
	if($(".section0-list-wrap li").length>0){
		$(".section0-right").newsScroll({
			rowWidth:280,
			auto:true
		});
	}

	//第三屏新闻切换
	$(".section2-left-top li").hover(function(){
		var index = $(this).index();
		$(".section2-middle-part").eq(index).css({"display":"block"});
		$(".section2-middle-part").not($(".section2-middle-part").eq(index)).css({"display":"none"});
	})

})
var _noSelect = 0;
(function(a) {
	a.fn.extend({
		newsScroll:function (opt, callback){
			var defaults = {
				time: 4000,
				rowWidth: 253,
				speed: 500,
				auto: false,
				stops: true
			};
			var opts = $.extend({},defaults, opt),
				intId = [];
            scrollLeft = function (obj,_width) {
				var _data = obj.find("ul li").eq(0).attr("data-width"),
					_obj = obj.find("ul");
				if(_data != '' && _data != undefined){
					_width = _data;
				}
                _obj.animate({
                    marginLeft:-_width
                }, 500, function () {
                    _obj.find("li:first").appendTo(_obj);
                    _obj.css({marginLeft:0});
                });
            };
            scrollRight = function (obj,_width) {
				var _data = obj.find("ul li").eq(0).attr("data-width"),
					_obj = obj.find("ul");
				if(_data != '' && _data != undefined){
					_width = _data;
				}
                _obj.find("li:last").prependTo(_obj);
                _obj.css({marginLeft:-_width});
                _obj.animate({
                    marginLeft:0
                }, 500);
            };
			this.each(function(i) {
				var sh = opts.rowWidth,
					time = opts.time,
					auto = opts.auto,
					stops = opts.stops,
					_this = $(this);
				_this.find(".prev").bind("click",function(){
					clearInterval(intId[i]);
					scrollRight(_this, sh);
				});
				_this.find(".next").bind("click",function(){
					clearInterval(intId[i]);
					scrollLeft(_this, sh);
				});
				if(auto){
					intId[i] = setInterval(function() {
						scrollLeft(_this, sh);
					},time);
					if(stops){
						_this.hover(function() {
							clearInterval(intId[i]);
						},function() {
							intId[i] = setInterval(function() {
								scrollLeft(_this, sh);
							},time);
						});
					}
				}
			});
		},
		noticeScroll:function (opt, callback){
			var defaults = {
				time: 4000,
				rowWidth: 253,
				speed: 500,
				auto: false,
				loop:5,
				stops: true
			};
			var opts = $.extend({},defaults, opt),
				intId = [],
				_loop = opts.loop;
            function scrollLeft(obj,_width) {
				var _obj = obj.find(".box");
                _obj.animate({
                    marginTop:-_width
                }, 500, function () {
					for(var l=0;l<_loop;l++){
                    	_obj.find("a").eq(0).appendTo(_obj);
					}
                    _obj.css({marginTop:0});
                });
            };
			this.each(function(i) {
				var sh = opts.rowWidth,
					time = opts.time,
					auto = opts.auto,
					stops = opts.stops,
					_this = $(this);
				if(auto){
					intId[i] = setInterval(function() {
						scrollLeft(_this, sh);
					},time);
					if(stops){
						_this.hover(function() {
							clearInterval(intId[i]);
						},function() {
							intId[i] = setInterval(function() {
								scrollLeft(_this, sh);
							},time);
						});
					}
				}
			});
		}
	});
	a.tiny = a.tiny || {};
	a.tiny.scrollbar = {
		options: {
			axis: "y",
			wheel: 40,
			scroll: true,
			lockscroll: true,
			size: "auto",
			sizethumb: "auto",
			invertscroll: false
		}
	};
	a.fn.tinyscrollbar = function(d) {
		var c = a.extend({}, a.tiny.scrollbar.options, d);
		this.each(function() {
			a(this).data("tsb", new b(a(this), c))
		});
		return this
	};
	a.fn.tinyscrollbar_update = function(c) {
		return a(this).data("tsb").update(c)
	};

	function b(q, g) {
		var k = this,
			t = q,
			j = {
				obj: a(".viewport", q)
			}, h = {
				obj: a(".textArea", q)
			}, d = {
				obj: a(".scrollbar", q)
			}, m = {
				obj: a(".trackbar", d.obj)
			}, p = {
				obj: a(".thumbbar", d.obj)
			}, l = g.axis === "x",
			n = l ? "left" : "top",
			v = l ? "Width" : "Height",
			r = 0,
			y = {
				start: 0,
				now: 0
			}, o = {}, e = "ontouchstart" in document.documentElement;
		function c() {
			k.update();
			s();
			return k
		}
		this.update = function(z) {
			j[g.axis] = j.obj[0]["offset" + v];
			h[g.axis] = h.obj[0]["scroll" + v];
			h.ratio = j[g.axis] / h[g.axis];
			d.obj.toggleClass("disable", h.ratio >= 1);
			m[g.axis] = g.size === "auto" ? j[g.axis] : g.size;
			p[g.axis] = Math.min(m[g.axis], Math.max(0, (g.sizethumb === "auto" ? (m[g.axis] * h.ratio) : g.sizethumb)));
			d.ratio = g.sizethumb === "auto" ? (h[g.axis] / m[g.axis]) : (h[g.axis] - j[g.axis]) / (m[g.axis] - p[g.axis]);
			r = (z === "relative" && h.ratio <= 1) ? Math.min((h[g.axis] - j[g.axis]), Math.max(0, r)) : 0;
			r = (z === "bottom" && h.ratio <= 1) ? (h[g.axis] - j[g.axis]) : isNaN(parseInt(z, 10)) ? r : parseInt(z, 10);
			w()
		};

		function w() {
			var z = v.toLowerCase();
			p.obj.css(n, r / d.ratio);
			h.obj.css(n, -r);
			o.start = p.obj.offset()[n];
			d.obj.css(z, m[g.axis]);
			m.obj.css(z, m[g.axis]);
			p.obj.css(z, p[g.axis])
		}

		function s() {
			if (!e) {
				p.obj.bind("mousedown", i);
				m.obj.bind("mouseup", u)
			} else {
				j.obj[0].ontouchstart = function(z) {
					if (1 === z.touches.length) {
						i(z.touches[0]);
						z.stopPropagation()
					}
				}
			} if (g.scroll && window.addEventListener) {
				t[0].addEventListener("DOMMouseScroll", x, false);
				t[0].addEventListener("mousewheel", x, false);
				t[0].addEventListener("MozMousePixelScroll", function(z) {
					z.preventDefault()
				}, false);
			} else {
				if (g.scroll) {
					t[0].onmousewheel = x;
				}
			}
		}

		function i(A) {
			a("body").addClass("noSelect");
			if (_noSelect == 0) {
				$("body")[0].onselectstart = new Function("return false");   
				_noSelect = 1;     
			}
			var z = parseInt(p.obj.css(n), 10);
			o.start = l ? A.pageX : A.pageY;
			y.start = z == "auto" ? 0 : z;
			if (!e) {
				a(document).bind("mousemove", u);
				a(document).bind("mouseup", f);
				p.obj.bind("mouseup", f)
			} else {
				document.ontouchmove = function(B) {
					B.preventDefault();
					u(B.touches[0])
				};
				document.ontouchend = f
			}
		}

		function x(B) {
			if (h.ratio < 1) {
				var A = B || window.event,
					z = A.wheelDelta ? A.wheelDelta / 120 : -A.detail / 3;
				r -= z * g.wheel;
				r = Math.min((h[g.axis] - j[g.axis]), Math.max(0, r));
				p.obj.css(n, r / d.ratio);
				if(q.find(".textArea").height()>q.find(".viewport").height()){
					h.obj.css(n, -r);
				}
				if (g.lockscroll || (r !== (h[g.axis] - j[g.axis]) && r !== 0)) {
					A = a.event.fix(A);
					A.preventDefault()
				}
			}
		}

		function u(z) {
			if (h.ratio < 1) {
				if (g.invertscroll && e) {
					y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + (o.start - (l ? z.pageX : z.pageY)))))
				} else {
					y.now = Math.min((m[g.axis] - p[g.axis]), Math.max(0, (y.start + ((l ? z.pageX : z.pageY) - o.start))))
				}
				r = y.now * d.ratio;
				h.obj.css(n, -r);
				p.obj.css(n, y.now)
			}
		}

		function f() {
			a("body").removeClass("noSelect");
			if (_noSelect == 1) {
				$("body")[0].onselectstart = new Function("return true");
				_noSelect = 0;
			}
			a(document).unbind("mousemove", u);
			a(document).unbind("mouseup", f);
			p.obj.unbind("mouseup", f);
			document.ontouchmove = document.ontouchend = null;
		}
		return c()
	}
}(jQuery));