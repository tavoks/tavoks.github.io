document.getElementById('year').textContent = new Date().getFullYear();

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
