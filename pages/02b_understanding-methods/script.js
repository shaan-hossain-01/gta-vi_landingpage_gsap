const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const repeat = document.querySelector(".repeat");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

import gsap from "gsap";

const animation = gsap.to(".box", {
    opacity: 1,
    rotation: 360,
    duration: 2,
    borderRadius: "50%",
    scale: 1.25,
})

play.addEventListener("click", () => {
    animation.play();
});
pause.addEventListener("click", () => {
    animation.pause();
});
resume.addEventListener("click", () => {
    animation.resume();
});
restart.addEventListener("click", () => {
    animation.restart();
});
reverse.addEventListener("click", () => {
    animation.reverse();
});
kill.addEventListener("click", () => {
    animation.kill();
});
repeat.addEventListener("click", () => {
    animation.repeat(2);
});
yoyo.addEventListener("click", () => {
    animation.yoyo(true);
});
