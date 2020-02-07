//declaracao e percorrer elementos - padrão
let w = [4,2,8,5]
for (let i = 0; i < w.length; i++){console.log(w[i])}

//criar copia do array w
let z = [...w]
console.log(z)

//remover elementos do array (.splice())
//array.splice(x,y) remove y elementos a partir da posicao x do array
let a = [4,2,8,5,1,9,7]
a.splice(2,3)
console.log(a)