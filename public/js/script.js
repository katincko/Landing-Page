
// Animação on-scroll
document.addEventListener('DOMContentLoaded', () => {
    const animated = document.querySelectorAll('.fade-scroll');
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('animate-fadeInUp');
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });
  
    animated.forEach(el => observer.observe(el));
});

// Animação on-scroll DA IMAGEM DO PAULINHO LENDO
document.addEventListener('DOMContentLoaded', () => {
  const fotoTrocavel = document.querySelector('#PaulinhoLendo');

  if (fotoTrocavel && fotoTrocavel.dataset.altSrc) {
    const observerFoto = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          // Espera 1s antes de começar o fade
          setTimeout(() => {
            // Inicia fade-out
            fotoTrocavel.classList.add('hide');
            // Espera o fade-out terminar (0.5s), troca o src e faz fade-in
            setTimeout(() => {
              fotoTrocavel.src = fotoTrocavel.dataset.altSrc;
              fotoTrocavel.classList.remove('hide');
            }, 500);
          }, 1000); // 1 segundo de delay antes de trocar a imagem
          observerFoto.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.5 });

    observerFoto.observe(fotoTrocavel);
  }
});


// Menu Hamburguer
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// [Opcional] Fecha o menu ao clicar em qualquer link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});
