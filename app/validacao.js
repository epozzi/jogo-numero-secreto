function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

    if (numeroForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</d>'
        return
    }

    if (numeroDentroDoRangePermitido(numero)) {
        elementoChute.innerHTML +=`
            <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto} </h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        recognition.stop();

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor
                <i class="fa-solid fa-arrow-down"></i>
            </div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior
                <i class="fa-solid fa-arrow-up"></i>
            </div>
        `
    }

}


function numeroForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroDentroDoRangePermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})