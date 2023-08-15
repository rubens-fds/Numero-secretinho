const menorValor = 1
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio();


function gerarNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor + 1)
}

console.log('o numero secreto eh:',numeroSecreto);

const elementoMenorValor = document.querySelector('#menor-valor').innerHTML = menorValor;
const elementoMaiorValor = document.querySelector('#maior-valor').innerHTML = maiorValor;