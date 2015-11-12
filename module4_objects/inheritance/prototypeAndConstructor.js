function BaseClass(){
    this.Name="";
    BaseClass.prototype.showName = function(){
      console.log("name: {0}".format(this.Name));
    };
}

function DerivedClass(){
    this.secondName="";
}

DerivedClass.prototype = new BaseClass();
DerivedClass.prototype.constructor = DerivedClass;

var objectOfDerivedClass = new DerivedClass();
objectOfDerivedClass.Name="my name";
objectOfDerivedClass.SecondName="my second name";

objectOfDerivedClass.showName();

console.log("objectOfDerivedClass instanceOf DerivedClass: {0}".format(objectOfDerivedClass instanceof DerivedClass));
console.log("objectOfDerivedClass instanceOf BaseClass: {0}".format(objectOfDerivedClass instanceof BaseClass));

console.log("objectOfDerivedClass.hasOwnProperty('Name'): {0}".format(objectOfDerivedClass.hasOwnProperty('Name')));
console.log("objectOfDerivedClass.hasOwnProperty('SecondName'): {0}".format(objectOfDerivedClass.hasOwnProperty('SecondName')));

