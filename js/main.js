// top banner strt
// topBn_close
$('.topBn_close').click(function(){
    $('#topBn').slideUp()
})

// top banner end

// m1 strt
// m1_mslide
$('.m1_mslide_wrap').slick({
    prevArrow : '.movPlayer .left',
    nextArrow : '.movPlayer .right',
    dots : true,
    appendDots : '.movPlayer .pager',

})
// m1 movie_mini.pc
$('.posters .posters_wrap').slick({
    slidesToShow: 5,
    slidesToScroll: 9,
    centerMode: true
})

// m1 end

// m2 strt

// movies
$('.movies_wrap').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    mobileFirst : true,
    responsive : [
        {
            breakpoint : 767, 
            settings : {
                slidesToShow : 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint : 1919, 
            settings : {
                slidesToShow : 4,
                slidesToScroll: 4
            }
        }
    ]
})

// m2 end

// m4
// noti_event
$('.event_boxes .ebox_wrap').slick({
    arrows: false,
    dots: true,
    appendDots: '.noti_event .e_box_pager',
    // customPaging : function(slider, i){
    //     return `<span class="current">${i + 1}</span> / ${slider.slideCount}`
    // },
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 1919,
            settings: {
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
    ]
})

// m5
// LCP
$('.LCP .LCPCntnt_wrap').slick({
    arrows: false,
    dots: true,
    appendDots: '.LCPpager',
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: false
            }
        },
        {
            breakpoint: 1919,
            settings: {
                slidesToShow: 6,
                dots: false
            }
        }
    ]
})

// m6
// s_theatre
$('.theatre_wrap').slick({
    arrows: false,
    dots: true,
    appendDots: '.s_theatre_in .pager',

    // fade: true,
    speed: 700,
    asNavFor: '.theatre_bg_wrap'
})
$('.theatre_bg_wrap').slick({
    arrows : false,
    // autoplay : true,
    // autoplaySpeed : 6000,
    speed : 400,
    fade : true,
    asNavFor : '.theatre_wrap'
 });