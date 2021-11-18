$(document).ready(function() {
    var youtubeSwiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // function to stop youtube video on slidechange
        on: {
            slideChange: function(el) {
                $('.swiper-slide').each(function() {
                    var youtubePlayer = $(this).find('iframe').get(0);
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    }
                });
            },
        },
    });
});