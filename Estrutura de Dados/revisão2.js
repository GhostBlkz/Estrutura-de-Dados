function revisao2() {
    let vetor = []
    let num = 11
    while (num != 0) {
        console.log("Escolha:\n 1- para inserir \n 2- para remover \n 3- para pares ou impares \n 4- para somar indices \n 0- para sair")
        num = (Number(prompt))
        if (num == 1) {
            inserir(vetor)
        }
        if (num == 2) {
            remover(vetor)
        }
        if (num == 3) {
            somarPI(vetor)
        }
        if (num == 4){
            somarIn(vetor)
        }
    }
}
function inserir(vetor) {
    let qntd = Number(prompt("Digite quantos numeros que voce quer Inserir"))

    for (let i = 0; i < qntd; i++) {
        vetor.push(Number(prompt("insira os valores")))
    }
}
function remover(vetor) {
    let qntd = Number(prompt("Digite qual a posição do indice a ser removido"))
    if (qntd == 0) {
        vetor.shift
    }
    else {
        vetor.splice(qntd, qntd - 1)
    }

}
function somarPI(vetor) {
    let escolha = Number(prompt("1- Somar todos impares, 2 - somar todos pares"))
    let soma = 0
    if (escolha == 1) {
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] % 2 != 0) {
                soma += vetor[i]
            }
        }
        console.log(`O resultado da soma de impares é ${soma}`)
    }
    if (escolha == 2) {
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] % 2 == 0) {
                soma += vetor[i]
            }
        }
        console.log(`O resultado da soma de pares é ${soma}`)
    }

}
function somarI(vetor){
    let inicial= Number(prompt("Insira o numero inicial"))
    let final = Number(prompt("Insira o numero Final"))

    let soma = 0
    for (let i = inicial; i < vetor[final]; i ++){
        soma += vetor[i]
    }
    console.log(`O resultado da soma entre os indices ${inicial} e ${final} é = ${soma}`)


}