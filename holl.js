gsap.from('.anim', {
    stagger: .2,
    y: 10,
    opacity: 0,
    ease: 'Expo.easeInOut()',
    scrollTrigger: {
        trigger: '#hof',
        start: 'top 10px',
        pin: true,

    },
})