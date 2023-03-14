let vetor = [4, 10, 3, 15, 8, 1, 9, 2, 7]

function buscaDireta(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == key) {
            return `a chave foi encontrada na posição ${i}`

        }

    }
    return "não achou correspondente"

}

let chave = 2
let resultado = buscaDireta(vetor, chave)
console.log(resultado)

function directSort(array) {
    for (let i = 0; i < vetor.length; i++) {
        let menor = vetor[i]
        let pos = i
        for (let j = i + 1; j < vetor.length; j++) {
            if (vetor[j] < menor) {
                menor = vetor[j]
                pos = j
            }
        }
        let aux = vetor[i]
        vetor[i] = vetor[pos]
        vetor[pos] = aux
    }
}
let auxiliar = vetor.slice()
directSort(vetor)

function buscaBinaria(array, key) {

    if (key < array[Math.trunc(vetor.length / 2)]) {
        return array[Math.trunc(vetor.length / 2)]
    }
    else{
        return buscaBinaria(array[Math.trunc(vetor.length / 2)], key)
    }


}

let resultado2 = buscaBinaria(vetor, 1)
console.log(resultado2)


