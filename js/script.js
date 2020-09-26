$(document).ready(function () {
    let windowsize = $(window).width();
    // console.log(windowsize);

    if (windowsize <= 786) {
        $('#navbar').css("background-color", "rgba(0, 0, 0, 1)")
    } else {
        $(window).scroll(function () {
            let hT = $('#navbar').offset().top,
                wH = $('#home').height()
            if (hT > wH) {
                $('#navbar').css("background-color", "rgba(0, 0, 0, 1)")
            } else {
                $('#navbar').css("background-color", "rgba(0, 0, 0, 0.5)")
            }
        });
    }

    // Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    // make it as accordion for smaller screens
    if ($(window).width() < 992) {
        $('.dropdown-menu a').click(function (e) {
            e.preventDefault();
            if ($(this).next('.submenu').length) {
                $(this).next('.submenu').toggle();
            }
            $('.dropdown').on('hide.bs.dropdown', function () {
                $(this).find('.submenu').hide();
            })
        });
    }

    //event pada saat link di klik
    $('.navbar-nav .nav-item .nav-link').on('click', function (e) {
        //ambil isi href
        let tujuan = $(this).attr('href');

        // tangkap elemen yang dimaksud
        let elemenTujuan = $(tujuan);

        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1500, 'easeInOutExpo');

        e.preventDefault();
    });

    new WOW().init();

    //---------------------------------------------
    //Nivo slider
    //---------------------------------------------
    $('#ensign-nivoslider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 12,
        boxRows: 8,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
    });

})