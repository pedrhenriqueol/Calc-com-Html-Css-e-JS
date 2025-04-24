document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contato form");
    const nome = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const mensagem = form.querySelector('textarea[name="message"]');
  
    form.addEventListener("submit", (e) => {
      if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        mensagem.value.trim() === ""
      ) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos antes de enviar.");
      }
    });
  });
  