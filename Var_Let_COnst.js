/*var name='rajesh';
console.log(name);
name='raju';
console.log(name);
console.log('---------------------');
let name1='rajesh';
console.log(name1);
name1='raju';
console.log(name1);
console.log('=====================');
const name2='rajesh';
console.log(name2);
//name2='raju';
const arr=[1,2,3,4];
console.log(arr);
arr.push(5);
console.log(arr);
//arr=[1,2,3,4,5];
//console.log(arr);
const number={
    name:'rajesh',
    age:20
};
console.log(number);
number.name='raju';
number.age=25;
console.log(number);

const num=null;
console.log(typeof num);

const arr1=[1,2,'name','raju'];
console.log(typeof arr1);
console.log(arr1);
function fun(){
    console.log('name');
}
fun();

function fun1(){
    return 'Hello';
}

console.log(fun1());
console.log(fun1);*/
function f_name(firstname='rajesh',lastname='j'){
    return 'hello'+firstname+' '+lastname;
}
console.log(f_name('john','doe'));

const f_name1=function(firstname,lastname){
    return 'Hello'+firstname+lastname;
}
console.log(f_name1('raju','j'));