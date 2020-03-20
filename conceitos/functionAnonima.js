//funcao é chamada sem nome qnd dentro da variavel
let diff = function(a,b) {
    return a - b;
}

//funcao é chamada sem nome qnd dentro da variavel
let somar = function(a,b) {
    return a + b;
}

//op será substituida por diff or somar
function calc(op,x,y) {
    return op(x,y);
}

console.log(calc(diff,8,10));
console.log(calc(somar,8,10));
