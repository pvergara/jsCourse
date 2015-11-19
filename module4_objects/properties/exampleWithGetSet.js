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
    Object.defineProperty(this, "name",{
            get: getName,
            set: setName
        }
    );
}
var anObject = new AClass();
anObject.name = "Un anObject";
alert(anObject.name);