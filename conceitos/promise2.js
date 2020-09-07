const ride = new Promise((resolve, reject) => {
    if (arrived) {

        // resolve() ira para o valor da .then
        resolve("driver arrived!");
    } else {

        // reject() ira para o valor da .catch
        reject("driver bailed");
    }
})

ride
    .then(value => {

        // .then() retorna a resolve() 
        // oq esta na função resolve vem para a variavel value
        console.log(value);
    })
    
    .catch(error => {

        // .then() retorna a resolve()
        // oq esta na função reject vem para a variavel error
        console.log(error);
    })

    .finally(() => {
        // executado nao importa oq aconteça
        console.log("all settled");
    })

    