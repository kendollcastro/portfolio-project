function init() {
  const c = document.getElementById('c');
  const ctx = c.getContext('2d');
  const amongus = document.getElementById('among-img');
  let xPosition = 0;

  function draws() {
    ctx.drawImage(amongus, xPosition, 340, 100, 100);
    if (xPosition > c.width) {
      xPosition = 0;
    }
    xPosition += 3;
    window.requestAnimationFrame(draws);
  }

  let w = 1440;
  let h = 720;
  let x = 100;
  let y = 100;

  const particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new rain);
  }

  function rain() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;

    this.vx = -3;
    this.vy = Math.random() * 10;

    this.rainh = 1;
    this.rainw = 5;
  }

  function makeItRain() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);

    for (let t = 0; t < particles.length; t++) {
      const particle = particles[t];

      ctx.beginPath();
      ctx.fillStyle = 'white';
      ctx.fillRect(particle.x, particle.y, particle.rainh, particle.rainw);

      particle.y += particle.vy;
      particle.x += particle.vx;

      // decides size based on velocity to create 3d effect
      if (particle.y > h + particle.rainh) {
        particle.y = -particle.rainh;
      }
      if (particle.x < -particle.rainh) {
        particle.x = w + particle.rainh;
      }
      if (particle.vy < 6) {
        particle.rainh = 3;
        particle.rainw = 6;
      }
      if (particle.vy < 4) {
        particle.rainh = 2;
        particle.rainw = 4;
      }
      if (particle.vy < 2) {
        particle.vy = 3.5;
      }
    }
  }

  setInterval(makeItRain, 33);
  window.requestAnimationFrame(draws);
}
init();
