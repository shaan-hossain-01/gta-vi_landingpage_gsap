import gsap from "gsap";
import { ssrModuleExportsKey } from "vite/module-runner";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    button.classList.add("show");
    if (!isFloating) {
      gsap.to(button, {
        y: -10,
        duration: 0.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      isFloating = true;
    }
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.2,
    duration: 0.3,
  });
});
button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.3,
  });
});
button.addEventListener("click", () => {
  console.log("Scroll to top clicked");
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
