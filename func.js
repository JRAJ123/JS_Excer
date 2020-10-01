/*function add(num1,num2){
    const result=num1+num2;
 alert('this is the result:'+result);
}

add(2,3);*/

/*function getUser{
    console.log('this is syntax error');
}*/
/*$( "a" ).attr( "href", "allMyHrefsAreTheSameNow.html" );
 
$( "a" ).attr({
    title: "all titles are the same too!",
    href: "somethingNew.html"
});*/

$(function(){
    $('p').click(function(){
        $(this).hide();
    });
});