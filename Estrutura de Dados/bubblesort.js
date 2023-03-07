function bubbleSort(vetor) {
    let aux = 0
    for (let j = 0; j < vetor.length - 1; j++) {

        for (let i = 0; i < vetor.length - j - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                aux = vetor[i]
                vetor[i] = vetor[i + 1]
                vetor[i + 1] = aux
            }

        }
    }

}

function direta(vetor) {
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

function InserDireta1(vetor) {
    for (let i = 1; i < vetor.length; i++) {
        let atual = vetor[i]
        let j
        for (j = i - 1; j >= 0 && vetor[j] > atual; j--) {
            vetor[j + 1] = vetor[j]
        }
        vetor[j + 1] = atual

    }

}
function InserDireta2(vetor){
    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < i; j++){
            if(vetor[i] < vetor[j]){
                let aux = vetor[i]
                for(let k = i; k > j; k--){
                    vetor[k] = vetor[k-1]
                }
                vetor[j] = aux
            }
        }
    }
}



let nums = [5, 2, 6, 8, 10, 3, 7]
console.log(nums)
console.time('bubbleSort...')
bubbleSort(nums)
console.timeEnd('bubbleSort...')
console.log(nums)

nums = [5, 2, 6, 8, 10, 3, 7]
console.log(nums)
console.time('direta...')
direta(nums)
console.timeEnd('direta...')
console.log(nums)

nums = [5, 2, 6, 8, 10, 3, 7]
console.log(nums)
console.time('InserDireta1...')
InserDireta1(nums)
console.timeEnd('InserDireta1...')
console.log(nums)

nums = [5, 2, 6, 8, 10, 3, 7]
console.log(nums)
console.time('InserDireta2...')
InserDireta2(nums)
console.timeEnd('InserDireta2...')
console.log(nums)