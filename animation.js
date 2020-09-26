// site for package documentation;

// https://marcbruederlin.github.io/particles.js/

var particles = Particles.init({
  selector: '.background',
  maxParticles: 1200,
  color: ['#DA0463', '#404B69', '#DBEDF3'],
  //   connectParticles: true,
  maxParticleSize: 4,
  maxSpeed: 12,

  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
  },
  // breakpoints for media/mobile;
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 200,
        color: '#48F2E3',
        connectParticles: false,
      },
    },
    {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: false,
      },
    },
    {
      breakpoint: 320,
      options: {
        maxParticles: 30,
      },
    },
  ],
});

// onload function to implement Particle.js;
window.onload = function () {
  particles.init({
    selector: '.background',
  });
};

canvas.width = document.querySelector('.canvas-container').clientWidth;
canvas.height = document.querySelector('.canvas-container').clientHeight;
