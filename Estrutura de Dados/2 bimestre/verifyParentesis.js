function verifica(array) {
    let verify = []

    for (let i = 0; i < vetor.length; i++) {
        if (array[i] == '{') {
            array[i] = 3
        }
        else if (array[i] == '[') {
            array[i] = 2
        }
        else if (array[i] == '(') {
            array[i] = 1
        }
        else if (array[i] == ')') {
            array[i] = -1
        }
        else if (array[i] == ']') {
            array[i] = -2
        }
        else if (array[i] == '}') {
            array[i] = -3
        }




        for (let i = 0; i < vetor.length; i++) {
            if (array[i] == 3 || array[i] == 2 || array[i] == 1) {
                verify.push(array[i])
            }
            if (array[i] == -3 || array[i] == -2 || array[i] == -1) {
                if (i == 0) {
                    return -1
                }
                else {
                    let x = array[i]
                    if ((x + verify[i]) == 0) {
                        verify.pop()
                        return "deu certo"

                    }
                    else return 'erro'
                }
            }
        }
    }
}
vetor = ['{', '[', '(', ')', ']', '}']

console.log(verifica(vetor))
