//Every "function object" is also created with a prototype property....
function hello(){
  var theCode="blablebli";
    var a = 1 + 2;
}

//....Its value is an object with a constructor property whose value is the function:

//this way we can't see the code...
console.log(hello.prototype.constructor);
//...because of this we need to use alert
alert(hello.prototype.constructor);
//this line it's SLIGHTLY DIFFERENT!!! and produces different results
alert(hello.constructor);

//HEY... the next code returns a SIMILAR result that the "hello.prototype.constructor" ones BUT...
alert(hello.toString());
//... look at the typeof of two both :-)
alert(typeof hello.toString());
alert(typeof hello.prototype.constructor);


