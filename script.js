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