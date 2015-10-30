var multiDimensionalArray = [
    ["Dream Theater","Flower kings","Kansas"],
    ["Danzig","Ghost","Cradle of filth"]
];

for(var row in multiDimensionalArray){
    switch(row) {
        case "0": //index really = "0" . Why?!?!?!?
            console.log("Prog bands.");
            break;
        case "1": //index really = "1" . Why?!?!?!?
            console.log("Underground bands");
            break;
        case 0:
            console.log("0 = Prog bands.");
            break;
        case 1:
            console.log("1 = Underground bands");
            break;
    }


    for(var cell in multiDimensionalArray[row]){
        console.log("Band: {0}".format(multiDimensionalArray[row][cell]));
    }
    console.log("\n");
}

console.log("Band: {0}".format(multiDimensionalArray[0][0]));
