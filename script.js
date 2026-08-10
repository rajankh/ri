const i = document.querySelector(".i");
const heart = document.querySelector(".heart");
const love = document.querySelector(".love");
const you = document.querySelector(".you");
const u = document.querySelector(".u");


function hideAll() {
    i.style.opacity = "0";
    heart.style.opacity = "0";
    love.style.opacity = "0";
    you.style.opacity = "0";
    u.style.opacity = "0";
}


function showIHeartYou() {

    hideAll();

    i.style.opacity = "1";
    heart.style.opacity = "1";
    you.style.opacity = "1";
}


function showIHeartU() {

    hideAll();

    i.style.opacity = "1";
    heart.style.opacity = "1";
    u.style.opacity = "1";
}


function showILoveYou() {

    hideAll();

    i.style.opacity = "1";
    love.style.opacity = "1";
    you.style.opacity = "1";
}


function showHeart() {

    hideAll();

    heart.style.opacity = "1";
}


/*
    Animation sequence
*/

const animationSequence = [

    {
        function: showIHeartYou,
        time: 900
    },

    {
        function: showIHeartU,
        time: 700
    },

    {
        function: showILoveYou,
        time: 1100
    },

    {
        function: showIHeartYou,
        time: 900
    },

    {
        function: showIHeartU,
        time: 700
    },

    {
        function: showHeart,
        time: 700
    },

    {
        function: showILoveYou,
        time: 1100
    },

    {
        function: showIHeartYou,
        time: 900
    },

    {
        function: showIHeartU,
        time: 700
    },

    {
        function: showHeart,
        time: 700
    }

];


let current = 0;


function playAnimation() {

    const step = animationSequence[current];

    step.function();

    current++;

    if (current >= animationSequence.length) {
        current = 0;
    }

    setTimeout(playAnimation, step.time);
}


playAnimation();
