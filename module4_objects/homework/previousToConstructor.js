function AClass(hello){
    var _hello=hello;

    AClass.prototype.getHelloFromProto = function(){
        console.log("\tHey I'm inside of {0}".format(arguments.callee.name));
        return _getHelloFromVar();
    };

    this.getHello = function (){
        console.log("\tHey I'm inside of {0}".format(arguments.callee.name));
        return _getHello();
    };

    //Private methods
    function _getHello(){
        console.log("\tHey I'm inside of {0}".format(arguments.callee.name));
        return _hello;
    }

    var _getHelloFromVar = function (){
        console.log("\tHey I'm inside of {0}".format(arguments.callee.name));
        return _hello;
    };
}


var object = new AClass("hello");
var object2 = new AClass("Helloween");

console.log("\t\t--TYPE_OF--");
console.log("typeof object.getHelloFromProto: {0}".format(typeof object.getHelloFromProto));
console.log("typeof object.getHello: {0}".format(typeof object.getHello));
console.log("typeof object._getHello: {0}".format(typeof object._getHello));
console.log("typeof object._getHelloFromVar: {0}".format(typeof object._getHelloFromVar));
console.log("\t\t--INVOKING--");
console.log("The return value of object.getHelloFromProto() is: {0}".format(object.getHelloFromProto()));
console.log("The return value of object.getHello() is: {0}".format(object.getHello()));
