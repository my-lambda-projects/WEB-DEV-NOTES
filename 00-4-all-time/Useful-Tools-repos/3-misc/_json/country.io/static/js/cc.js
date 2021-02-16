//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }

    if ($(window).width() < 760) {
        $(".cc-country-info").css("width", "80%");
        $(".cc-home-block .col-md-6 img").css("width", "100%");
        $(".intro2_c2").css("background-position", "bottom center");
        $(".intro2_c2").css("background-size", "cover");
        $(".intro2_c2").css("padding", "10px 0px");
    }  else {

    }

    if ($(window).width() > 760) {
        if ($(".navbar").offset().top > 60) {
            $(".intro2_c2").css("padding", "0px");
            $(".intro2_c2 h1.page-scroll").css("margin", "10px 0px 10px");
            $(".navbar_c2>.container .navbar-brand").css("opacity", "0");
            $(".navbar_c2>.container .navbar-brand").css("z-index", "-1");
            $(".navbar_c2").css("padding", "8px 0px");
            $(".sidenav_c2").css("padding", "75px 0px 20px 0px");
            $('.cc-content_c2 .cc-anchor').css("top", "-70px");
        } else {
            $(".intro2_c2").css("padding", "100px 0px 0px 0px");
            $(".intro2_c2 h1.page-scroll").css("margin", "0px 0px 35px");
            $(".navbar_c2>.container .navbar-brand").css("opacity", "1");
            $(".navbar_c2>.container .navbar-brand").css("z-index", "1");
            $(".navbar_c2").css("padding", "20px 0px");
            $(".sidenav_c2").css("padding", "20px 0px 20px 0px");
            $('.cc-content_c2 .cc-anchor').css("top", "-190px");
        }
    }
});

$(document).ready(function() {
    $('.sidenav_c2>li>a').click(function() {
         $('.cc-content_c2 .cc-anchor').css("top", "-70px");
    });
    $('.sidenav_c2>li>#summary').click(function() {
         $('.cc-content_c2 .cc-anchor').css("top", "-190px");
    });

    if ($(window).width() < 760) {
        $(".cc-country-info").css("width", "80%");
        $(".cc-home-block .col-md-6 img").css("width", "100%");
        $(".intro2_c2").css("background-size", "cover");
        $(".intro2_c2 .intro-body").css("height", "30px");
        $(".intro2_c2").css("padding", "15px 0px 0px");
        $(".intro2_c2 .cc-country-info a").css("font-size", "24px");
        $(".intro2_c2").css("margin", "52px 0px 0px 0px");
        $(".intro2_c2 .page-scroll").css("margin", "0px 0px 0px 0px");
        $(".intro2_c2 .cc-country-info h1").css("padding-bottom", "25px");
        $(".intro2_c2 .cc-country-info .page-scroll img").css("width", "30px");
        $(".cc-content").css("margin-top", "50px");
    }

    $('.show-country').click(function(){
        var country = $('#country-select').val();
        document.location.href = '/' + country + '/';
    });

});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Google Map Skin - Get more at http://snazzymaps.com/
var myOptions = {
    zoom: 15,
    // center: new google.maps.LatLng(53.385873, -1.471471),
    // mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 21
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#000000"
        }, {
            "lightness": 40
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }]
};

// var map = new google.maps.Map(document.getElementById('map'), myOptions);

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
