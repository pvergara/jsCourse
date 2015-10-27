function foo(){
    with (Math){
        return PI*exp(2)*exp(3);
    }
}

console.log("foo = {0}".format(foo()));