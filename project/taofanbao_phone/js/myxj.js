$(function(){
// 	var user_id = localStorage.getItem('user_id');
// 	var token = localStorage.getItem('token');
	
// 	mui.init({
// 		pullRefresh: {
// 			container: '#container',
// 			up: {
// 				contentrefresh: '正在加载...',
// 				//contentnomore:'没有更多数据了',
// 				callback: pullupRefresh
// 			}
// 		}
// 	});
	
// 	var count = 1;

// 	function pullupRefresh() {
// 		$.ajax({
// 			type: "post",
// 			url: common_url+"my_police",
// 			dataType: "json",
// 			data: {
// 				user_id: user_id,
// 				page: count,
// 				token: token
// //				user_id: 4
// 			},
// 			success: function(re){
// 				if(re.status == 1){
// 					//console.log(JSON.stringify(re.data));
// 					var data = re.data.data;
// 					//总页数
// 					var total_page = re.data.last_page;
						
// 					//dom结构
// 					xj_dom(data);
					
// 					//参数为true代表没有更多数据了。
// 					mui('#container').pullRefresh().endPullupToRefresh((++count > total_page));
// 				}
// 			}
			
// 		})
// 	}
	
// 	if (mui.os.plus) {
// 		mui.plusReady(function() {
// 			setTimeout(function() {
// 				mui('#container').pullRefresh().pullupLoading();
// 			}, 1000);
// 		});
// 	} else {
// 		mui.ready(function() {
// 			mui('#container').pullRefresh().pullupLoading();
// 		});
// 	}
	
 })

// function xj_dom(data){
// 	var lis = "";
// 	for(var i=0;i<data.length;i++){
// 		var src="http://116.62.50.214/"+data[i].headimg;
// 		lis += '<li>'
// 					+'<div class="li-top clearfix">'
// 						+'<div class="fl-lt">'
// 							+'<img src="'+src+'" alt="" class="head-img"/>'
// 							+'<div class="name-phone">'
// 								+'<h3>'+data[i].username+'</h3>'
// 								+'<div>'
// 									+'<img src="../img/p_icon.png" alt="" />'
// 									+'<span>'+data[i].phone+'</span>'
// 								+'</div>'
// 							+'</div>'
// 						+'</div>'
// 						+'<div class="fl-rt">'
// 							+'<h2>'+data[i].exp+'</h2>'
// 						+'</div>'
// 					+'</div>'
// 					+'<div class="li-bottom clear-box">'
// 						+'<div class="li-b-item">'
// 							+'<h4>'+data[i].case_num+'</h4>'
// 							+'<p>发布案件数</p>'
// 						+'</div>'
// 						+'<div class="li-b-item">'
// 							+'<h4>'+data[i].together_num+'</h4>'
// 							+'<p>并案数</p>'
// 						+'</div>'
// 						+'<div class="li-b-item">'
// 							+'<h4>'+data[i].cues_num+'</h4>'
// 							+'<p>提供线索数</p>'
// 						+'</div>'
// 					+'</div>'
// 				+'</li>';							
// 	}
// 	$("#fu_list").append(lis);
	
//}



