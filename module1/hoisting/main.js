function foo(){
    console.log("The value of bar is: '{0}'".format(bar));
    var bar = "bar";
    console.log("The value of bar is: '{0}'".format(bar));
}

foo();