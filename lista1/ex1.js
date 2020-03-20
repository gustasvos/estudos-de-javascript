const reverse = s => {
    let a = '';
    for(let i=s.length; i>=0;i--){
        //console.log(s.charAt(i));
        a += (s.charAt(i));
    }
    return console.log(a);
}

reverse('Gustavo')