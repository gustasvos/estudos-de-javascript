const reducer = (accumulator, currentValue) => accumulator + currentValue;

const reverse3 = s => console.log([...s].reverse().reduce(reducer));

reverse3('Gustavo')