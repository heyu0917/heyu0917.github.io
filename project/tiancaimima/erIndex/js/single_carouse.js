$(function(){ //页面加载完毕才执行

    //=========设置参数==========
    //图片统一高度：
    var images_height = '260px';
    //图片路径/链接(数组形式):
    // var images_url = [
    //     'img/zhengshu1.jpg',
    //     'img/zhengshu1.jpg',
    //     'img/zhengshu1.jpg'
    // ];
    var images_count = $(".banner li").length - 1;
    //console.log(images_count);

    //创建节点
    //图片列表节点
    for(var j=0;j<images_count+1;j++){
        $('.banner ul').append('<!--<li></li>-->')
    }

    //载入图片
    //$('.banner ul li').css('background-image','url('+images_url[0]+')');
    // $.each(images_url,function(key,value){
    //     $('.banner ul li').eq(key).css('background-image','url('+value+')');
    // });

    $('.banner').css('height',images_height);

    $('.banner ul').css('width',(images_count+1)*100+'%');

    //=========================

    var num = 0;
    //获取窗口宽度
    var window_width = $('.banner ul li').width();
    //自动播放
    var timer = null;
    function prevPlay(){
        num--;
        if(num<0){
            //悄悄把图片跳到最后一张图(复制页,与第一张图相同),然后做出图片播放动画，left参数是定位而不是移动的长度
            $('.banner ul').css({left:-window_width*images_count}).stop().animate({left:-window_width*(images_count-1)},500);
            num=images_count-1;
        }else{
            //console.log(num);
            $('.banner ul').stop().animate({left:-num*window_width},500);
        }
    }
    function nextPlay(){
        num++;
        if(num>images_count){
            //播放到最后一张(复制页)后,悄悄地把图片跳到第一张,因为和第一张相同,所以难以发觉,
            $('.banner ul').css({left:0}).stop().animate({left:-window_width},500);
            //css({left:0})是直接悄悄改变位置，animate({left:-window_width},500)是做出移动动画
            //随后要把指针指向第二张图片,表示已经播放至第二张了。
            num=1;
        }else{
            //在最后面加入一张和第一张相同的图片，如果播放到最后一张，继续往下播，悄悄回到第一张(肉眼看不见)，从第一张播放到第二张
            //console.log(num);
            $('.banner ul').stop().animate({left:-num*window_width},500);
        }
    }
    //timer = setInterval(nextPlay,2000);
    //鼠标经过banner，停止定时器,离开则继续播放
    $('.banner').mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        timer = setInterval(nextPlay,2000);
    });
    //播放下一张
    $('.banner-wrap .right').click(function(){
        nextPlay();
    });
    //返回上一张
    $('.banner-wrap .left').click(function(){
        prevPlay();
    });
});