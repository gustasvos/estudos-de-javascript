const express = require("express"); // node nao aceita import
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));


app.post('/soma', (req,res) => {
    // sintaxe para pegar do express.json
    let {x,y} = req.body;
    res.send(x,y);
});

// req = request; res = response
app.get('/', (req, res) => {
    res.send("salve");
});

app.get('/teste/novo', (req, res) => {
    res.send("disgraça");
});

// o ':' indica que é um parametro, logo, eu invento a url
app.get('/cad/:nome/:idade', (req, res) => {
    let nome = req.params.nome;
    let idade = req.params.idade;
    // url que eu colocar em :nome e :idade, sera passado para ca 
    res.send("salve " + nome + " " + idade);
});


// subir server. 3100 é a porta
app.listen(3100, () => {console.log("rodando")});