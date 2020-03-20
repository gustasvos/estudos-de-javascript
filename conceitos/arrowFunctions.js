//arrow functions sao sempre anonimas

//formas de declarar
const mult = (a,b) => {
    return a * b;
}

//sem return e sem chaves
const div = (a,b) => a/b;

//se tiver chaves precisa de return
const pow = (a,b) => {return a**b};

//quando há apenas um parametro(txt) n precisa de parenteses no parametro
const msg = txt => console.log(txt);

console.log(mult(3,2))
console.log(div(3,2))
console.log(pow(3,2))
msg('hello world')