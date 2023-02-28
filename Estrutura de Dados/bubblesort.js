
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

function direta(vetor){
    let fixa = vetor[0]
    for(let i=0; i < vetor.length; i++){
        for(let j = i; j < vetor.length; j++){
            if(vetor[i] > vetor[j]){
                
            }
        }
        fixa = vetor[0+1]
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
