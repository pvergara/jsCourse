var i = 0;

var res = "";

for(;i < 10;i++){
    res += i;
    console.log("res: " + res);
}

// ------------------------------------------

var res = "";
for(var i = 0,j = 10;i<j;i++){
    res += i;
    console.log("res: " + res);
}

// ------------------------------------------

var res = "";
for(var i = 0;;i++){
    res += i;
    if(i>9) break;
    console.log("res: " + res);
}
// ------------------------------------------

var res = "";
for(var i = 0;i<10;){
    res += i;
    console.log("res: " + res);
    i++;
}

// ------------------------------------------

var res = "";
var i = 0
for(;;){
    res += i;
    if(i>9) break;
    i++;
    console.log("res: " + res);
}