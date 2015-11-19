function AClass(newName) {
    Object.defineProperty(this, "name",
        {
            value: newName,
            writable: false
        }
    );
}

var anObject = new AClass("An object");
alert(anObject.name);
anObject.name = "let's try an see what happens";
alert(anObject.name);
