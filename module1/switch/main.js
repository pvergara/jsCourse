var x = 11;
var message = "";
switch (true){
    case x > 0 && x <10:
        message = "x > 0 && x <10";
        break;
    case x > 0 && x < 20:
        message = "x > 0 && x < 20";
        break;
    case x < 0 || x >20:
        message = "x < 0 || x >20";
        break;
    default:
        message = "No cases";
        break;
}
console.log(message);