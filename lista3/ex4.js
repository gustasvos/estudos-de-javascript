const random = async max => Math.floor(Math.random() * max)


async function exibir() {
    let a = await random(20)
    console.log(a)
}

exibir()