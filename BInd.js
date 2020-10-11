/*var geeks={
    name:'ABC',
    printFunc:function(){
        document.write(this.name);
    }
}

//var printFunc3=geeks.printFunc();
//printFunc3();

var printFunc3=geeks.printFunc.bind(geeks);
printFunc3();
//var printFunc2= geeks.printFunc(); 
//printFunc2();*/

var geeks1 = { 
    name : "ABC", 
    article: "C++"
    } 
    //object geeks2 
      var geeks2 = { 
    name : "CDE", 
    article: "JAVA"
    } 
        
      //object geeks3 
      var geeks3 = { 
    name : "IJK", 
    article: "C#"
    } 
      
    function printVal(){ 
       document.write(this.name+" contributes about "+this.article+"<br>"); 
       } 
            
      /*var printFunc2= printVal.bind(geeks1); 
       //using bind()  
       // bind() takes the object "geeks1" as parameter// 
      printFunc2(); 
        
      var printFunc3= printVal.bind(geeks2); 
      printFunc3(); 
        
      var printFunc4= printVal.bind(geeks3); 
      printFunc4(); 

      var printFunc2=printVal.bind(geeks1);
      printFunc2();

      var printFunc3=printVal.bind(geeks2);
      printFunc3();

      var printFunc4=printVal.bind(geeks3);
      printFunc4();*/

      const module={
          x:42,
          getX:function(){
              return this.x;
          }
      };
      const   unboundGetX=module.getX;
      console.log(unboundGetX());

      const boudnGetX=unboundGetX.bind(module);
      console.log(boudnGetX());