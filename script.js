let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasMax = 10;
let tentativasRestantes = tentativasMax;

const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");
const input = document.getElementById("palpite");
const botao = document.getElementById("btnChutar");

tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

botao.addEventListener("click", chutar);

function chutar() {
    let valor = parseInt(input.value);

   
    if (isNaN(valor) || valor < 1 || valor > 100) {
        mensagem.textContent = "Digite um número válido entre 1 e 100!";
        return;
    }

    
    if (valor === numeroSecreto) {
        mensagem.textContent = "🎉 Você acertou!";
        finalizarJogo();
        return;
    } else if (valor < numeroSecreto) {
        mensagem.textContent = "🔼 O número secreto é MAIOR!";
    } else {
        mensagem.textContent = "🔽 O número secreto é MENOR!";
    }

  
    tentativasRestantes--;
    tentativas.textContent = "Tentativas restantes: " + tentativasRestantes;

   
    if (tentativasRestantes === 0) {
        mensagem.textContent = "💀 Você perdeu! O número era " + numeroSecreto;
        finalizarJogo();
    }

    input.value = "";
}

function finalizarJogo() {
    input.disabled = true;
    botao.disabled = true;
}