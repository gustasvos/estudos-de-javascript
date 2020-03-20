const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin, output: process.stdout
})

rl.question('9? ', (answer) => {
    console.log(`thanks : ${answer}`);
    rl.close();
})