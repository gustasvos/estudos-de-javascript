const express = require('express')
const app = express()

app.listen(3101, () => {
    console.log("PEGA NO BREU")
})

app.get('/', (req,res) => {
    res.send("caminho raiz")
})

app.get('/somar/:a/:b',(req,res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a+b +''); // transforma a soma em string, so pode ser string
})

// curl "http://localhost:3101/diff?x=12&y=8"
app.get('/diff',(req,res) => {
    let x = req.query.x;
    let y = req.query.y;
    x = parseInt(x);
    y = parseInt(y);
    res.send(x-y +''); 
})

// curl -X POST http://localhost:3101/pow/5/4
app.post('/diff/:a/:b',(req,res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a-b +'');
})

// curl "http://localhost:3101/pow?a=5&b=4"
app.get('/pow',(req,res) => {
    let a = req.query.a;
    let b = req.query.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a**b +'');
})

// curl -X POST http://localhost:3101/pow/5/4
app.post('/pow/:a/:b',(req,res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a**b +'');
})

// curl -X PUT http://localhost:3101/pow/5/4
app.put('/pow/:a/:b',(req,res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a**b +'');
})

// curl -X DELETE http://localhost:3101/pow/5/4
app.delete('/pow/:a/:b',(req,res) => {
    let a = req.params.a;
    let b = req.params.b;
    a = parseInt(a);
    b = parseInt(b);
    res.send(a**b +'');
})

// acessa os arquivos txt da pasta public
// curl http://localhost:3101/texto.txt
app.use(express.static('../public'));

// a.txt passa a ser curl http://localhost:3101/arquivo/txt 
app.use('/arquivo/txt', express.static('../public/texto.txt'));


// todas as urls de localhost terao 'caminho inexistente' no seu conteudo
// curl http://localhost:3101/desconhecido
app.use((req,res) =>{res.send("Caminho inexistente")});
