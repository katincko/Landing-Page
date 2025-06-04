const body = document.body;
      document.querySelectorAll('[data-tema]').forEach(botao => {
        botao.addEventListener('click', () => {
          body.classList.remove('tema-claro', 'tema-escuro', 'tema-neutro');
          body.classList.add(`tema-${botao.dataset.tema}`);
        });
});

