let vetor = [4, 10, 3, 15, 8, 1, 9, 2, 7]

function buscaSequencial(array, key) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == key) {
            return `Direta : a chave foi encontrada na posição ${i}`

        }

    }
    return "Direta: não achou correspondente"

}

let chave = 2
let resultado = buscaSequencial(vetor, chave)
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
//criando uma copia para usar na busca binaria recursiva
let copiaVetor = vetor.slice()

//colocando o vetor em ordem
directSort(vetor)

function buscaBinaria(array, key) {

    let start = 0
    let end = array.length-1

    while (start <= end){
        //encontra o meio do vetor ,math.floor para retornar sempre numeros inteiros na divisão
        let mid = Math.floor((start + end)/2)

        //checa se o meio é o valor procurado
        if(array[mid] == key){
            return `Binária: valor encontrado na posição ${mid}`
        }
        //se nao encontrou procura a esquerda ou direita do vetor
        else if (array[mid] < key){
            start = mid + 1
        }
        else{
            end = mid - 1
        }

    }
    //caso nao encontre o valor
    return "Binária: nao foi encontrado a chave"


}

let resultado2 = buscaBinaria(vetor, 1)
console.log(resultado2)

function buscaBinariaRecursiva(array, key, start, end){

    let mid 
    if (start > end){
        return "nao encontrado"
    }
    else{
        mid = Math.floor((start+end)/2)
        if (array[mid]==key){
            return `Binária Recursiva: valor encontrado na posição ${mid}`
        }
        else if (key < array[mid]){
            return buscaBinariaRecursiva(array, key, start, mid-1)
        }
        else{
            return buscaBinariaRecursiva(array,key, mid+1, end)
        }
    }
}
console.log(vetor)
let resultado3=buscaBinariaRecursiva(vetor, 1, 0, vetor.length-1)
console.log(resultado3)




