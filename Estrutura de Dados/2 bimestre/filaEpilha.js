function fila(){
    let vet = []

    let x = 7

    vet.push(x)
    vet.push(1)
    vet.push(2)

    console.log("fila: "+vet)

    x = vet.shift()
    console.log("elemento: "+ x)
    console.log("fila: "+vet)

    vet.push(10)
    console.log("fila: "+vet)

}


function pilha(){
    let vet =[]

    let x = 5
    vet.push(x)
    vet.push(1)
    vet.push(2)
    
    console.log("pilha: "+vet)
    
    x=vet.pop()

    console.log("pilha: "+vet)
    console.log("elemento: "+ x)
    console.log("pilha: "+vet)

}
pilha()