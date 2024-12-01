// adding locomogsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"), // Replace with your scroll container
    smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed",
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
Shery.textAnimate(".headings h1", {
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1
  });
// animating motive section 

gsap.from(".motive h3",{
    x:-30,
    opacity:0,
    duration:2,
    ease:Power2,
    scrollTrigger:{
        trigger:".motive h3",
        scroller:".main",
        start:"top 85%"
    }
})
gsap.from(".motive p",{
    x:30,
    opacity:0,
    duration:2,
    ease:Power2,
    scrollTrigger:{
        trigger:".motive h3",
        scroller:".main",
        start:"top 85%"
    }
})

// animating the health section 

gsap.from(".health>h3",{
    x:-30,
    opacity:0,
    duration:2,
    ease:Power2,
    scrollTrigger:{
        trigger:".health>h3",
        scroller:".main",
        start:"top 85%"
    }
})

gsap.from(".sanim",{
    y:30,
    opacity:0,
    duration:2.5,
    ease:Power2.easeout,    
    scrollTrigger:{
        trigger:".health>h3",
        scroller:".main",
        start:"top 85%"
    }


})

// animating footer video 

let futurebtn = document.getElementById("futurebtn")
let futurevid = document.getElementById("futurevid")

function videoanimation () {
    futurebtn.addEventListener("mouseenter",()=> {
        gsap.to(futurevid,{
            opacity:1
        })
    })
    futurebtn.addEventListener("mouseleave",()=> {
        gsap.to(futurevid,{
            opacity:0
        }) 
    })
}
videoanimation()

//to recalculate scroll positions
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.refresh();

