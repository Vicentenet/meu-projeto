document.getElementById("mensagem-btn").addEventListener("click", function() {
  const areaMensagem = document.getElementById("mensagem-area");

  // Apagar mensagem anterior (caso clique mais de uma vez)
  areaMensagem.innerHTML = "";

  const novaMensagem = document.createElement("p");
  novaMensagem.textContent = "Seja bem-vindo à minha página!";
  areaMensagem.appendChild(novaMensagem);
});
