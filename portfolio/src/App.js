document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              if (entry.target.classList.contains('container') || entry.target.classList.contains('about-me')) {
                  entry.target.classList.add('slide-in-left');
              } else if (entry.target.classList.contains('glass-container') || entry.target.classList.contains('main') || entry.target.classList.contains('who-am-i-content') || entry.target.classList.contains('nav-social-media')) {
                  entry.target.classList.add('slide-in-right');
              }
          } else {
              if (entry.target.classList.contains('container') || entry.target.classList.contains('about-me')) {
                  entry.target.classList.remove('slide-in-left');
              } else if (entry.target.classList.contains('glass-container') || entry.target.classList.contains('main') || entry.target.classList.contains('who-am-i-content') || entry.target.classList.contains('nav-social-media')) {
                  entry.target.classList.remove('slide-in-right');
              }
          }
      });
  }, observerOptions);

  document.querySelectorAll('.container, .glass-container, .main, .who-am-i-content, .nav-social-media, .about-me').forEach(element => {
      observer.observe(element);
  });
});