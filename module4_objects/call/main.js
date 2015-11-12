function assignNameAndAge(name,age){
    this.Name = name;
    this.Age = age;
}

var person = {};
assignNameAndAge.call(person,"Peter",35);

//The "bad part" of this example it's that we lose the ability to use "IntelliSense" on IDE's
console.log("person.Name: {0}".format(person.Name));
console.log("person.Age: {0}".format(person.Age));
