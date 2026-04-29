// owl carousol 

var owl = $('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav: false,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
});

$('.custom-next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.custom-prev').click(function() {
    owl.trigger('prev.owl.carousel');
});




