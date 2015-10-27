//HEY.. THAT WORKS ON FF!!!! :-)
function foo(a=10, b=10) {
    console.log("'a' value = {0}".format(a));
    console.log("'b' value = {0}".format(b));
}

foo();
foo(1, 2);
foo();