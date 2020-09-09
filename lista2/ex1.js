const aluno = {
    nome: 'Paulo',
    print: function(){
        console.log(this.nome);
    }
}

// arrow function não pode ser usada para criar funções em objetos
const professor = {
    nome: 'José',
    print: () => {
        console.log(this.nome);
    }
}

aluno.print() 
professor.print()