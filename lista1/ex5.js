const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin, output: process.stdout
})

rl.question('Qual o seu nome?: ', (answer) => {
    console.log('Bom dia '+ answer);
    console.log('Boa tarde '+ answer);
    rl.close();
})

