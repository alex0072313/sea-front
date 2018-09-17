// var tag = document.createElement('script');
//
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    var i = 1;

    $('.ytube_iframe').each(function () {
        $(this).attr('id', 'ytube_player_' + i);
        var w = $(this).data('w'),
            h = $(this).data('h'),
            vid = $(this).data('vid');

            if(!h) h = $(this).css('height');

            player = new YT.Player('ytube_player_' + i, {
                height: h,
                width: w,
                videoId: vid,
                events: {
                    //'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            i++;


    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}