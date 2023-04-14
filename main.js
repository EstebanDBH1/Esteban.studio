
let tl = gsap.timeline();

tl.from(".social ul li a", {

    y:"-100%",
    ease: "power3.easeInOut",
    duration: 1,
    stagger: 0.1
}, "-=.1")

tl.from(".p3 p span", {

    y:"-100%",
    ease: "power3.easeInOut",
    duration: 1,
    stagger: 0.1
}, "-=.1")
tl.from(".p2 p span",{ 

    y:"-100%",
    ease: "power3.easeInOut",
    duration: 1,
    stagger: 0.1
}, "-=.1")

tl.from(".p1 p span", {
 
    y:"-100%",
    ease: "power3.easeInOut",
    duration: 1,
    stagger: 0.1
}, "-=.1")