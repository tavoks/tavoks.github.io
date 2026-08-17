document.getElementById('year').textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.project-gif').forEach((img) => {
  img.classList.add('is-expandable');
  img.setAttribute('role', 'button');
  img.setAttribute('tabindex', '0');
  img.setAttribute('aria-label', 'Ampliar imagem');
  const open = () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };
  img.addEventListener('click', open);
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

if (lightbox) {
  lightbox.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (form.action.includes('YOUR_FORM_ID')) {
      status.textContent = 'Formulário ainda não configurado — por enquanto, use o WhatsApp ou e-mail acima. :)';
      return;
    }

    status.textContent = 'Enviando...';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        status.textContent = 'Mensagem enviada! Retorno em breve.';
        form.reset();
      } else {
        status.textContent = 'Algo deu errado. Tente pelo WhatsApp ou e-mail.';
      }
    } catch {
      status.textContent = 'Algo deu errado. Tente pelo WhatsApp ou e-mail.';
    }
  });
}
