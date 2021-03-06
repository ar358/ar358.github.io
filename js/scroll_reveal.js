//@author: Anthony Rodriguez 2017
/*jslint browser: true*/
// API used from ScrollReveal: https://github.com/jlmakes/scrollreveal
/*global $, jQuery*/

//initialize ScrollReveal
var ScrollReveal;
var window;
window.scroller = new ScrollReveal({reset: false}); //when set to false: content stays after viewed, true: content fades in and out
var scroller = window.scroller;

/*Used for every page */
scroller.reveal(".title", {
    origin: "top",
    viewFactor: 0.5,
    duration: 3000
});

scroller.reveal(".scroll_box p", {
    origin: "bottom",
    viewFactor: 0.25,
    duration: 2000
});

/*Used for each player page */
scroller.reveal(".basic_profile", {
    origin: "top",
    viewFactor: 0.5,
    duration: 2000
});

scroller.reveal(".video", {
    origin: "left",
    viewFactor: 0.5,
    duration: 2000
});
