async function aleatorio(min, max) {
    let p = new Promise((x,y) => {
        let nro = Math.floor(Math.random() * (max-min) + min)
        setTimeout(() => 
            x(console.log(nro), 1000)
        )
    })
}

async function exibir() {
    let a = await aleatorio(30,50)
    console.log(a)
}

exibir()