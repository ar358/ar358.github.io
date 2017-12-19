//@author: Anthony Rodriguez 2017
/*jslint browser: true*/
/*global $, jQuery*/

var window;
$(window).resize(function () {
    //function used to resize elements for a more responsive website by either adding/editing the css or removing css properties
    "use strict";
    var deviceWidth = $(window).width();
    if (deviceWidth < 1000) {
        $(".title_background").css("background-position", "center");
        $(".background2").css("background-position", "center");
        $(".wrapper").removeClass("wrapper");
        $(".youtube_text").css("width", "100%");
        $(".basic_profile").css("width", "80%");
        $(".video").css("width", "60%");
    }
    if (deviceWidth > 1000) {
        $("#wrapper").addClass("wrapper");
        $("#wrapper2").addClass("wrapper");
        $(".youtube_text").css("width", "55%");
        $(".title_background").css("background-position", "");
        $(".background2").css("background-position", "");
        $(".basic_profile").css("width", "40%");
        $(".video").css("width", "50%");
    }
});