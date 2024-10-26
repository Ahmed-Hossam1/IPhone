let header = document.querySelector("header");
let landing_page = document.getElementById("landing-page");
let landing_phone = document.getElementById("landing_phone");

function img(phon) {
  landing_phone.src = phon;
}

function cl(color) {
  landing_page.style.backgroundColor = color;
  header.style.backgroundColor = color;
}

gsap.from("#logo", { opacity: 0, duration: 1, delay: 1, y: 20 });
gsap.from(".links .nav-items", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  x: -30,
  stagger: 0.2,
});

gsap.from(".text1", { opacity: 0, duration: 1.5, delay: 2, y: 20 });
gsap.from(".text2", { opacity: 0, duration: 2, delay: 2.5, x: -30 });
gsap.from("#landing_phone", { opacity: 0, duration: 2, delay: 2, x: 50 });
gsap.from(".phone", { opacity: 0, duration: 2, delay: 2, y: 30 });
