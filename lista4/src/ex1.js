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