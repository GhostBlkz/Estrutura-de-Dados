function Insert(array, key) {
    let rodou = false
    key = key.charCodeAt()
    let vmod = key % 7
    let i = 0
    while(array[vmod+i] != key){
        if (array[vmod+i] == null){
            array[vmod+i] = key
            return
        }
        else{
            for (let j = 1; j < 7; j++){
                if(array[vmod+i+j] == ''){
                    array[vmod+i+j] = key
                    break
                }
            }
        }
        
        if (i == 7 && rodou == true ){
            return 'Cheio'
        }
        i++
        if (i == 7){
            rodou = true
            i = 0
            vmod = 0
        }

    }

}
function search(array, key) {
    key = key.charCodeAt()
    for (let i = 0; i < array.length; i++) {
        if (array[i] == key) {
            return 'encotrado na posição ' + i
        }
    }
    return 'nao encontrado'
}



let vetor = []
Insert(vetor, 'D')
Insert(vetor, 'D')
Insert(vetor, 'R')


console.log(vetor)
console.log(search(vetor, 'D'))
