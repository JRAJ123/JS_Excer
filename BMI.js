/*var Mark={
    mass:60,
    height:6.0,
    bmi:function(){
        var bmi=this.mass/(this.height*this.height);
        return bmi;
    }
}

console.log(Mark.bmi());

var John={
    mass:65,
    height:6.3,
    bmi:function(){
        var bmi=this.mass/(this.height*this.height);
        return bmi;
    }
}
console.log(John.bmi());*/

var height=40;
if(height)
{
    console.log('height is defined');
}
else
{
    console.log('Height is undefined');
}

if(height=='40')
{
    console.log('the == operator doing type coersion')
}
else
{
    console.log('the == operator not doing type coersion');
}