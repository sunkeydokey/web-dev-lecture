const highlightButton = document.querySelector('#highlight-links button');

function highlightLinks() {
  const links = document.querySelectorAll('#highlight-links a');

  for (const link of links) {
    link.classList.add('highlight');
  }
}

highlightButton.addEventListener('click', highlightLinks);
