function Insert(array) {
    let key = 'N'
    key = key.charCodeAt()
    let vmod = key % 7
    for (let i = 0; i < 7; i++) {
        if (array[vmod + i] == null) {
            array[vmod + i] = key
        }
        
    }
    return 'Vetor cheio'
}

function search(array,key)

let vetor = []
console.log(Insert(vetor))
