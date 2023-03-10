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
function vetOrdenado(ordenado){
    for(let i = 0 ; i < 1000 ; i++){
        ordenado[i] = i
    }
}
function vetInvertido(invertido){
    let j = 0
   for(let i = 1000; i >= 0 ; i--){
       invertido[i] = j
       j++
   }
}
function vetRandom(rand){
    for(let i = 0 ; i < 1000 ; i++){
        rand[i] = Math.floor(Math.random()*1001)
    }
}


//--------------------------------
let vetor = []

vetOrdenado(vetor)
console.log(vetor)
console.time('bubbleSort...')
bubbleSort(vetor)
console.timeEnd('bubbleSort...')
console.log(vetor)

vetor = []
vetOrdenado(vetor)
console.log(vetor)
console.time('direta...')
direta(vetor)
console.timeEnd('direta...')
console.log(vetor)

vetor = []
vetOrdenado(vetor)
console.log(vetor)
console.time('InserDireta2...')
InserDireta2(vetor)
console.timeEnd('InserDireta2...')
console.log(vetor)
//-------------------------------------------

vetor = []
vetInvertido(vetor)
console.log(vetor)
console.time('bubbleSort...')
bubbleSort(vetor)
console.timeEnd('bubbleSort...')
console.log(vetor)

vetor = []
vetInvertido(vetor)
console.log(vetor)
console.time('direta...')
direta(vetor)
console.timeEnd('direta...')
console.log(vetor)

vetor = []
vetInvertido(vetor)
console.log(vetor)
console.time('InserDireta2...')
InserDireta2(vetor)
console.timeEnd('InserDireta2...')
console.log(vetor)
//-------------------------------------
vetor = []
vetRandom(vetor)
let aux = vetor.slice()
let aux1 = vetor.slice()
let aux2 = vetor.slice()

console.log(aux)
console.time('bubbleSort...')
bubbleSort(aux)
console.timeEnd('bubbleSort...')
console.log(aux)

console.log(aux1)
console.time('direta...')
direta(aux1)
console.timeEnd('direta...')
console.log(aux1)

console.log(aux2)
console.time('InserDireta2...')
InserDireta2(aux2)
console.timeEnd('InserDireta2...')
console.log(aux2)