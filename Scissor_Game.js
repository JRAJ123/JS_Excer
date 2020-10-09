/*const startGameBtn=document.getElementById('start-game-btn');

const ROCK='ROCK';
const PAPER='PAPER';
const SCISSOR='SCISSOR';
const DEFAULT_USER_CHOICE='ROCK';
const RESULT_DRAWN='DRAW';
const RESULT_PLAYER_WINS='PLAYER_WINS';
const RESULT_COMPUTER_WINS='COMPUTER_WINS';


const getPlayerSelection=function(){
    const selection=prompt(`${ROCK}, ${PAPER} or ${SCISSOR}?`, '').toUpperCase();
     if(selection !== ROCK  &&  selection !== PAPER  &&  selection !== SCISSOR) {
         alert('Please select proper choice');
         return DEFAULT_USER_CHOICE;
     }   
     return selection;
};
const getWinner=function(cChoice,pChoice){
    if(cChoice===pChoice){
        return RESULT_DRAWN;
    }else if(
        cChoice === ROCK &&  pChoice === PAPER || 
        cChoice === PAPER && cChoice === SCISSOR || 
        cChoice ===  SCISSOR &&  pChoice ===  ROCK
    ){
        return RESULT_PLAYER_WINS;
    }else{
        return RESULT_COMPUTER_WINS; 
    }
};
const getComputerChoice=function(){
    const randomValue=Math.random();
    if(randomValue<0.34){
        return ROCK;
    }else if(randomValue<0.67){
        return PAPER;
    }else{
        return SCISSOR;
    }
};

startGameBtn.addEventListener('click',function(){
    console.log('Game is starting...');
   const playerSelection= getPlayerSelection();
   //console.log(playerSelection);
   const  ComputerChoice=getComputerChoice();
   const winner=getWinner(ComputerChoice,playerSelection );
   console.log(winner);
});




 //startGame();

/*const startGame=function(){
    console.log('Start Game');
}*/


/*startGame();

function startGame(){
    console.log('Start Game');
}
/*const person={
    name:'max',
    greet:function greet(){
        console.log('Hello There');
    }
};

//person.greet();
startGameBtn.addEventListener('click',startGame);

const sumUp=(...numbers)  =>  {
    let sum=0;
    for (const num of  numbers) {
        sum+=num;
    }
    return sum; 
};

console.log(sumUp(1,2,3,4,5,6,7,8,9));
console.log(sumUp(12,12,2,1,2,1,2,1,2,1,2,2,1,2,2,1,2,2,1,2,2,2,1));

const f_Name=() =>{
    f_ame();
    function f_ame(){
       
        console.log('This is  inside function');
    }
 
    
    return console.log('this is outside of function');
};

f_Name();*/

/*function functionOne(x)
{
    return x;
};
function functionTwo(var1){
    
    return var1;

};
console.log(functionTwo(functionOne()));
console.log(functionOne(2));*/

/*function functionOne(x)
{
    alert(x);
}

functionOne(2);

function functionTwo(var1,callback){
  callback(var1);
}
functionTwo(3,functionOne);

functionTwo(4,function(x){
alert(x);
});

function functionThree(var3,callback1,callback2){
    callback1(Var3);
    callback2(var3);
}
functionThree(5,functionOne,functionOne);*/

function functionOne(x)
{
    alert(x);
};

function functionTwo(y)
{
    alert(y);
}

functionOne(1);
functionTwo(2);

function functionThree(z,callback1,callback2){
    callback1(z);
    callback2(z);
}
//functionThree(3,functionOne,functionTwo);

/*functionThree(z,functionOne,function(){
    alert(z+3);
}
functionOne(z);
);*/

functionThree(2,functionOne,function(x){
    alert(x+2);
})