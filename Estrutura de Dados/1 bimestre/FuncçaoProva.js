function x(a, b) {

    for(let d=0; d<a.length; d++) {

        if(a[d] == b) 

            return d

        else if(a[d] > b)

            return -1

    }

    return -1

}

let vetor = [4, 2, 5, 3]
a(vetor)
console.log(vetor)
