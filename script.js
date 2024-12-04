const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});

// animating nav section
gsap.from(".nlink",{
    stagger: .2,
    y:10,
    duration:2,
    ease:Power2,
    opacity:0,
})

// animating hero section 

gsap.from(".anim",{
    y:50,
    stagger:.3,
    opacity:0,
    ease:Expo,
    duration:2,
})

// animating footer video 

let futurebtn = document.getElementById("futurebtn")
let futurevid = document.getElementById("futurevid")

function videoanimation () {
    futurebtn.addEventListener("mouseenter",function() {
        gsap.to(futurevid,{
            opacity:1
        })
    })
    futurebtn.addEventListener("mouseleave",function() {
        gsap.to(futurevid,{
            opacity:0
        }) 
    })
}
videoanimation()



