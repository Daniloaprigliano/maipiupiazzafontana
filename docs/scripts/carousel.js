const carousel = document.getElementById('carousel');

if (carousel) {
  carousel.onclick = event => {
    let target = event.target.closest('.item');
    
    if (target) {
      carousel.scrollTo({
        left: target.offsetLeft,
        behavior: 'smooth'
      });
    }
  };
} else {
  console.error('Elemento con id "carousel" non trovato.');
}