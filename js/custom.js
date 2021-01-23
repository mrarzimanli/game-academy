    /* Preloader*/

    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut();
    });

    /*Createing Nice Scrool*/

    $(function() {

        $('html').niceScroll({
            cursorborder: 'none',
            cursorcolor: '#f7600e',
            cursorwidth: '5px',
            cursorborderradius: '3px'
        });

        /*Typing Write*/

        var typed = new Typed('.typing', {
            strings: ["Mobile Games",
                "Computer Games",
                "Online Games",
                "Soever Games"
            ],
            typeSpeed: 70,
            backDelay: 1700,
            backSpeed: 35,
            loop: true,
        });

        /*When angle-down icon in home page was clicked then page was scrooling with animation to feature section*/

        $('.home .fa-angle-double-down').click(function() {
            $('html,body').animate({
                scrollTop: $('.features').offset().top
            }, 1000);
        });

        /*When learn more button was clicked then page was scrooling with animation to contact section*/

        $('.home .button').click(function() {
            $('html,body').animate({
                scrollTop: $('.contact').offset().top
            }, 1500);
        });

        /*When navigation menu was active then page was scrooling with animation to section, that we want*/

        $('nav a').click(function() {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1000);
            return false;
        });

        /*When Hamburger menu button was clicked then menu page was starting to seen*/

        $(".menu-toggle").on('click', function() {
            $(this).toggleClass("on");
            $('.menu-section').toggleClass("on");
            $("nav ul").toggleClass('nav hidden');
        });

        /*When Show more(Show less) button was clicked then page was fading in(fading out) with animation*/

        $('.our_work .main_button').click(function() {
            $('.our_work .hidden').fadeToggle();
            var $this = $(this);
            $this.toggleClass('.our_work .main_button');
            if ($this.hasClass('.our_work .main_button')) {
                $this.text('Show Less');
            } else {
                $this.text('Show More');
            }
        });

        /*When angle-left(right) icon in testimonials section was clicked then page and icons was changed with animation*/

        var leftArrow = $('.testimonials .fa-angle-left');
        var rightArrow = $('.testimonials .fa-angle-right');

        function checkClients() {

            if ($('.client:first').hasClass('active')) {
                leftArrow.fadeOut(0);
            } else {
                leftArrow.fadeIn(0);
            }

            if ($('.client:last').hasClass('active')) {
                rightArrow.fadeOut(0);
            } else {
                rightArrow.fadeIn(0);
            }
        }

        checkClients();
        $('.testimonials i').click(function() {
            if ($(this).hasClass('fa-angle-right')) {
                $('.testimonials .active').fadeOut(200, function() {
                    $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                    checkClients();

                });

            } else {
                $('.testimonials .active').fadeOut(200, function() {
                    $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                    checkClients();

                });

            }
        })

        /*to use WOW JavaScript */

        new WOW().init();

        /*when site was loading window scroll home page*/

        // $(window).on('beforeunload', function() {
        //   $(window).scrollTop(0);
        // });

        /*Pop Up box with images*/

        var gifs = ["gif/gif1-min.gif",
            "gif/gif2-min.gif",
            "gif/gif3-min.gif",
            "gif/gif4-min.gif",
            "gif/gif5-min.gif",
            "gif/gif6-min.gif"
        ];
        var buttons = $('.over .search');

        buttons.each(function(index) {
            $(this).click(function(event) {
                $('#pop').show(300);
                $('#pop img').attr('src', gifs[index])
            });
        });

        $('.close').click(function(event) {
            $('#pop').hide(300);
        });

        $(window).resize(function(event) {
            if ($(window).width() < 1160) {
                $('.over').hide();
            } else {
                $('.over').show();
            }
        });

        $('.over').trigger('resize');

        /*Back to Top*/

        $('.to_back').click(function() {
            $('html,body').animate({
                scrollTop: $('.home').offset().top
            }, 1500);
        });

        $('html body').click(function(event) {
            var source = event.target.id;
            if (source == "in_1") {
                $('#in_1').css({ "border-bottom": "3px solid #f7600e" });
                $('#in_2, #in_3').css({ "border-bottom": "none" });
            } else if (source == "in_2") {
                $('#in_2').css({ "border-bottom": "3px solid #f7600e" });
                $('#in_1, #in_3').css({ "border-bottom": "none" });
            } else if (source == "in_3") {
                $('#in_3').css({ "border-bottom": "5px solid #f7600e" });
                $('.contact input').css({ "border-bottom": "none" });
            } else {
                $('.contact input, #in_3').css({ "border": "none" });
            }
        });

    });
    /*Project ended*/