//Define UI Vars
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*var scores,roundScore,activePlayer,dice,gamePlaying;
init();
// dice=Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+activePlayer).textContent=dice;
//var x=document.querySelector('#score-0').textContent;
//console.log(x);
document.querySelector('.btn-roll').addEventListener('click',function () {
    if(gamePlaying){
   var dice=Math.floor(Math.random()*6)+1;
   var diceDom=document.querySelector('.dice');
   diceDom.style.display='block';
   diceDom.src='dice-'+dice+'.png'; 
    
   if(dice!==1){
       roundScore+=dice;
       document.querySelector('#current-'+activePlayer).textContent=roundScore;
   }else{
    activePlayer===0 ? activePlayer=1: activePlayer=0;
       roundScore=0;
       document.querySelector('current-0').textContent='0';
       document.querySelector('current-1').textContent='0';
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
       document.querySelector('.dice').style.display='none';
   }
   document.querySelector('.btn-new').addEventListener('click',init);
   function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=1;
    document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-1').textContent='Player 1';
document.getElementById('name-2').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('Winner');
document.querySelector('.player-1-panel').classList.remove('Winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add ('active');
   }
});
document.querySelector('.btn-roll').addEventListener('click',function () {
    scores[activePlayer]+=roundScore;
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    //update ui 
    //document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    //check if player won the game
if(scores[activePlayer]>=20){
    document.querySelector('#name-'+activePlayer).textContent='Winner!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
}else{
//nextPlayer
nextPlayer();
}
});

function nextPlayer(){
    //nextPlayer
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}*/

var scores,roundScore,activePlayer,dice,gamePlaying;
init();

//dice=Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+activePlayer).textContent=dice;
//var x=document.querySelector('#score-0').textContent;
//console.log(x);

/*document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';*/

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    //random number
    var dice=Math.floor(Math.random()*6)+1;
  //display the result
  var diceDOM=document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';
  
  //update the rounded score if the rolled number is not 1
  if(dice!==1){
     //add score
     roundScore+=dice;
     document.querySelector('#current-'+activePlayer).textContent=roundScore;
  }else{
      //nextplayer
     /* activePlayer===0 ? activePlayer=1:activePlayer=0;
      roundScore=0;
      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('player-1panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';*/
    nextPlayer();


  }
}

} );

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
    //Add current score to global score
scores[activePlayer]+=roundScore;

    //update the ui
document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    //check if the palyer won the game
if(scores[activePlayer]>=20){
    document.querySelector('#name-'+activePlayer).textContent='Winner!';
    document.querySelector('dice').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('Winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    gamePlaying=false;
}else{
    //nextPlayer
    nextPlayer();
}
    }
});

function nextPlayer(){
    activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('player-1panel').classList.toggle('active');
  document.querySelector('.dice').style.display='none';   
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScore=0;
    activePlayer=1;
     gamePlaying=true;

    document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player  1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('Winner');
document.querySelector('.player-1-panel').classList.remove('Winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}