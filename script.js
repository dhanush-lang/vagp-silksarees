
    // Typing Animation
    const text = "Welcome to VAGP Silk Sarees. Discover authentic Kanchipuram & Arni handloom silk sarees with pure 3 gram gold zari.";
    const textContainer = document.getElementById("animated-text");
    const cursor = document.getElementById("cursor");
    let i = 0;

    function typeLetter() {
      if (i < text.length) {
        textContainer.textContent += text.charAt(i);
        i++;
        setTimeout(typeLetter, 50);
      } else {
        cursor.style.display = "none";
      }
    }

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });

    // Initialize animations
    window.addEventListener('load', () => {
      setTimeout(typeLetter, 1000);
      
      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      });
    });
  