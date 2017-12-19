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

/* Used for team_roster.html to reveal the player potraits when scrolled upon*/
scroller.reveal(".seniors", {
    origin: "top",
    viewFactor: 0.5,
    duration: 1500
});

scroller.reveal(".juniors", {
    origin: "top",
    viewFactor: 0.5,
    duration: 1500
});

scroller.reveal(".sophomores", {
    origin: "top",
    viewFactor: 0.25,
    duration: 1500
});


scroller.reveal(".frosh_group1", {
    origin: "top",
    viewFactor: 0.50,
    duration: 3000
});

scroller.reveal(".frosh_group2", {
    origin: "top",
    viewFactor: 0.50,
    duration: 3000
});

scroller.reveal(".watchlist", {
    origin: "right",
    viewFactor: 0.55,
    duration: 1750
});
