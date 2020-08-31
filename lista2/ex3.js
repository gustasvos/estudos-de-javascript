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


for (let i = 0; i < aobj.length; i++) {
  for (var key in aobj[i]) {
    console.log(key, ":", aobj[i][key]);  
  }
}