document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('open');
    });

    const navLinkItems = navLinks.querySelectorAll('a');
    navLinkItems.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  }

  if (window.anime) {
    anime({
      targets: '.profile-pic',
      opacity: [0, 1],
      scale: [0.8, 1],
      easing: 'easeOutQuad',
      duration: 1250
    });

    anime.timeline({ loop: false })
      .add({
        targets: 'h1',
        opacity: [0, 1],
        translateY: [0, 5],
        easing: 'easeOutExpo',
        duration: 1000
      })
      .add({
        targets: 'h2',
        opacity: [0, 1],
        translateY: [20, 0],
        easing: 'easeOutExpo',
        duration: 750,
        offset: '-=500' // Starts this animation 500ms before the previous one ends
      });

    anime({
      targets: '.tech-stack',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 1250,
      delay: anime.stagger(200) // Stagger the animation for each list item
    });

    anime({
      targets: '.tech-icon-card',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutExpo',
      duration: 1250,
      delay: anime.stagger(200) // Stagger the animation for each list item
    });
  }

  const vantaBg = document.getElementById('vanta-bg');
  if (vantaBg) {
    vantaBg.style.backgroundColor = '#000000';
    vantaBg.style.width = '100vw';
    vantaBg.style.height = '100vh';
    vantaBg.style.position = 'fixed';
    vantaBg.style.top = '0';
    vantaBg.style.left = '0';
    vantaBg.style.zIndex = '-1';
  }
  if (window.VANTA && window.VANTA.NET) {
    VANTA.NET({
      el: "#vanta-bg",
      color: 0xffffff,
      backgroundColor: 0x000000,
      points: 8.0,
      maxDistance: 20.0,
      spacing: 18.0,
      showDots: false,
      mouseControls: true,
      touchControls: true,
      gyroControls: false
    });
  }
});
  
 
