let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do desafio'

function teste() {
    console.log('Cliquei')
}

function alerta() {
    alert('Eu amo js')
}

function promp() {
    let cidade = prompt('Digite uma cidade do Brasil')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function soma() {
    let n1 = Number(prompt('Digite um número'))
    let n2 = Number(prompt('Digite mais um número'))
    alert(`A soma é ${n1+n2}`)
}

function ola() {
    console.log('Olá Mundo')
}

ola()

function nome(nome) {
    console.log(`Olá, ${nome}`)
}

nome('Giovana')

function dobro(n) {
    return n *2;
}

let resul = dobro(5)
console.log(resul)

function media(nn, nn2, nn3) {
    return nn + nn2 + nn3 / 3
}

let medi = media(6, 4, 8)
console.log(medi)

function maior(w, e) {
    return w > e ? w : e
}
let mai = maior(4, 6)
console.log(mai)

function raiz(r) {
    return r * r 
}
let raiQuadrada = raiz(3)
console.log(raiQuadrada)

function calculaimc(altura, peso) {
    let imc = peso / altura **2
}

// function conversor(valor) {
//     let reais = valor / 4.80
//     return reais
// }
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
  let valorEmDolar = 50;
  let valorEmReais = converterDolarParaReal(valorEmDolar);
  console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
  
  // Exemplo de uso
//   let valorEmDolar = 50;
//   let valorEmReais = converterDolarParaReal(valorEmDolar);
//   console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);
