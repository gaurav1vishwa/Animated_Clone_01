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

