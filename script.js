function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(".circle").style.transform = `translate(${dets.clientX +5}px ,${dets.clientY +5}px)`
    })
}
circleMouseFollower()  // This Method is Perfect

function circleMouseFollowerSecondMethod(){
    var crsr = document.querySelector(".circle")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +20 + "px";
    crsr.style.top = dets.y + 20 + "px";
});
}
// circleMouseFollowerSecondMethod()  //This Method Not Working Properly


function page1Animation(){
    var main = document.querySelector(".main")



var tl = gsap.timeline({

    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:2
    }
})
tl.to(".nav",{
    y:-50,

},"anim")


var tl = gsap.timeline({

    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27%",
        end:"top 0",
        scrub:2
    }
})
tl.to(".page1 h1",{
    x:-83,

},"anim")
tl.to(".page1 h2",{
    x:80,

},"anim")

tl.to(".page1 video",{
    width:"90%",
},"anim")



var tl2 = gsap.timeline({

    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top -50%",
        end:"top 50%",
        scrub:2
    }
})
tl2.to(".main",{
    backgroundColor:"#fff",
    
})
}
page1Animation()

function page4Animation(){
    var tl3 = gsap.timeline({

        scrollTrigger:{
            trigger:".page1 h1",
            scroller:".main",
            // markers:true,
            start:"top -450%",
            end:"top 460%",
            scrub:2
        }
    })
    tl3.to(".main",{
        backgroundColor:"#0F0D0D",
        
    })
    
    tl3.to(".page3-part2-left h2",{
        color:"#fff",
    })
}
page4Animation()


function navHover(){
    var h4 = document.querySelectorAll(".nav h5")
var purple = document.querySelector(".purple")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"
        purple.style.opacity = "1"
        
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"
        purple.style.opacity = "0"
    })
})
}
navHover()

function page1VideoSoundon(){
    var video = document.querySelector(".page1 video")
var circle = document.querySelector(".circle")
video.addEventListener("mouseenter",function(){
    circle.style.width = "100px"
    circle.style.height = "30px"
    circle.style.borderRadius ="10px"
    circle.innerHTML = "Sound on"
    circle.style.fontSize = "16px"
    circle.style.color = "white"
    circle.style.textAlign = "center"
    circle.style.mixBlendMode = "normal";
    circle.style.lineHeight = "30px";
    circle.style.backgroundColor ="#EDBFFF"
})

video.addEventListener("mouseleave",function(){
    circle.style.width = "20px"
    circle.style.height = "20px"
    circle.style.borderRadius ="50%"
    circle.innerHTML = ""
    circle.style.mixBlendMode = "difference";
})
}
page1VideoSoundon()


function page5Animation(){
    var boxes = document.querySelectorAll(".box")
var circle = document.querySelector(".circle")
boxes.forEach(function(elem){    //elem mean phalai bar loop chal raha hai to 1 div elem hai second bar loop chal raha hai to 2 div elem hai & soo on
    elem.addEventListener("mouseenter",function(){
        // elem.style.backgroundColor = "red"
        var att = elem.getAttribute("data-image")
        circle.style.width = "400px"
        circle.style.height = "300px"
        circle.style.borderRadius = "0"
        circle.style.backgroundImage = `url(${att})`
        circle.style.transition = "none"
        circle.style.transition = "background-image ease 1s";
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        circle.style.width = "20px"
        circle.style.height = "20px"
        circle.style.borderRadius = "50%"
        circle.style.backgroundImage = `none`
        circle.style.transition = "all cubic-bezier(0.19, 1, 0.22, 1) 1s"
    })

})
}
page5Animation()


