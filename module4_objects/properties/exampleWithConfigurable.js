function AClass() {
    var _name ="";
    var getName = function () {
        console.log("getName invoked");
        return _name;
    };
    var setName = function (newName) {
        console.log("setName invoked");
        _name = newName;
    };
    Object.defineProperty(this, "name",{configurable: true});
    Object.defineProperty(this, "name",{get: getName});
    Object.defineProperty(this, "name",{set: setName});
}
var anObject = new AClass();
anObject.name = "Un anObject";
alert(anObject.name);