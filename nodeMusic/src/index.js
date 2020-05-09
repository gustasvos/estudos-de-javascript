const express =  require('express');
const app = express();

// habilitar json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// acessa os arquivos txt da pasta public
// curl http://localhost:3https://github.com/gustasvos/nodeMusic.git000/a.txt
app.use(express.static('../public'));


// subir server
app.listen(3000, () => {
    console.log('running');
})


// todas as urls de localhost terao 'Desconhecido' no seu conteudo
// curl http://localhost:3000/
// app.use((req,res) =>{res.send('Desconhecido')});