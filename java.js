document.addEventListener("DOMContentLoaded", () => {

  // Bloquear scroll na tela inicial
  document.body.style.overflow = 'hidden';

  // Botão principal - libera scroll
  document.getElementById('ctaButton').addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.overflow = 'auto';
    document.getElementById('mainContainer').classList.add('hidden');
    document.getElementById('videoPage').classList.add('visible');
  });

  /* ========= VÍDEO SOBRE (Quem sou eu) ========= */
  const aboutVideo = document.getElementById("aboutVideo");
  const aboutOverlay = document.getElementById("playOverlay");

  if (aboutVideo && aboutOverlay) {
    // Clique no overlay inicia o vídeo
    aboutOverlay.addEventListener("click", (e) => {
      e.stopPropagation();
      aboutVideo.play();
    });

    // Esconde overlay quando tocar
    aboutVideo.addEventListener("play", () => {
      aboutOverlay.classList.add("hidden");
    });

    // Mostra overlay quando pausar
    aboutVideo.addEventListener("pause", () => {
      aboutOverlay.classList.remove("hidden");
    });

    // Mostra overlay quando terminar
    aboutVideo.addEventListener("ended", () => {
      aboutOverlay.classList.remove("hidden");
    });
  }

  /* ========= VÍDEO PRINCIPAL ========= */
  const mainVideo = document.getElementById("mainVideo");
  const mainOverlay = document.getElementById("mainPlayOverlay");

  if (mainVideo && mainOverlay) {
    // Clique no overlay inicia o vídeo
    mainOverlay.addEventListener("click", (e) => {
      e.stopPropagation();
      mainVideo.play();
    });

    // Esconde overlay quando tocar
    mainVideo.addEventListener("play", () => {
      mainOverlay.classList.add("hidden");
    });

    // Mostra overlay quando pausar
    mainVideo.addEventListener("pause", () => {
      mainOverlay.classList.remove("hidden");
    });

    // Mostra overlay quando terminar
    mainVideo.addEventListener("ended", () => {
      mainOverlay.classList.remove("hidden");
    });
  }

  // Impedir dois vídeos tocando ao mesmo tempo
  if (aboutVideo && mainVideo) {
    aboutVideo.addEventListener("play", () => {
      mainVideo.pause();
    });

    mainVideo.addEventListener("play", () => {
      aboutVideo.pause();
    });
  }

});

// Função para abrir tela de planos
function abrirPlanos() {
  const redirectScreen = document.getElementById('redirectScreen');
  if (redirectScreen) {
    redirectScreen.classList.add('visible');
  }
}

// Função para fechar tela de planos
function fecharPlanos() {
  const redirectScreen = document.getElementById('redirectScreen');
  if (redirectScreen) {
    redirectScreen.classList.remove('visible');
  }
}

function contatarWhatsAppPlano(duracao, valor) {
  const numeroWhatsApp = '5534998882646';
  const mensagem = `Olá! Gostaria de adquirir o Plano de ${duracao} no valor de R$ ${valor}.`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

/* ============================================
   OTIMIZAÇÕES DE PERFORMANCE
   ============================================ */

// 1. Cache de elementos DOM (evita buscar múltiplas vezes)
const DOMCache = {
  mainContainer: document.getElementById('mainContainer'),
  videoPage: document.getElementById('videoPage'),
  redirectScreen: document.getElementById('redirectScreen'),
  ctaButton: document.getElementById('ctaButton'),
  planoCards: document.querySelectorAll('.plano-horizontal')
};

// 2. Debounce para eventos (evita execução excessiva)
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/* ============================================
   FIM DAS OTIMIZAÇÕES
   ============================================ */