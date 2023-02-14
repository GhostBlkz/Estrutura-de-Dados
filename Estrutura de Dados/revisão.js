function revisao(vetor1, vetor2, inter) {
    vetor1 = []
    vetor2 = []
    inter = []

    lerVetores(vetor1, vetor2)
    intercalar(vetor1, vetor2, inter)
    mostrar(inter)
}
function lerVetores(vetor1, vetor2) {
    for (let i = 0; i < 25; i++) {
        vetor1[i] = i
        vetor2[i] = i + 25
    }
}
function intercalar(vetor1, vetor2, inter) {
    for (let i = 0; i < 25; i++) {
    inter.push(vetor1[i])
    inter.push(vetor2[i])
    }

}
function mostrar(inter){
    console.log(inter)
}
