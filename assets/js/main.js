(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {
        $('.navbar-light .navbar-nav li a').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });
        $('.navbar .navbar-nav li a').on('click', function () {
            $('.navbar-collapse').collapse('hide');
        });
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 120) {
                $('.navbar').addClass("is-sticky");
            } else {
                $('.navbar').removeClass("is-sticky");
            }
        });
        $('.projects-slides').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: true,
            margin: 30,
            navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 3,
                },
                1200: {
                    items: 4,
                }
            }
        });
        $('.testimonials-slides').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            autoplayHoverPause: true,
            autoplay: true,
            animateOut: 'fadeOut',
            navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        });
        $('.team-slides').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: true,
            margin: 30,
            navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 3,
                },
                1024: {
                    items: 4,
                },
                1200: {
                    items: 4,
                }
            }
        });
        $('.projects-image-slides').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: true,
            margin: 30,
            navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
            }
        });
        $.fn.tilt.destroy = function () {
            $(this).each(function () {
                $(this).find('.js-tilt-glare').remove();
                $(this).css({
                    'will-change': '',
                    'transform': ''
                });
                $(this).off('mousemove mouseenter mouseleave');
            });
        };
        $.fn.tilt.getValues = function () {
            const results = [];
            $(this).each(function () {
                this.mousePositions = getMousePositions.call(this);
                results.push(getValues.call(this));
            });
            return results;
        };
        $.fn.tilt.reset = function () {
            $(this).each(function () {
                this.mousePositions = getMousePositions.call(this);
                this.settings = $(this).data('settings');
                mouseLeave.call(this);
                setTimeout(() => {
                    this.reset = false;
                }, this.settings.transition);
            });
        };
        $(".newsletter-form").validator().on("submit", function (event) {
            if (event.isDefaultPrevented()) {
                formErrorSub();
                submitMSGSub(false, "Please enter your email address.");
            } else {
                event.preventDefault();
            }
        });

        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            } else {
                formErrorSub();
            }
        }

        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function () {
                $("#validator-newsletter").addClass('hide');
            }, 4000)
        }

        function formErrorSub() {
            $(".newsletter-form").addClass("animated shake");
            setTimeout(function () {
                $(".newsletter-form").removeClass("animated shake");
            }, 1000)
        }

        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
        }

        if ($('.progress-line').length) {
            $('.progress-line').appear(function () {
                var el = $(this);
                var percent = el.data('width');
                $(el).css('width', percent + '%');
            }, {
                accY: 0
            });
        }
        if ($('.count-box').length) {
            $('.count-box').appear(function () {
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);
                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }
            }, {
                accY: 0
            });
        }
        $('.partner-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: true,
            margin: 30,
            navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                1200: {
                    items: 6
                }
            }
        });
    });
    $(window).on('load', function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 20,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    });
    $(window).on('load', function () {
        $('.preloader').addClass('preloader-deactivate');
    });
}(jQuery));