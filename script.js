const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

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
  
 

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('night-sky-canvas');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const stars = [];
  const numStars = 200;
  const starColor = '#ffffff';

  function Star(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.opacity = Math.random(); 
    this.opacityDirection = Math.random() > 0.5 ? 0.01 : -0.01; 
  }

  Star.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${parseInt(starColor.slice(1, 3), 16)}, ${parseInt(starColor.slice(3, 5), 16)}, ${parseInt(starColor.slice(5, 7), 16)}, ${Math.abs(this.opacity)})`;
    ctx.fill();
  };

  Star.prototype.update = function() {
    this.opacity += this.opacityDirection;
    if (this.opacity > 1 || this.opacity < 0) {
      this.opacityDirection *= -1; 
    }
  };

  function initStars() {
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 2; 
      stars.push(new Star(x, y, radius));
    }
  }

  function drawSky() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#000000'; 
    ctx.fillRect(0, 0, width, height);

    stars.forEach(star => {
      star.draw();
      star.update(); 
    });

    requestAnimationFrame(drawSky); 
  }

  function handleResize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    stars.length = 0; 
    initStars(); 
  }

  initStars();
  drawSky(); 
  window.addEventListener('resize', handleResize);
});