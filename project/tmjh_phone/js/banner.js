// var winW = $(window).width();
// $(function(){
//     var index = 1;
//     var switching = false; 

//     var list = document.getElementById("banner_list");
//     list.style.width = 6*winW +'px';
//     list.style.left = -winW +'px';

//     // function lastImg() {
//     //     if (switching) {
//     //         return;
//     //     }
//     //     switchPic(winW);
//     //     index--;
//     //     if (index < 1) {
//     //         index = 4;
//     //     }
//     //     else if(index  > 4) {
//     //         index = 1;
//     //     }
//     // }

//     function nextImg() {
//         if (switching) {
//             return;
//         }
//         switchPic(-winW);
//         index++;
//         if (index < 1) {
//             index = 4;
//         }
//         else if(index  > 4) {
//             index = 1;
//         }
//     }

//     // 切换图片的函数
//     function switchPic(offset) {
//         switching = true;
//         var time = 300;
//         var inter = 5; // 隔5ms切换一次
//         var speed = Math.ceil(offset/(time/inter));

//         var left = parseInt(list.style.left) + offset;

//         var go = function () {
//             var curLeft = parseInt(list.style.left);
//             console.log(curLeft +' '+ left +' '+ speed);
//             if ((speed > 0 && curLeft < left) || (speed < 0 && curLeft > left)) {
//                 list.style.left = curLeft + speed + 'px';

//                 setTimeout(go, inter);
//             }
//             else {
//                 list.style.left = left + 'px';
//                 if (left < - 4*winW) {
//                     list.style.left = -winW + 'px';
//                 }
//                 else if (left > -winW) {
//                     list.style.left = -4*winW + 'px';
//                 }
//                 switching = false;

//                 $("#banner_btn").find('li').eq(index-1).addClass("light").siblings().removeClass('light');
//             }
//         };

//         go();
//     }

//     // 自动轮播
//     var timer;
//     var play = function () {
//         timer = setInterval(nextImg, 5000);
//     };
//     var stop = function () {
//         clearInterval(timer);
//     };

//     //order = 'next';
//     interval = 2000;

//     play();
// })