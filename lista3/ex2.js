function saudacao(hora) {
    return new Promise((x,y) => {
        hora = Math.floor(Math.random() * 10)
        // console.log(hora)

        if (hora%2 == 0) {
            x()
        } else {
            y()
        }
    })
}

saudacao().then(() => {
    console.log("Bom dia")
})

.catch(() => {
    console.log("Boa tarde")
})
