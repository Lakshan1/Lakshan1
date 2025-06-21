// Wait for the document to be fully loaded before running animations
document.addEventListener('DOMContentLoaded', function() {

    // Register the ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // --- HERO SECTION ANIMATION ---
    // Animate the header elements
    gsap.from('.anim-header', {
        y: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    });

    // Animate the main hero text content
    gsap.from('.anim-hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2, // Stagger the animation of multiple elements
        delay: 0.3, // Start after the header animation
    });

    // Animate the hero image
    gsap.from('.anim-hero-image', {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
    });


    // --- SCROLL-TRIGGERED ANIMATIONS ---

    // Animate elements with the class 'anim-fade-up' when they enter the viewport
    gsap.utils.toArray('.anim-fade-up').forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%', // Animation starts when the top of the element is 85% from the top of the viewport
                toggleActions: 'play none none none', // Play the animation once
            }
        });
    });

    // Animate the service cards with a stagger effect
    gsap.from('.anim-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#services', // Trigger animation when the services section is in view
            start: 'top 80%',
        }
    });

    // Animate the statistics counter
    const statNumbers = gsap.utils.toArray('.stat-number');
    statNumbers.forEach(element => {
        const target = +element.dataset.target; // Get target number from data attribute
        const stat = { val: 0 }; // Start the count from 0

        gsap.to(stat, {
            val: target,
            duration: 2,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none none',
            },
            onUpdate: () => {
                // Update the text content of the element with the rounded number
                element.textContent = Math.round(stat.val);
            }
        });
    });

});
