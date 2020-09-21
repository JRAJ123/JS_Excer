var elem=document.getElementsByClassName('flex-container')[0];
/*console.log('elem=------------->',elem);
var elemid=document.querySelector('#container');
//var elemid=document.getElementById('container');
console.log('elemid---------->',elemid);
elem.style.color='red';
elemid.style.backgroundColor='yellow';
elemid.style.fontSize='76px';
var div=document.createElement('div');
console.log('div --------->',div);
div.innerText='This is the div elemtne inner text';
div.style.color='green';
elem.append(div);*/

var todolist=[
    {
        title:'Todo 1',
        status:'new',
    },
    {
        title:'Todo 1',
        status:'new',
    },
    {
        title:'Todo 2',
        status:'In-Progress',
    },
    {
        title:'Todo 3',
        status:'Done',
    },
    {
        title:'Todo 4',
        status:'new',
    },
    {
        title:'Todo 5',
        status:'done',
    }
];


var head=document.createElement('h1');
console.log('h1----->',head);
var counter=0;
head.innerText='My ToDo List';
head.style.color='red';
elem.appendChild(head);
var ul=document.createElement('ul');
var btn=document.createElement('button');
/*var li=document.createElement('li');
li.title.innerText='TODO';
li.status.innerText='new';*/

btn.innerText='Click';
function increaseCounter(){
    counter++;
    console.log('Counter=---------->',counter);
    var li=document.createElement('li');
    li.innerText='Some to do with index'+counter;
    ul.appendChild(li);
}
btn.addEventListener('click',increaseCounter);
elem.append(head,ul,btn);

