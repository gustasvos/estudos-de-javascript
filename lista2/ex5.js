class Pessoa{
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    
    print (){
        console.log(this.nome);
        console.log(this.idade);
    }
}

// const p = new Pessoa('gustavo', 19)
// p.print();  


class Cliente extends Pessoa{
    constructor(nome, idade, telefone){
        super(nome, idade);
        this.telefone = telefone;
    }

    print () {
        super.print();
        console.log(this.telefone); 
    }
}

const c2 = new Cliente('Vitor', 21, 123456789)
const c = new Cliente('Gustavo2', 15, 156156456);
c.print();
c2.print()