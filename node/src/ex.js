const express =  require('express');
const app = express();

// habilitar json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// acessa os arquivos txt da pasta public
// curl http://localhost:3000/a.txt
app.use(express.static('../public'));
// a.txt passa a ser curl http://localhost:3000/msg.txt (comentar a linha de cima para testar)
app.use('/msg', express.static('../public/a.txt'));

// subir server
app.listen(3000, () =>{
    console.log('rodando');
})

// curl http://localhost:3000/cad/cli
app.all('/cad/cli',(req,res) =>{res.send('rota cad/cli')});

// a, b como parametros
// curl http://localhost:3000/op/5/4 (retorna '9')
app.get('/op/:a/:b',(req,res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a+b +''); // transforma a soma em string, so pode ser string
})

// a, b como parametros
// curl -X POST http://localhost:3000/op/5/4
// post nao funciona no navegador, rodar comando acima no cmd
app.post('/op/:a/:b',(req,res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a*b +''); // transforma a soma em string, so pode ser string
})

// todas as urls de localhost terao 'Desconhecido' no seu conteudo
// curl http://localhost:3000/
app.use((req,res) =>{res.send('Desconhecido')});
