document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.glass-window').forEach((windowEl) => {
  const chrome = windowEl.querySelector('.window-chrome');
  if (!chrome || window.innerWidth < 760) return;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;
  let dragging = false;

  chrome.addEventListener('pointerdown', (event) => {
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    const rect = windowEl.getBoundingClientRect();
    originX = rect.left;
    originY = rect.top;
    windowEl.style.left = `${originX}px`;
    windowEl.style.top = `${originY}px`;
    windowEl.style.right = 'auto';
    windowEl.style.bottom = 'auto';
    windowEl.setPointerCapture(event.pointerId);
  });

  chrome.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    windowEl.style.left = `${originX + event.clientX - startX}px`;
    windowEl.style.top = `${originY + event.clientY - startY}px`;
  });

  chrome.addEventListener('pointerup', () => {
    dragging = false;
  });
});
