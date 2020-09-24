
// Person constructor
/*function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Greeting
  Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  
  const person1 = new Person('John', 'Doe');
  
  console.log(person1.greeting());
  
  // Customer constructor
  function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
  
    this.phone = phone;
    this.membership = membership;
  }
  
  // Inherit the Person prototype methods
  Customer.prototype = Object.create(Person.prototype);
  
  // Make customer.prototype return Customer()
  Customer.prototype.constructor = Customer;
  
  // Create customer
  const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
  
  console.log(customer1);
  
  // Customer greeting
  Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
  }
  
  console.log(customer1.greeting());




function person1(firstName,lastName){
    this.firstName=firstName;
    this.lastName-lastName;
}

person1.prototype.greeting=function(){
    return  `Hello there ${this.firstName} ${this.lastName}`;     
}

const Person=new person1('raj','j');
console.log(Person.greeting());

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone=phone;
    this.membership=membership;
}

Customer.prototype=Object.create(person1.prototype);
Customer.prototype.constructor = Customer;
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
  }
  const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
  console.log(customer1.greeting());*/


  const personPrototypes={
      greeting:function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
      },
      getsMarried:function(newLastName){
          this.lastName=newLastName;
      }
  };

  const mary=Object.create(personPrototypes);
  mary.firstName='mary';
  mary.lastName='j';
  mary.age=30;
  //mary.getsMarried='thomson';

  console.log(mary.greeting());
  console.log(mary.getsMarried('raj'));