function greet(firstname,lastname){
    if(typeof firstname === 'undefined')
    firstname='raj';
     if(typeof lastname==='undefined')
     lastname='j';
     return firstname+' '+lastname;
}

console.log(greet());

   