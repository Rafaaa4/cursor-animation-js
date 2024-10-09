document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  const trailLength = 50;
  const trails = [];

  for (let i = 0; i < trailLength; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    document.body.appendChild(trail);
    trails.push(trail);
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    let cursorX = mouseX;
    let cursorY = mouseY;

    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

    trails.forEach((trail, index) => {
      setTimeout(() => {
        trail.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        trail.classList.remove('fade-out');
        setTimeout(() => {
          trail.classList.add('fade-out');
        }, 20 * index);
      }, 20 * index);
    });

    requestAnimationFrame(animateCursor);
  }

  animateCursor();
});
