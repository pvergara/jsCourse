// -- ------------------------------------------------------- --
// --               METHOD INVOCATION PATTERN                 --
// -- ------------------------------------------------------- --

//Object from anon class that extends Object class
console.log("creating an object using anon class ");
var object = {
    value: 0,
    //ANON FUNCTION.. yeap... BUT DEFINED INSIDE!!!! an object
    increment : function (number){
        this.value += typeof number === 'number'? number : 1;
    }
};

console.log("it's object instance of Object class?: {0}".format(object instanceof Object));
console.log("it's object instance of Function class?: {0}".format(object instanceof Function));


object.increment();
console.log("object.value: {0}".format(object.value));
object.increment(10);
console.log("object.value: {0}".format(object.value));


// -- ------------------------------------------------------- --
// --              FUNCTION INVOCATION PATTERN                --
// -- ------------------------------------------------------- --
console.log("creating an 'add' function using anon function");

//Anon function assigned to a global variable
//The function, in this case, according to the book, belongs to a "Function object"
var add = function(a, b){
    console.log("it's 'this' instance of Object class?: {0}".format(this instanceof Object));
    console.log("it's 'this' instance of Function class?: {0}".format(this instanceof Function));
    return a + b;
};
console.log("it's 'add' instance of Object class?: {0}".format(add instanceof Object));
console.log("it's 'add' instance of Function class?: {0}".format(add instanceof Function));

add(5,3);


