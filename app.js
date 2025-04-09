//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 100';

let listadeNS = [];
let numeroLimite = 10
let nS = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número de 1 a 10');
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == nS) {
        exibirTextoTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${nS} com ${tentativas} ${palavraTentativa}`
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (nS > chute) {
        exibirTextoTela('p', 'O número secreto é maior');
    }
    else {
        exibirTextoTela('p', 'O número secreto é menor');
    }
    tentativas++
    limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadesDeElementosNaLista = listadeNS.length;

    if (quantidadesDeElementosNaLista == numeroLimite){
        listadeNS = [];
    }
    if (listadeNS.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listadeNS.push(numeroEscolhido)
        console.log(listadeNS)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo() {
    nS = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

//Listas
// let numeros = [1, 5, 9]
// console.log(numeros.length)
// console.log(numeros[2])
// let linguagens = ['java', 'python', 'javascript', 'css', 'html']
// console.log(linguagens[1])
// console.log(linguagens.length)
// let ultimo = linguagens[linguagens.length - 1]
// console.log(ultimo)
