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

const p = new Pessoa('gustavo', 19)
p.print();  
