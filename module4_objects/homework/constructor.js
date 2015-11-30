/*
 * Define el constructor de un objeto de tipo Animal. Este tipo va a tener una serie de propiedades y métodos como:
 *      nombre (cadena),
 *      numPatas (numérico),
 *      tieneCola (booleano),
 *      tieneAlas (booleano),
 *      color (cadena),
 *      fechaNacimiento (tipo fecha),
 *      sonido (cadena de texto),
 *      posicion (numérico, valor por defecto 0)
 *
 * Los métodos
 *      andar (que sumará 1 a su posición),
 *      correr (que sumará 3)
 *      hablar (que mostrará en un alert el sonido que hace el animal).
 *
 *  Crea este constructor y crea a partir de él (con new) un par de animales diferentes y llama a alguno de sus métodos
 * y muestra por pantalla alguna de sus propiedades.
 *
 *  Una vez tengas la clase básica, ahora asegúrate de que los parámetros que se te pasan son del tipo adecuado.
 * Para ello crea sendas propiedades (haz algunas usando métodos y clausuras, y otras usando el método defineProperty,
 * así practicarás ambos) y asegúrate de que no se puede acceder directamente al valor de la variable privada/local
 * subyacente que almacena el dato. En el caso del número de patas, si tiene cola o no y si tiene alas o no, haz que
 * sean propiedades de solo lectura, es decir, que no se pueda cambiar su valor una vez que se ha creado la clase
 * (solo se pueden establecer esos valores en el constructor).
 *
 *  Haz que el constructor admita de manera opcional la fecha actual, de modo que si no se especifica en el constructor
 * que se le ponga la fecha actual (pista: necesitas usar arguments).
 */
/**
 * @constructor
 * @param {string} name
 * @param {number} numberOfLegs
 * @param {boolean} hasTail
 * @param {boolean} hasWings
 * @param {string} colour
 * @param {Date} dateOfBirth
 * @param {string} sound
 * @param {number} position
 * @constructor
 */
function Animal(name,numberOfLegs,hasTail,hasWings,colour,dateOfBirth,sound,position){
    var _name;
    var _hasTail;
    var _hasWings;
    var _numberOfLegs;
    var _colour = colour;
    var _dateOfBirth = dateOfBirth;
    var _sound = sound;
    var _position;

    this.setName = function (name) {
        if(typeof name == "string")
            _name = name;
        else {
            _name = "";
        }
    };
    this.getName = function () {
        return _name;
    };
    this.setName(name);
    /**************************************/
    var _setHasTail = function (hasTail) {
        if(typeof hasTail == "boolean") {
            _hasTail = hasTail;
        }
    else
        _hasTail = false;
    };
    _setHasTail(hasTail);

    function getHasTail(){
        return _hasTail;
    }
    Object.defineProperty(this,"HasTail",{"get":getHasTail});

    this.setPosition = function(newPosition){
        if(typeof newPosition === "number")
            _position = newPosition;
        else
            _position = 0;
    };

    this.setPosition(position);


    this.walk = function (){
        _position++;
    };

    this.run = function (){
        _position += 3;
    };

    this.speak = function (){
        alert(_sound);
    };

    this.getPosition = function(){
        return _position;
    }
}

var gary = new Animal("Gary",4,true,false,"Brown&White",new Date(1,0,2012),"miau",0);
var rio = new Animal("Rio",4,true,false,"Gray",new Date(6,5,2011),"guau",10);
var rioTheClownFish = new Animal("Rio the clown-fish",0,true,true,"Rainbow-colored",new Date(5,2,2001),"bluuub",-10);

//noinspection SpellCheckingInspection
var anApe = new Animal("The librarian",0,false,false,"Brown",new Date(24+14,6+7,201),"ooookkkk",5000);

//rio.speak();
console.log("Animal name is: {0}".format(rio.getName()));
console.log("Has this animal tail?: {0}".format(rio.HasTail));
console.log("\t\t-------------------------------\n");

//gary.speak();
console.log("Animal name is: {0}".format(gary.getName()));
console.log("Has this animal tail?: {0}".format(gary.HasTail));
gary.walk();
gary.run();
console.log("\t\t-------------------------------\n");

//rioTheClownFish.speak();
console.log("Animal name is: {0}".format(rioTheClownFish.getName()));
console.log("Has '{0}' tail?: {1}".format(rioTheClownFish.getName(),rioTheClownFish.HasTail));
console.log("\t\t-------------------------------\n");


//anApe.speak();
console.log("Animal name is: {0}".format(anApe.getName()));
console.log("Has '{0}' tail?: {1}".format(anApe.getName(),anApe.HasTail));

console.log("'{0}' position before start to run: {1}".format(anApe.getName(),anApe.getPosition()));
anApe.run();
anApe.run();
anApe.run();
console.log("'{0}' position AFTER run: {1}".format(anApe.getName(),anApe.getPosition()));

anApe.setPosition(-1 * anApe.getPosition());
console.log("Now... because of the magic fields close to the axis the new position of the '{0}' it's: {1}".format(anApe.getName(),anApe.getPosition()));
anApe.setPosition("-1");
console.log("And now... the new position of the '{0}' it's: {1}".format(anApe.getName(),anApe.getPosition()));

console.log("\t\t-------------------------------\n");
