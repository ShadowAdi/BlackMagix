gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});
function locoGsap() {
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function textHover() {
  const h1Text = document.querySelector(".hoverable #span1");
  const h2Text = document.querySelector(".hoverable #span2");
  const h3Text = document.querySelector(".hoverable1 #span3");
  const h4Text = document.querySelector(".hoverable1 #span4");
  const h5Text = document.querySelector(".hoverable2 #span5");
  const h6Text = document.querySelector(".hoverable2 #span6");

  document.querySelector(".hoverable").addEventListener("mousemove", () => {
    h1Text.style.transform = "translateY(-24vh)";
    h1Text.style.opacity = "0";
    h2Text.style.transform = "translateY(-28vh)";
    h2Text.style.opacity = "1";
  });

  document.querySelector(".hoverable").addEventListener("mouseleave", () => {
    h1Text.style.transform = "translateY(0)";
    h1Text.style.opacity = "1";
    h2Text.style.transform = "translateY(0)";
    h2Text.style.opacity = "0";
  });

  document.querySelector(".hoverable1").addEventListener("mousemove", () => {
    h3Text.style.transform = "translateY(-24vh)";
    h3Text.style.opacity = "0";
    h4Text.style.transform = "translateY(-28vh)";
    h4Text.style.opacity = "1";
  });

  document.querySelector(".hoverable1").addEventListener("mouseleave", () => {
    h4Text.style.transform = "translateY(0)";
    h3Text.style.opacity = "1";
    h3Text.style.transform = "translateY(0)";
    h4Text.style.opacity = "0";
  });

  document.querySelector(".hoverable2").addEventListener("mousemove", () => {
    h5Text.style.transform = "translateY(-24vh)";
    h5Text.style.opacity = "0";
    h6Text.style.transform = "translateY(-28vh)";
    h6Text.style.opacity = "1";
  });

  document.querySelector(".hoverable2").addEventListener("mouseleave", () => {
    h6Text.style.transform = "translateY(0)";
    h6Text.style.opacity = "0";
    h5Text.style.transform = "translateY(0)";
    h5Text.style.opacity = "1";
  });
}

// function imageAnimation() {
//   gsap.from(".images img", {
//     y: 300,
//     duration: 1,
//     ease: "none",
//     scrollTrigger:{
//         trigger:".page-2",
//         scrub:true,
//         markers:true,
//         start:"-30% start"
//     }

//   });
// }

function lineWidth() {
  const line = document.querySelector(".line");
  gsap.to(".line", {
    duration: 0.5,
    width: "25vw",
    scrollTrigger: {
      trigger: ".serviceHeadre",
      start: "-20% 60%",
      scroller: "main",
    },
  });
}

function videoRemove() {
  var allImages = document.querySelectorAll(".imagesService");

  allImages.forEach((imageService) => {
    var img = imageService.querySelector(".imgHolder img");

    imageService.addEventListener("mouseenter", () => {
      gsap.to(img, {
        top: "-100%",
        duration: 1,
      });
    });

    imageService.addEventListener("mouseleave", () => {
      gsap.to(img, {
        top: "0",
        duration: 1,
      });
    });
  });
}

function ImageHandling() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-3 .ServiceSection",
      markers: true,
      scroller: "main",
      start: "-10% start",
    },
  });
  tl.to(
    ".lineService",
    {
      width: "100%",
      duration: 0.6,
    },
    "anim"
  )
    .from(
      ".textHolder h2",
      {
        y: "70px",
        duration: 0.6,
        opacity: 0,
      },
      "anim"
    )
    .from(".textImageService p", {
      opacity: 0,
      duration: 0.5,
    });
}

document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".hoverable #span1,.hoverable1 #span3,.hoverable2 #span5", {
    duration: 0.5,
    y: 0,
    opacity: 1,
    ease: "none",
  });

  locoGsap();
  textHover();
  lineWidth();
  videoRemove();
  ImageHandling();
});
