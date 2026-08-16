(function ($) {
    "use strict";

    var windowOn = $(window);

    //Preloader---->>
    windowOn.on("load", function () {
        $("#loading").fadeOut(500);
    });

    // Sticky header---->>
    windowOn.on('scroll', function () {
        var scroll = windowOn.scrollTop();
        if (scroll < 100) {
            $("#mi-header-sticky").removeClass("header-sticky");
        } else {
            $("#mi-header-sticky").addClass("header-sticky");
        }
    });

    // Offcanvas open/close and overlay---->>
    $(".mi-header-offcanvas").on('click', function () {
        $(".mi-offcanvas").toggleClass('mi-offcanvas-open');
        $(".mi-offcanvas-overlay").toggleClass('mi-offcanvas-overlay-open');
    });
    $(".mi-offcanvas-close-button,.mi-offcanvas-overlay").on('click', function () {
        $(".mi-offcanvas").removeClass('mi-offcanvas-open');
        $(".mi-offcanvas-overlay").removeClass('mi-offcanvas-overlay-open');
    });

    // Adding menu to offcanvas---->>
    let miMenuHTML = $(".mi-menu > nav").clone();
    let miOffcanvasMenu = $(".mi-offcanvas-menu");
    miOffcanvasMenu.append(miMenuHTML);

    // Adding sub-menu to offcanvas
    if ($(miOffcanvasMenu).find(".sub-menu").length != 0) {
        $(miOffcanvasMenu).find(".sub-menu").parent().append("<button class='mi-sidemenu-close'><i class='fas fa-chevron-right'></i></button>")
    }
    $(".mi-sidemenu-close").on('click', function () {
        $(this).siblings(".sub-menu").slideToggle();
        $(this).parent().toggleClass("active");
    })

    // Header Search hide/open---->>
    $(".mi-header-search-input").hide();

    $(".mi-header-search-button").on('click', function () {
        $(this).hide();
        $(".mi-header-search-input").show(200);
        $(".mi-header-search-input input").val("");
    });

    $(".mi-header-search-input button").on('click', function () {
        $(".mi-header-search-input").hide();
        $(".mi-header-search-button").show(200);
    });

    //for popup video---->>
    $('.popup-video').magnificPopup({
        type: 'iframe'
    });

    // data bg color---->>
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"))
    });

    // data border color---->>
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    });

    // data bg img---->>
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")")
    });

    // data text color---->>
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"))
    });

    // data border color---->>
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"))
    });

    // Margin Left---->>
    $("[data-margin-left]").each(function () {
        $(this).css("margin-left", $(this).attr("data-margin-left"))
    });

    // Margin Top---->>
    $("[data-margin-top]").each(function () {
        $(this).css("margin-top", $(this).attr("data-margin-top"))
    });

    // Padding Top---->>
    $("[data-padding-top]").each(function () {
        $(this).css("padding-top", $(this).attr("data-padding-top"))
    });

    // Padding Left---->>
    $("[data-padding-left]").each(function () {
        $(this).css("padding-left", $(this).attr("data-padding-left"))
    });

    //  Accordion active class adding
    $(".mi-accordion-button").on('click', function () {
        $(".mi-accordion-item").removeClass("active");
        $(this).closest(".mi-accordion-item").addClass("active");
    });

    // Testimonial Swiper slider Home 01---->>
    var swiper = new Swiper(".testimonial-slider-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        loop: true,
        navigation: {
            nextEl: ".mi-test-arrow-next",
            prevEl: ".mi-test-arrow-prev",
        },
    });

    // Testimonial Swiper slider Home 02 & Home 03---->>
    var swiper = new Swiper(".testimonial2-slider-active", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: ".mi-testimonial2-arrow-next",
            prevEl: ".mi-testimonial2-arrow-prev",
        },
    });

    // Testimonial Thumbnail Slider Home 04
    const thumbs = new Swiper(".testimonial-thumb", {

        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
        loop: true,

    });


    // Testimonial Main Slider Home 04
    const testimonial = new Swiper(".testimonial4-slider-active", {

        loop: true,
        // speed: 300,

        navigation: {
            nextEl: ".mi-testimonial4-next",
            prevEl: ".mi-testimonial4-prev",
        },

        thumbs: {
            swiper: thumbs,
        },

    });

    //Testimonial 5 swiper silder---->>
    var swiper = new Swiper('.testimonial5-slider-active', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        navigation: {
            nextEl: ".mi-testimonial5-next",
            prevEl: ".mi-testimonial5-prev",
        },
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 40,
            },
        },
    });

    //Brand swiper silder Home 01---->>
    var swiper = new Swiper(".brand-slider-active", {
        slidesPerView: "auto",
        spaceBetween: 50,
        loop: true,
        speed: 3000,
        freeMode: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    //Brand swiper silder-2 Home 01---->>
    var swiper = new Swiper(".brand-slider-active-2", {
        speed: 3000,
        direction: "horizontal",
        loop: true,
        slidesPerView: 7,
        freeMode: true,
        spaceBetween: 50,

        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        breakpoints: {
            360: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });


    //Brand swiper silder Home 03---->>
    var swiper = new Swiper(".brand-slider-active-3", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        speed: 3000,
        freeMode: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    //Team swiper silder Home 01---->>
    var swiper = new Swiper('.team-slider-active', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 500,
        loop: true,
        navigation: {
            nextEl: ".mi-team-arrow-next",
            prevEl: ".mi-team-arrow-prev",
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });

    //Project swiper silder Home 04---->>
    var swiper = new Swiper('.project-slider-active', {
        slidesPerView: 1,
        speed: 500,
        loop: true,
        navigation: {
            nextEl: ".mi-project-arrow-next",
            prevEl: ".mi-project-arrow-prev",
        },
        breakpoints: {
            360: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });

    // Back to Top---->>
    var $backToTop = $(".mi-back-to-top");
    $backToTop.hide();

    windowOn.on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $backToTop.fadeIn();
            $(".mi-back-to-top").addClass("mi-back-to-top-open");
        } else {
            $backToTop.fadeOut();
            $(".mi-back-to-top").removeClass("mi-back-to-top-open");
        }
    });

    $backToTop.on('click', function (e) {
        $("html, body").animate({ scrollTop: 0 }, 200);
    });

    // WOW js---->>
    new WOW().init();

    // Pop-Up Search Box---->>
    $(document).ready(function () {

        // Open / close search popup
        $("#searchBtn").on("click", function (e) {
            e.stopPropagation();

            $("#searchPopup").fadeToggle(200);
        });

        // Press Enter inside search input
        $("#searchInput").on("keydown", function (e) {

            if (e.key === "Enter") {

                const searchText = $(this).val();

                console.log("Search:", searchText);

                // Hide search popup
                $("#searchPopup").fadeOut(200);

                // Clear input
                $(this).val("");
            }

        });

        // Close when clicking outside
        $(document).on("click", function () {
            $("#searchPopup").fadeOut(200);
            $("#searchInput").val("");
        });

        // Prevent popup from closing when clicking inside it
        $("#searchPopup").on("click", function (e) {
            e.stopPropagation();
        });

    });


})(jQuery);
