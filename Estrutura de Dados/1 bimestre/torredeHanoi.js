function torre(qntd, origem, destino, aux) {
    if (qntd == 1) {
        console.log(`Mover disco de ${origem} para ${destino}`)
    }
    else{
        torre(qntd-1, origem,aux,destino)
        console.log(`Mover disco ${qntd} de ${origem} para ${destino}`)
        torre(qntd-1, aux,destino,origem)
    }
}

torre(3,'A','C','B')