class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthday=new Date(dob);
    }

greeting(){
    return `hello there ${this.firstName} ${this.lastName}`;
}

static add(x,y){
    return x+y;
}

}
const mary=new Person('Mary','Williams','11-12-2020');
console.log(mary);
console.log(mary.greeting());
console.log(Person.add(1,2));