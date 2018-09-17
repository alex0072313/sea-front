$(function () {

    if($('.objects_populars').length){
        var swiper = new Swiper('.objects_populars', {
            slidesPerView: 4,
            spaceBetween: 30,

            navigation: {
                nextEl: '.sl-next',
                prevEl: '.sl-prev',
            },

            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                450: {
                    slidesPerView: 1,
                },
            }

        });
    }

    if($('.vk_widget').length){
        addScript('//vk.com/js/api/openapi.js?116', function () {

            function VK_Widget_Init(){
                var i = 1;
                $('.vk_widget').each(function () {
                    $(this).attr('id', 'vk_widget_' + i);

                    var m = $(this).data('m') ? $(this).data('m') : 0,
                        h = $(this).data('h'),
                        w = $(this).data('w');

                    if(!h){
                        if($(this).css('height') > 0){
                            h = $(this).css('height')
                        }else{
                            h = 255;
                        }
                    }

                    if(!w){
                        if($(this).css('height') > 0){
                            w = $(this).css('height')
                        }else{
                            w = 'auto';
                        }
                    }

                    document.getElementById('vk_widget_' + i).innerHTML = '<div id="vk_groups_'+i+'"></div>';
                    VK.Widgets.Group("vk_groups_"+i, {mode: m, width: w, height: h }, $(this).data('group'));

                    i++;
                });
            }

            window.addEventListener('load', VK_Widget_Init, false);
            window.addEventListener('resize', VK_Widget_Init, false);
        });

    }

    if($('.ytube_iframe').length){
        addScript('https://www.youtube.com/iframe_api');
        addScript('js/ytube.js');
    }

});

function visibility(elements, link) {
    var link = $(link),
        elements = $(elements);

    elements.removeClass('d-none');
    link.remove();
}

function addScript(filepath, callback, timeout = 0) {

        if (filepath) {
            var fileref = document.createElement('script');
            var done = false;
            var head = document.getElementsByTagName("head")[0];

            fileref.onload = fileref.onreadystatechange = function () {
                if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                    done = true;

                    setTimeout(function () {
                        if(typeof callback === 'function') callback();
                    }, timeout);

                    // Handle memory leak in IE
                    fileref.onload = fileref.onreadystatechange = null;
                    if (head && fileref.parentNode) {
                        //head.removeChild(fileref);
                    }
                }
            };

            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filepath);
            head.appendChild(fileref);
        }
}


