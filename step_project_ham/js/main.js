$(document).ready(function () {
    $('.collapse-header li').click(function () {
        $(this).addClass('active').siblings().removeClass('active').closest('div.collapse')
            .find('div.card-collapse-body').removeClass('active')
            .eq($(this).index()).addClass('active');
    })
});

$(document).ready(function () {
    $('.fountainG').hide(); // hide preloader
    $(".category").hide(); // hide category
    $(".category").slice(0, 12).show(500).addClass('animated rotateIn');
    $("#btn-load-more").click(function () {
        const imageType = $('.nav-tabs-links.active').data('filter');
        $('#btn-load-more').hide(); // hide button
        $('.fountainG').show(); // show loader
        setTimeout(function () { // Set Timeout Function
            $(`.category${imageType}:hidden`).slice(0, 12).show(500).addClass('animated rotateIn');
            $('#btn-load-more').show(); //show button
            $('.fountainG').hide(); // hide preloader
            if ($(`.category${imageType}:hidden`).length < 1) {
                $('#btn-load-more').hide();
            }
        }, 2000);
    });

    $('.nav-tabs-links').click(function () {
        $(this).addClass('active').siblings().removeClass("active");
        const imageType = $(this).data("filter");
        $('.category').hide();
        $(`.category${imageType}`).slice(0, 12).show(500).addClass('animated rotateIn');
        if ($(`.category${imageType}:hidden`).length < 1) {
            $('#btn-load-more').hide();
        } else {
            $('#btn-load-more').show();
        }
    })
});
$(document).ready(function () {
    $('.column-tabs-view, .grid-item-view').hover(
        function () {
            $(this).addClass('animated bounceIn');
        },
        function () {
            $(this).removeClass('animated bounceIn');
        }
    )
});
$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        autoplay: true,
        autoplaySpeed: 7000,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: "<i class=\"fas fa-chevron-left prev fz-fa\"></i>",
        nextArrow: "<i class=\"fas fa-chevron-right next fz-fa\"></i>",
    });
});

$(document).ready(function () {
    $('.item').hide();
    $('.item').slice(0, 7).show();
    $('#show-grid').click(function () {
        $('#show-grid').hide();
        $('.fountainG').show();
        setTimeout(function () {
            $('.item:hidden').slice(0, 9).show().addClass('animated rotateIn');
            if ($('.item:hidden').length < 1) {
                $('#show-grid').hide();
                $('.fountainG').hide();
            }
            let msnry = new Masonry(elem, {
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                gutter: 22,
                percentPosition: true,
                isAnimated: true,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        }, 2000);
    });
    let elem = document.querySelector('.grid');
    let msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 22,
        percentPosition: true,
        isAnimated: true,
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
});

