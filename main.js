"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}



let currentYear = new Date().getFullYear() + 1

let endTime = new Date(`${currentYear}/10/18 00:00:00`).getTime();
const spanDays = document.querySelector('span.d');
const spanHours = document.querySelector('span.h');
const spanMinutes = document.querySelector('span.m');
const spanSeconds = document.querySelector('span.s');
const mainParagraph = document.querySelector('.main__paragraph');
let alanBirthaday = 0





setInterval(() => {

    let nowTime = new Date().getTime(); //get a current time







    let days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));

    // 1000s (micro sec), 60m (minuts), 60s (seconds) 24h (hours) = days
    days = days < 10 && days >= 0 ? `0${days}` : days;


    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60))) % 24;
    hours = hours < 10 && hours >= 0 ? `0${hours}` : hours; // add "0" if hours < 10.

    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60))) % 60;
    minutes = minutes < 10 && minutes >= 0 ? `0${minutes}` : minutes; // add "0" if minutes < 10.

    let seconds = Math.floor((endTime / 1000 - nowTime / 1000)) % 60;
    seconds = seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds; // add "0" if seconds < 10.

    spanDays.innerHTML = days;
    spanHours.innerHTML = hours;
    spanMinutes.innerHTML = minutes;
    spanSeconds.innerHTML = seconds;

    alanBirthaday = (currentYear - 2019)
    if (alanBirthaday == 3) {
        mainParagraph.innerHTML = `Alan's ${alanBirthaday}rd  birthday will be 😍`;
    } else {
        mainParagraph.innerHTML = `Alan's ${alanBirthaday}th  birthday will be 😍`;
    }


}, 1000)