var add = function (x, y) {
    return x + y;
};

var anotherAdd = function (x, y) {
    return x + y;
};


console.log(
    "add function it's equal to anotherAdd function with the same code but defined as anon functions?: {0}".
        format(add == anotherAdd)
);