$(document).ready(function () {
    $('#myRoundabout').roundabout({
        shape: 'figure8',
        minOpacity: 1
    });
    $('#myRoundabout li:first')
        .children('a')
        .attr('href', $('#myRoundabout li:first').children(':hidden').val());

    $('#myRoundabout').autoPlay();
});

$.fn.autoPlay = function () {    
    if ($(this).children('li').length == 5) {
        $(this)
            .unbind('mousemove')
            .unbind('mouseout')
            .mousemove(cTimer)
            .mouseout(createTimer);
        createTimer();
    }
}
var animTimer;
var index_g = 0;
function pageClick() {
    $('#myRoundabout li:eq(' + index_g + ')').click();
    index_g++;
    if (index_g > 4) {
        index_g = 0;
    }
    createTimer();
    //console.log(index_g);
}

function createTimer() {
    animTimer = setTimeout('pageClick()', 3000);
}

function cTimer() {
    //console.log("a");
    clearTimeout(animTimer);
}

