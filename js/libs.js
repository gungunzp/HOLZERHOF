/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var directionsService;
var directionsDisplay;
var HOLZERHOF;
var givegeolocation = false;
var latitude;
var longitude;

function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();

    HOLZERHOF = new google.maps.LatLng(47.298358, 8.372200);
    var mapOptions = {
        zoom: 18,
        center: HOLZERHOF,
        mapTypeId: 'satellite',
        scrollwheel: false
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    directionsDisplay.setMap(map);

    var image = new google.maps.MarkerImage(
        'images/pointer.png',
        new google.maps.Size(41, 63),
        new google.maps.Point(0, 0),
        new google.maps.Point(29, 78)
    );

    var marker = new google.maps.Marker({
        icon: image,
        position: HOLZERHOF,
        map: map,
        title: 'HOLZERHOF'
    });
}

new WOW().init();

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });
    $('#totop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    $(".scroll").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $(".tree").on("click", "a", function(event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});

$(document).ready(function() {
    $("#owl-insta").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        pagination: false,

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });
});

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });
    $('#totop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
});