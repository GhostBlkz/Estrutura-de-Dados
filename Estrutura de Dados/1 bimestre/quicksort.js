function quicksort(array, left, right) {
    let i = left
    let j = right
    let pivotidx = Math.floor((left + right) / 2) //meio
    let pivot = array[pivotidx]//conteudo do meio
    //partição
    while (i <= j) {
        while (Number(array[i]) < pivot) 
            i++
        
        while (Number(array[j]) > pivot) 
            j--
        
        if (i <= j) {
            aux = array[i]
            array[i] = array[j]
            array[j] = aux
            i++
            j--
        }

    }
    //recursão
    if(left < j){
        quicksort(array,left,j)
    }
    if(i < right){
        quicksort(array, i, right)
    }
    return array
}

let vetor = [10, 2, 5, 7, 4, 8, 6, 12]
quicksort(vetor, 0, vetor.length-1)
console.log(vetor)