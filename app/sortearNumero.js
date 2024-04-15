const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

const menorValor = 1;
const maiorValor = 1000;

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt((Math.random() * maiorValor) + 1)
}

console.log('Numero secreto: ' + numeroSecreto)