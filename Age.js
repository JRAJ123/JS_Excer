function calculateAge(birthYear){
    return 2020-birthYear;
}

var John_Age=calculateAge(2000);
console.log(John_Age);
var Mike_Age=calculateAge(2013);
console.log(Mike_Age);
var Mary_John=calculateAge(2020);
console.log(Mary_John);

function yearUntilRetirement(year,firstName){
 var age=calculateAge(year);
 var retirement=65-age;

 console.log(firstName,age);
}

yearUntilRetirement(2000,'raj');