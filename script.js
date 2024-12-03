


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
// animating motive section 

gsap.from(".motive h3",{
    x:-30,
    opacity:0,
    duration:2,
    ease:Expo,
    scrollTrigger:{
        trigger:".motive h3",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from(".motive p",{
    x:30,
    opacity:0,
    duration:2,
    ease:Expo,
    scrollTrigger:{
        trigger:".motive h3",
        scroller:"body",
        start:"top 80%"
    }
})

// animating the health section 

gsap.from(".health>h3",{
    x:-30,
    opacity:0,
    duration:2,
    ease:Power1,
    scrollTrigger:{
        trigger:".health>h3",
        scroller:"body",
        start:"top 80%"
    }
})

gsap.from(".sanim",{
    y:40,
    opacity:0,
    ease:Expo, 
    duration:2,   
    scrollTrigger:{
        trigger:".health>h3",
        scroller:"body",
        start:"top 80%"
    }


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



