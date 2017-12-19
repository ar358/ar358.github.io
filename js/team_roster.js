//@author: Anthony Rodriguez 2017
/*jslint browser: true*/
/*global $, jQuery*/

var window;
$(window).resize(function () {
    //function used to resize the potrait photos for a more responsive website
    "use strict";
    var deviceWidth = $(window).width();
    if (deviceWidth < 1111) {
        $(".soph_redo").removeClass("soph");
        $(".frosh_redo").removeClass("frosh");
        $(".junior_redo").removeClass("junior");
    }
    if (deviceWidth > 1111) {
        $(".soph_redo").addClass("soph");
        $(".frosh_redo").addClass("frosh");
        $(".junior_redo").addClass("junior");
    }
});