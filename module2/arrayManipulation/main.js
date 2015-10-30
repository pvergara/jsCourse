console.log("First.. what happens if I make array2 equals to array1?");
var array1 = [1,2,3,4,5];
var array2 = array1;

console.log("array1==array2?: {0}".format(array1 == array2));


console.log("array1==array2?: {0}",array1 == array2);
array2[0]=123;

console.log("ok... now I've update the array2 first element... but... what happeds with array1?... There ir is: {0}".format(array1));
console.log("Hey... it seems that the second array are REALLY equal to the memory space that 'points' the first array.");
console.log("Ummm.. ok.. but.. what if I want to COPY THE ELEMENTS but now the reference itself?. Then I must to use slice without params.");


console.log("Om, I 'slice' the entire array1 over the array3 ...");
var array3=array1.slice();
console.log("It's the array3 equals to array1? {0}".format(array1==array3));

console.log("Finally I will change again the first element of the copy (array3).");


array3[0]=666;

console.log("Lets shot the two arrays. array1: {0} and array3: {1}".format(array1,array3));

