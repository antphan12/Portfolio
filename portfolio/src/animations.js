// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  
  // Initial setup - hide elements that will animate in
  gsap.set([".glass-container", ".project-card"], {
    opacity: 0,
    y: 50
  });

  gsap.set(".navbar", {
    opacity: 0,
    y: -30
  });

  gsap.set([".main", ".image-wrapper"], {
    opacity: 0,
    x: -50
  });

  // Hero Section Animations
  const heroTimeline = gsap.timeline({ delay: 0.5 });

  heroTimeline
    .to(".navbar", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    })
    .to(".glass-container", {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    }, "-=0.8")
    .to(".main", {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "power2.out"
    }, "-=0.5")
    .to(".image-wrapper", {
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "power2.out"
    }, "-=0.8");

  // Projects Section Animation
  ScrollTrigger.create({
    trigger: ".projects-grid",
    start: "top 80%",
    onEnter: () => {
      gsap.to(".project-card", {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  });

  // Experience Section Animation
  ScrollTrigger.create({
    trigger: ".experience",
    start: "top 80%",
    onEnter: () => {
      gsap.fromTo(".experience-1", 
        { opacity: 0, x: -50 },
        {
          duration: 0.8,
          opacity: 1,
          x: 0,
          ease: "power2.out"
        }
      );
      
      gsap.fromTo(".experience-2", 
        { opacity: 0, x: 50 },
        {
          duration: 0.8,
          opacity: 1,
          x: 0,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }
  });

  // Hover Animations for Project Cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        scale: 1.02,
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        scale: 1,
        ease: "power2.out"
      });
    });
  });

  // Text typing animation
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Apply typing animation
  setTimeout(() => {
    const heading = document.querySelector('.main h2');
    if (heading) {
      typeWriter(heading, "Hello! 👋\nI'm Anthony", 100);
    }
  }, 2000);

  console.log("GSAP animations loaded successfully!");
});