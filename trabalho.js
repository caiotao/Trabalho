function mostrarMensagem() {
    const mensagem = "Você é capaz de conquistar tudo o que deseja! 💪";
    const divMensagem = document.getElementById("mensagem");
    divMensagem.textContent = mensagem;
  }
  
  // Espera o botão ser clicado e executa a função
  document.getElementById("botaoMensagem").addEventListener("click", mostrarMensagem);