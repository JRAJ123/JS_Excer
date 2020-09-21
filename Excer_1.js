/*var printTwo=function()
{
    console.log(2);
}

printTwo();
printTwo.call();
printTwo.apply();*/

/*var person={
    firstname:'john',
    lastname:'doe',
    fullname:function(){
        return this.firstname+this.lastname;
    }
};
console.log(person.fullname());*/

/*var person1 = {
    firstName  : 'John',
    lastName   : 'Doe',
    id     : 5566,
    myFunction : function() {
      return this.firstName+this.lastName;
    }
  };

  var person2={
    firstName  : 'raj',
    lastName   : 'raju',
    id     : 5566,
    myFunction : function() {
      return this.firstName+this.lastName;
    }
  };
  console.log(person1.myFunction.call(person2));*/

 
/*function f_Name(name){
    this.name=name;
}

var name=new f_Name('rajesh');
console.log(name);*/

/*function Numbers(){
   var sum=num1+num2;


}*/

/*var cars = ["Saab", "Volvo", "BMW"];

function numbers(){
    var cars = ["Saab", "Volvo", "BMW"];
}

var car=new numbers(cars);
console.log(car);*/

function greet()
{
    return 'Hello World';
}

console.log(greet());

var greet=function(){return 'Hello World'};
console.log(greet);
var log=function(fn){console.log(fn())};
log(greet);

function multiply(num){
    return 5*num;
}

console.log(multiply(5));


