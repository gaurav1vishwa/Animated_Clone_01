
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,

// });

function animatedvidoe(){
    let videocontainer=document.querySelector("#video-container");
    let playbtn = document.querySelector("#play");

    videocontainer.addEventListener("mouseenter", function(){
    // useing the library gsap.
    gsap.to(playbtn,{
        scale:1,
        opacity:1,
    })
    })

      videocontainer.addEventListener("mouseleave", function(){
    // useing the library gsap.
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
    })
    })

    videocontainer.addEventListener("mousemove",function(e){
        gsap.to(playbtn,{
            left:e.x-78,
            top:e.y-80,

        })
    })
}
animatedvidoe()

function loadingAnimation(){
gsap.from("#page1 h1",{
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3,
})

gsap.from("#page1 #video-container",{
   scale:0.9,
    opacity:0,
    delay:1.3,
    duration:0.4,
  
})
}
loadingAnimation()

function mousemoveinProduct(){
document.addEventListener("mousemove",function(e){
    gsap.to("#cursormove",{
        left:e.x,
        top:e.y,
    })
})

document.querySelectorAll(".child").forEach((child) => {
  child.addEventListener("mouseenter", () => {
    gsap.to("#cursormove", {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
  child.addEventListener("mouseleave", () => {
    gsap.to("#cursormove", {
      scale: 0,
      duration: 0.3,
      ease: "power2.in"
    });
  });
});
}
mousemoveinProduct();

function LocomotiveAnimations(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
LocomotiveAnimations();

function navbarAnimation() {
  gsap.to(".nav1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to(".nav2 .link", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}
navbarAnimation()

gsap.from("#page4 .sepration", {
  scaleX: 0,
  duration: 1
});




