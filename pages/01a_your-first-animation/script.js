gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 1.5,
  onComplete: ()=>{
    gsap.to(".card", {
        y: -16,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
    })
  }
});
