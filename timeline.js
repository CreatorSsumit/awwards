gsap.utils.toArray('.row3').forEach(element => {
    ScrollTrigger.create({
        trigger: element,
        start: 'top 70px',
        pin: true,
        end: "bottom 30%",
    })

});