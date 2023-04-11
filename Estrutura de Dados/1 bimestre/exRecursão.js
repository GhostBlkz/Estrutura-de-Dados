function fatorial(num) {
    //checa se o numero inserido é positivo
    if (num < 0) {
        return -1
    }
    //se o numero for 0 ele para
    else if (num == 0) {
        return 1
    }
    else {
        return (num * fatorial(num - 1))
    }
}

let resultado = fatorial(8)
console.log(`fatorial ${resultado}`)

function fibonacci(num) {
    if (num == 1 || num == 2) {
        return 1
    }

    else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}
let resul = fibonacci(4)
console.log(`Fibonacci ${resul}`)

function potencia(base, expo) {
    if (expo == 0) {
        return 1
    }
    else {
        return base * potencia(base, expo - 1)
    }
}
let resul2 = potencia(2, 3)
console.log(`potencia ${resul2}`)