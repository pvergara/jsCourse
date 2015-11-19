var objeto = new Object();
Object.defineProperty(objeto, "nombre",
    {
        value: "Mi nombre",
        writable: true,
        enumerable: true,
        configurable: true
    }
);

objeto.nombre = "Un anObject"; //Escribimos
alert(objeto.nombre); //Y leemos