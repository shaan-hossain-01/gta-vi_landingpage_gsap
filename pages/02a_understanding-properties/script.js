import gsap from "gsap";

gsap.to('.box', {
    opacity: 1,
    rotation: 360,
    duration: 2,
    background: "#ff6f61",
    scale: 1.5,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 2,
    // paused: true,
    stagger: 1, 
})