/****************LECTURE 1******** */
// gsap.from('.box',{
//     x:700,
//     duration: 1,
//     backgroundColor: "green",
//     delay: 1
// })

// gsap.to('.box',{
//     x:700,
//     duration: 1,
//     backgroundColor: "green",
//     delay: 1
// })

/****************LECTURE 2************* */
// var tl = gsap.timeline()

// tl.to('.box1',{
//     x:1200,
//     duration: 1,
//     delay: 1
// })
// tl.to('.box2',{
//     x:1200,
//     duration: 1,
// })
// tl.to('.box3',{
//     x:1200,
//     duration: 1,
// })
var tl = gsap.timeline()
tl.from('.nav h3',{
    duration:0.6,
    y:-90,
    delay:0.3,
    stagger:0.2,
    opacity:0
})
tl.from('.center h1',{
    duration:0.3,
    x:-100,
    stagger:0.1,
    opacity:0,
    color: "black"
})

gsap.from('.img',{
    duration:0.4,
    rotate:30,
    x:100,
    stagger:0.2,
    opacity:0,
    delay:1.4
})
