const random = async max => Math.floor(Math.random() * max)


async function soma() {
    let a = await random(20)
    let b = await random(20)
    console.log("a:",a, "b:",b)
    console.log(a+b)
}

soma()