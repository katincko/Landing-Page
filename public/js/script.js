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
          }, 2000); // 1 segundo de delay antes de trocar a imagem
          observerFoto.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.5 });

    observerFoto.observe(fotoTrocavel);
  }
});


// ANIMACAO DE CADA CARD AO SER TOCADO!
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.interactive-card');

  cards.forEach(card => {
    // Adiciona o listener de clique para o card inteiro
    card.addEventListener('click', (event) => {
      // Verifica se o clique foi diretamente no link do WhatsApp. Se for, não faz nada.
      if (event.target.closest('a')) {
        return;
      }

      // Fecha qualquer outro card que esteja aberto
      cards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('is-active');
        }
      });
      
      // Abre ou fecha o card clicado
      card.classList.toggle('is-active');
    });

    // --- CÓDIGO NOVO ADICIONADO ---
    // Encontra o link do WhatsApp dentro do card
    const whatsappLink = card.querySelector('.card-back a');

    if (whatsappLink) {
      // Adiciona um listener de clique APENAS para o link
      whatsappLink.addEventListener('click', (event) => {
        // Impede que o clique no link se propague para o card-pai
        event.stopPropagation();
      });
    }
  });
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

//Fecha o menu ao clicar em qualquer link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});


//Seçao de contato
document.getElementById('form-contato').addEventListener('submit', function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome-contato').value.trim();
      const mensagem = document.getElementById('mensagem-contato').value.trim();
      const texto = `Olá, meu nome é ${nome} e encontrei seu contato pelo site. Gostaria de conversar sobre: ${mensagem}. Fico no aguardo, obrigado(a)!`;
      const url = `https://wa.me/5524993027203?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank');
    });