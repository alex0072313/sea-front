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


});


function visibility(elements, link) {
    var link = $(link),
        elements = $(elements);

    elements.removeClass('d-none');
    link.remove();
}


