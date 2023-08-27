function sim() {
  alert("Obrigado por namorar comigo, EU TE AMO ♥")
  location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ&si=IWODhX8KnlxfvOcW&t=2"
}

function desviar(btn) {
  btn.style.position = "absolute"
  btn.style.bottom = geraPosicao(10, 90)
  btn.style.left = geraPosicao(10, 90)
  console.log("Opa, desviei...")
}

function geraPosicao(min, max) {
  return Math.random() * (max - min) + min + "%"
}
