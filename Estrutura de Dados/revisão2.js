function revisao2() {
    let vetor = []
    while (num != 0) {
        let num
        console.log("Escolha:\n 1- para inserir \n 2- para remover \n 3- para somar \n 0- para sair")
        num = (Number(prompt))
        if (num == 1) {
            inserir(vetor)
        }
        else if (num == 2) {
            remover(vetor)
        }
    }
}
function inserir(vetor) {
    let qntd = Number(prompt("Digite quantas vezes voce quer modificar"))

    for (let i = 0; i < qntd; i++) {
        vetor.push(Number(prompt("insira o valor")))
    }
}
function remover(vetor) {
    let qntd = Number(prompt("Digite qual a posição do indice a ser removido"))

    vetor.splice(qntd, qntd)
}