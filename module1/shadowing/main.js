var aVariable = "global variable";
var anotherVariable = "another global variable";

globalVariableSetedButNotDefined = "globalVariableSetButNotDefined";

console.log("The global variable before call the function that shadows it: {0}".format(aVariable));

function add(a, b){
    console.log("The global variable that has shadowed inside the function but has been set after this line: {0}".format(aVariable));
    console.log("Another global variable do not defined inside the function: {0}".format(anotherVariable));
    console.log("Another variable non declared but really used inside the this function: {0}".format(typeof(aNonDefinedVariableTilThisLine)));
    console.log("The global variable that has non been defined but has really defined: {0}".format(globalVariableSetedButNotDefined));

    var aVariable ="local variable that shadows the global one";
    console.log("The global variable that has shadowed inside the function NOW set before this line: {0}".format(aVariable));

    //HEY IT'S IMPORTANT TO TAKE ACCOUNT THAT THERE'S NO "var" HERE!!!
    aNonDefinedVariableTilThisLine="strange behaviour variable";
    console.log("Another variable non declared now set before this line: {0}".format(aNonDefinedVariableTilThisLine));
}
console.log("The global variable after call the function that shadows it: {0}".format(aVariable));

add(1,2);