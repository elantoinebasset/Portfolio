  window.addEventListener('load', () => {
    const card = document.querySelector('.card');
      const loader = document.getElementById('loader-wrapper');
  const content = document.getElementById('main-content');
    setTimeout(() => {
      if (card) {
        card.classList.add('fade-out');

        setTimeout(() => {
          card.style.display = 'none';
        }, 2000); 
      }
    }, 4000);
  });

