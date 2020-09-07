let p = new Promise((x,y) => {
    let i = Math.random() * 10 | 0
    // console.log(i)

    if (i%2 == 0) {
        x()
    } else {
        y()
    }
    console.log("ok")
})



p.then(() =>{
    console.log("Bom dia")
})

.catch(() => {
    console.log("Boa tarde")
})

.finally(() => {
    console.log("Boa noite")
})