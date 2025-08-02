// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initial setup - hide elements that will animate in
gsap.set([".glass-container", ".project-card", ".experience-1", ".experience-2"], {
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

gsap.set([".who-am-i", ".cyclone-img", ".portrait", ".about-me"], {
  opacity: 0,
  y: 30
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
  }, "-=0.8")
  .to(".main button", {
    duration: 0.8,
    scale: 1.05,
    ease: "elastic.out(1, 0.3)",
    yoyo: true,
    repeat: 1
  }, "-=0.3");

// Projects Section Animation
ScrollTrigger.create({
  trigger: ".projects-grid",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".projects-grid .project-card", {
      duration: 0.8,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "power2.out"
    });
  }
});

// Additional Projects Animation
ScrollTrigger.create({
  trigger: ".project-4",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo(".project-4", 
      {
        opacity: 0,
        scale: 0.8,
        rotation: -5
      },
      {
        duration: 1,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: "back.out(1.7)"
      }
    );
  }
});

// Experience Section Animation
ScrollTrigger.create({
  trigger: ".experience",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".experience-1", {
      duration: 0.8,
      opacity: 1,
      y: 0,
      x: -20,
      ease: "power2.out"
    });
    
    gsap.to(".experience-2", {
      duration: 0.8,
      opacity: 1,
      y: 0,
      x: 20,
      delay: 0.3,
      ease: "power2.out"
    });
  }
});

// About Me Section Animation
ScrollTrigger.create({
  trigger: "#aboutMeContainer",
  start: "top 80%",
  onEnter: () => {
    const aboutTimeline = gsap.timeline();
    
    aboutTimeline
      .fromTo(".who-am-i", 
        { opacity: 0, x: -50 },
        { duration: 0.8, opacity: 1, x: 0, ease: "power2.out" }
      )
      .fromTo(".cyclone-img", 
        { opacity: 0, scale: 0.5, rotation: 180 },
        { duration: 1, opacity: 1, scale: 1, rotation: 0, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(".portrait", 
        { opacity: 0, y: 30 },
        { duration: 0.8, opacity: 1, y: 0, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(".about-me", 
        { opacity: 0, x: 50 },
        { duration: 0.8, opacity: 1, x: 0, ease: "power2.out" },
        "-=0.6"
      );
  }
});

// Hover Animations for Project Cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        scale: 1.02,
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        ease: "power2.out"
      });
      
      const img = card.querySelector('img');
      if (img) {
        gsap.to(img, {
          duration: 0.3,
          scale: 1.1,
          ease: "power2.out"
        });
      }
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        scale: 1,
        boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
        ease: "power2.out"
      });
      
      const img = card.querySelector('img');
      if (img) {
        gsap.to(img, {
          duration: 0.3,
          scale: 1,
          ease: "power2.out"
        });
      }
    });
  });
});

// Navbar fade on scroll
ScrollTrigger.create({
  start: "top -100",
  end: 99999,
  toggleClass: {className: "navbar-scrolled", targets: ".navbar"}
});

// Text typing animation for the main heading
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

// Apply typing animation after hero loads
heroTimeline.call(() => {
  const heading = document.querySelector('.main h2');
  if (heading) {
    const originalText = heading.innerHTML;
    typeWriter(heading, "Hello! 👋,\nI'm Anthony", 100);
  }
});

// Smooth scroll for buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: target,
          ease: "power2.inOut"
        });
      }
    });
  });
});

// Parallax effect for background elements
gsap.to("body", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: "body",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});

// Loading animation
window.addEventListener('load', () => {
  gsap.from("body", {
    duration: 1,
    opacity: 0,
    ease: "power2.out"
  });
});

// Special animations for highlighted text
ScrollTrigger.create({
  trigger: "#isu",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo("#isu", 
      { backgroundPosition: "0% 50%" },
      { 
        duration: 2,
        backgroundPosition: "200% 50%",
        ease: "power2.out"
      }
    );
  }
});

ScrollTrigger.create({
  trigger: "#opportunities",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo("#opportunities", 
      { backgroundPosition: "0% 50%" },
      { 
        duration: 2,
        backgroundPosition: "200% 50%",
        ease: "power2.out"
      }
    );
  }
});

ScrollTrigger.create({
  trigger: "#name",
  start: "top 80%",
  onEnter: () => {
    gsap.fromTo("#name", 
      { backgroundPosition: "0% 50%" },
      { 
        duration: 2,
        backgroundPosition: "200% 50%",
        ease: "power2.out"
      }
    );
  }
});