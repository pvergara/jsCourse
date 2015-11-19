function LittleMartian(name, color, x, y, initialShoots){
    var _name ="";
    var _color = "";
    var _x = 0;
    var _y = 0;
    var _initialShoots = 0;

    this.getName = function(){
        return _name;
    };
    this.setName = function(newName){
        _name = newName;
    };
    this.getColor = function(){
        return _color;
    };
    this.setColor = function(newColor){
        _color = newColor;
    };

    this.getX = function () {
        return _x;
    };
    this.setX = function (x) {
        if(x<0) x=0;
        if(x>100) x=100;
        _x = x;
    };

    this.getY = function () {
        return _y;
    };
    this.setY = function (y) {
        if(y<0) y=0;
        if(y>100) y=100;
        _y = y;
    };
    this.getInitialShoots = function () {
        return _initialShoots;
    };
    this.setInitialShoots = function (initialShoots) {
        if(initialShoots<0) initialShoots=0;
        if(initialShoots>50) initialShoots=50;
        _initialShoots = initialShoots;
    };

    this.setName(name);
    this.setColor(color);
    this.setX(x);
    this.setY(y);
    this.setInitialShoots(initialShoots);


    LittleMartian.prototype.toString = function () {
        return "{0} - {1}".format(this.getName(),this.getColor());
    };
}

var martianObject = new LittleMartian("E.T.","Blue",101,-1,10);
var anotherMartianObject = new LittleMartian("IT","Black",1,1,52);

alert(martianObject.getName());
martianObject.setName("E.T. the extraterrestrial");
alert(martianObject.getName());

alert(martianObject.getColor());

alert(martianObject.getX());
alert(martianObject.getY());
alert(martianObject.getInitialShoots());

alert(martianObject);

alert(anotherMartianObject.getName());
alert(anotherMartianObject.getName());

alert(anotherMartianObject.getColor());

alert(anotherMartianObject.getX());
alert(anotherMartianObject.getY());
alert(anotherMartianObject.getInitialShoots());

alert(anotherMartianObject);
