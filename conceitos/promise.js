//criação da promise
let prom = new Promise((resolve, reject) => {
    //o código no construtor da promise é síncrono
    console.log('início do construtor');
    if (Math.random() > 0.5) {
        //irá invocar o 1o then
        resolve('Msg de sucesso');
    } else {
        //irá invocar o catch
        reject('Msg de erro');
    }
    console.log('fim do construtor');
});
//uso da promise
prom.then(
    //result possui o valor passado pela função resolve
    result => {
        console.log('1o then: ' + result);
        return 'resultado do 1o then';
    }
)
    .then(
        //esse then somente é invocado se o return do 1o then for executado
        result => console.log('2o then: ' + result)
    )
    .catch( //err possui o valor passado pela função reject
        err => console.log('rejeitada: ' + err)
    ).finally( //executado em caso de sucesso ou falha
        () => console.log('finalizada')
    );
console.log('fim do código');