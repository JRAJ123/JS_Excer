const number=[43,56,33,23,44,36,5];
/*const number2=new Array(22,45,33,76,54);
const fruit=['Apple','Banana','Orange','Pear'];
const mixed=[22,'Hello',true,undefined,null,{a:1},{b:1},new Date()];

console.log(number);
console.log(number2);
console.log(fruit);
console.log(mixed);

let val;

//Get Array Length

val=number.length;

val=number[3];
console.log(val);//23
//console.log(val);
console.log(number2.length);//5
console.log(fruit.length);//4
console.log(Array.isArray(number));//True
number.push(50);
console.log(number)
let ind=number.indexOf(500);
console.log(ind);
number.slice(1,5);*/
let del=number.slice(1,3);
console.log(del);
let del1=number.splice(1,3);
console.log(del1);

var ages=[33,45,67,10,20,5,6]
function adult(age){
    return age>=10;
}

var age1=ages.filter(adult);
console.log(age1.sort());

val=number.sort(function(x,y){
return y-x;
});

console.log(val);

console.log("1");
console.log("2");






