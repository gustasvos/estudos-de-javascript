let a = Array(10);
a.fill(2);

a.forEach((item, index, array) => {
    array[index] = Math.floor(Math.random()*20);
    if (index === 9){
        console.log(array)
    }
})
