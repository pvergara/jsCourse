var anotherPerson = null;

if (anotherPerson != null && anotherPerson.Rol == "Administrator")
    console.log("Welcome Administrator!!!");
else
    console.log("It's not an Administrator");


//REMEMBER ALWAYS THE ORDER MATTERS!!!!
var person = null;

if (person.Rol == "Administrator" && person == null)
    console.log("Welcome Administrator!!!");
else
    console.log("It's not an Administrator");

