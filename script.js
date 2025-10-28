
function openBox(headerElement) {
  const clickedBox = headerElement.parentElement;

  // If already open, do nothing
  if (clickedBox.classList.contains('open')) return;

  // Close all other boxes
  document.querySelectorAll('.box').forEach(box => {
    box.classList.remove('open');
  });

  // Open the clicked box
  clickedBox.classList.add('open');

  // Scroll smoothly to the opened box
  setTimeout(() => {
    clickedBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}
