var scores,roundScore,activePlayer,dice;
scores=[0,0];
roundScore=0;
activePlayer=0;
/*dice=Math.floor(Math.random()*6)+1;
console.log(dice);
document.querySelector('#current-'+ activePlayer).textContent=dice;
var x=document.querySelector('#score-0').textContent;
console.log(x);*/
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';

document.querySelector('.btn-roll').addEventListener('click',function()
{
    var dice=Math.floor(Math.random() * 6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
});

