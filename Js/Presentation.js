  window.addEventListener('load', () => {
    const card = document.querySelector('.card');
    setTimeout(() => {
      if (card) {
        card.classList.add('fade-out');

        setTimeout(() => {
          card.style.display = 'none';
        }, 2000); 
      }
    }, 4000);
  });

