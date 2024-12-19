document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Pega os dados do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Formata a mensagem para o WhatsApp
  const whatsappMessage = `Olá, gostei do seu portifólio, meu nome é nome: ${name}\, meu e-mail é: ${email}\, e a minha dúvida é: ${message}`;

  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Redireciona para o WhatsApp com a mensagem pré-preenchida
  const whatsappURL = `https://wa.me/5585991686713?text=${encodedMessage}`;
  window.open(whatsappURL, "_blank");
});
