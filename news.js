gsap.registerPlugin(ScrollTrigger);
let horizontalItem = $(".news_item");
let horizontalSection = $(".section_news");
let moveDistance;
function calculateScroll() {
  // Desktop
  let itemsInView = 1.4;
  let scrollSpeed = 1.8;

  if (window.matchMedia("(max-width: 479px)").matches) {
    // Mobile Portrait
    itemsInView = 1;
    scrollSpeed = 1.2;
  } else if (window.matchMedia("(max-width: 767px)").matches) {
    // Mobile Landscape
    itemsInView = 1;
    scrollSpeed = 1.2;
  } else if (window.matchMedia("(max-width: 991px)").matches) {
    // Tablet
    itemsInView = 2;
    scrollSpeed = 1.2;
  }
  let moveAmount = horizontalItem.length - itemsInView;
  let minHeight =
    scrollSpeed * horizontalItem.outerWidth() * horizontalItem.length;
  if (moveAmount <= 0) {
    moveAmount = 0;
    minHeight = 0;
    // horizontalSection.css('height', '100vh');
  } else {
    horizontalSection.css("height", "200vh");
  }
  moveDistance = horizontalItem.outerWidth() * moveAmount;
  horizontalSection.css("min-height", minHeight + "px");
}
calculateScroll();
window.onresize = function () {
  calculateScroll();
};




let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-trigger",
    start: "top top",
    end: "bottom top",
    scrub: true,            // smooth
    // pin: true,            // optional, if need fix section
    // markers: true         // checking
  }
});

tl.to(".section_news .list", {
  x: () => -moveDistance,
  ease: "none"              
});