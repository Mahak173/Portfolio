function loadinganimation(){
    gsap.from(".home .home-content .text-1",{
        x:100,
        opacity:0,
        delay:0.5,
         duration:0.9,
         stagger:0.3
    })
    gsap.from(".home .home-content .text-2",{
        x:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
        
    })
    gsap.from(".home .home-content .text-3",{
        x:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from(".home .home-content .text-3 span",{
        x:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    }
    document.addEventListener("DOMContentLoaded",loadinganimation);
    
   