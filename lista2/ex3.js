const aobj = [{
    "nome":"Ana Maria",
    "idiomas":["espanhol","frances"],
    "carac": {
        "peso":"62.5",
        "altura":"1.67"
    }
},{
    "nome":"Carlos",
    "idiomas":["ingles"],
    "carac": {
        "sexo": "M",
        "altura":"1.8",
        "doador": true
    }
},{
    "nome":"Rodrigo",
    "idiomas":["espanhol","frances","ingles"],
    "carac": {
        "desportista": true,
        "voluntario": true
    }
}]


for(let i in aobj){
    console.log(aobj[i].nome)
  Object.keys(aobj[i].carac).forEach(function(key) {
    console.table(key +" : "+ aobj[i].carac[key])
  })
  }