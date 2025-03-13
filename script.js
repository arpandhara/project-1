var timeOut; 

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav" , {
        y: -10 ,
        opacity : 0 ,
        ease : Expo.easeInOut ,
        duration : 1.5 
    }).to(".boundingelem" , {
        y: 0 ,
        ease : Expo.easeInOut ,
        duration : 2,
        delay: -1 ,
        stagger: .2
    }).from("#herofooter" , {
        y : -10,
        opacity : 0 ,
        duration : 1.5,
        delay: -1,
        ease : Expo.easeInOut
    })
}

function circleMouseFollower(xscale , yscale){
    window.addEventListener("mousemove" , function(details){
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px , ${details.clientY}px) scale(${xscale} , ${yscale})`;
        
    })
}

function circleChaptaKaro(){
    var xscale = 1 ;
    var yscale = 1 ;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove" , function(details){
        clearTimeout(timeOut);
        xscale = gsap.utils.clamp(.8,1.2,details.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,details.clientY - yprev);
        xprev = details.clientX;
        yprex = details.clientY;

        circleMouseFollower(xscale , yscale);
        timeOut = setTimeout(() => {
            document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px , ${details.clientY}px) scale(1 , 1)`;
        }, 100);
    })
}


circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

// var newElem = document.querySelector("#second")
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrotate = 0;
    elem.addEventListener("mouseleave", function (){
        gsap.to(elem.querySelector(".elem img"),{
            opacity : 0,
            ease : Power1 ,
        })
    })
    elem.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX);
        // var diff = dets.clientX - elem.getBoundingClientRect().top;
        // console.log(diff);
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector(".elem img") , {
            opacity : 1,
            ease : Power3,
            left : dets.clientX,
            rotate : gsap.utils.clamp(-20,20,diffrotate),
            // top : diff
        })
        
        // elem.querySelector(".elem img").style.opacity = 1;
    });
  });