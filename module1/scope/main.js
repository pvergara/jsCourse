var globalNumberOfCall = 0;

function add(a, b) {
    console.log(localResult);
    var localResult = a + b;
    globalNumberOfCall++;
    console.log(localResult);
    return localResult;
}

add(1,2);
add(2,3);
add(3,5);

console.log(globalNumberOfCall);
console.log(typeof(localResult));
