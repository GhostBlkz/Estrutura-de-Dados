function LinkedList(){

    let Node = function(element) {
        this.element = element
        this.next = null
    }

    let length= 0
    let head = null
    

    this.append = function (element){
        let node = new Node(element), current
        if (head == null){ //primeiro nó da Lista
            head = node
        }
        else{
            current = head
            while(current.next){
                current = current.next //percorre a lista ate encontrar o proximo elemento
            }
            current.next = node // obtem o ultimo item e faz next receber o node para fazer ligação
        }
        length++ // soma o tamanho
        


    }
    this.size = function(){
        return length
    }
    this.toString = function(){
        let current = head 
        let string = ''
        while(current){
            string += current.element + (current.next ? '->' : '')
            current = current.next
        }
        return string
    }
    this.removePrimeiro= function(){
        if(head == null){
            return -1
        }
        else {
            let current = head
            head = current.next
            length --
            return current.element 
        }
    }

}

lista = new LinkedList()
lista.append(10)
lista.append(12)
lista.append(5)
console.log(lista.size())
console.log(lista.toString())
lista.removePrimeiro()
console.log(lista.toString())
lista.append(23)
console.log(lista.toString())
lista.removePrimeiro()
console.log(lista.toString())

