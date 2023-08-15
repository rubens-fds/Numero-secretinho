function verificaSeOChutePossuiUmValorValido(chute){
   const numero = +chute
   
   if(chuteForInvalido(numero)){
     if(numero === 'game over' || 'Game Over' || 'Game over'){
          document.body.innerHTML = `<h1>VOCE DESISTIU</h1>
          <button id ="jogar-novamente" class = btn-jogar>Começar de novo</button>`  
     }else{
          document.body.innerHTML += '<div>Valor Inválido</div>'
          return
     }
        
   }

   if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido, o número secreto precisa estar entre: ${menorValor} ou ${maiorValor}</div>`
        return
   }

   if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Parabens, Você Acertou!!! o numero secreto era: ${numeroSecreto}</h2>
        <button id ="jogar-novamente" class = btn-jogar>Começar de novo</button>`
    
   }
   else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
   }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
   }

}  



function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
     
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e =>{
     if(e.target.id == 'jogar-novamente'){
          window.location.reload()
     }
})
