const aluno = {
    nome: 'Paulo',
    print: function(){
        console.log(this.nome);
    }
}

// print é uma função anonima
const professor = {
    nome: 'José',
    print: () => {
        console.log(this.nome);
    }
}

aluno.print() 
professor.nome()