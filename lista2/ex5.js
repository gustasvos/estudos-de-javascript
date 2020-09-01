class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    print() {
        console.log(this.nome);
        console.log(this.idade);
    }
}

class Cliente extends Pessoa{
    constructor(nome, idade, telefone) {
        super(nome, idade);
        this.telefone = telefone;
    }
    print() {
        super.print()
        console.log(this.telefone)
    }
}


const p = new Pessoa("Vitor", 21, 123456789);
const p2 = new Pessoa("Gustavo",15, 123456789);
p.print();
p2.print();


const c = new Cliente("Lucas", 11, 123456789);
const c2 = new Cliente("Amanda", 12, 12345689);
c.print();
c2.print();
