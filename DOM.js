/*function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }

  var val=document.forms
  
  val=document.images;
  val=document.scripts;
  val=document.class;
  console.log(val);*/

  //create element
  const li=document.createElement('li');
  li.className='collectiom-item';
  li.id='new-item';
  li.setAttribute('First_Attribute','first');
  li.appendChild(document.createTextNode('This is TextNode'));
  //document.querySelector('ui.collection').appendChild(li);
  const link=document.createElement(a);
  console.log(li);

