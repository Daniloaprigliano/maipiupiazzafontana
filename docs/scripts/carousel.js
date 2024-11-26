const carousel = document.getElementById('carousel');

carousel.onclick = event => {
  let target = event.target.closest('.item');
  
  if (target) {
    carousel.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth'
    });
  }
};