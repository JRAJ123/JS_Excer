document.getElementById('button').addEventListener('click',loadData);
function loadData(){
    //create an XHR object
    const xhr=new XMLHttpRequest();

    //open
    xhr.open('GET','Data.txt',true);

    xhr.onprogress=function(){
        console.log('READYSTATE',xhr.readyState);
    }

    xhr.onprogress=function(){
        console.log('READYSTATE',xhr.readyState);
    }
    xhr.onload=function(){
        console.log('READYSTATE',xhr.readyState);
        if(this.status===200){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML='<h1>${this.responsetext}</h1>'
        }
    }
    xhr.onerror=function(){
        console.log('Request Error...');
    }
}
