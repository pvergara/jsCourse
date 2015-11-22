/*
* Además, para reforzar y practicar te propongo los siguientes ejercicios:
    Practica la creación de objetos anónimos básicos con la sintaxis JSON que hemos visto. JSON es un formato ligero y
  fácil de crear y leer que se usa constantemente en aplicaciones web que impliquen intercambio de información con el
  servidor, en especial en aplicaciones AJAX y SPA.

    Puedes aprender el formato (es bastante sencillo) en el sitio web oficial del mismo.

    Te propongo que crees primero un objeto sencillo (los datos básicos de una persona: nombre, apellidos,
  fechaNacimiento, estatura, por ejemplo).

    Muestra por pantalla la fecha de nacimiento de uno de los objetos JSON que hayas creado de esta manera.

    Añádele datos más avanzados que impliquen otros objetos, a su vez definidos como JSON. Por ejemplo, a tus objetos
  iniciales con datos básicos añádeles un campo direccion que sea a su vez un objeto JSON que especifique los miembros
  de la dirección por separado: calle, cp, ciudad y pais.

    ¿Cómo accederías a mostrar por pantalla el nombre de la ciudad en la que vive una de las personas representadas por
  tu objeto JSON?
 */
var objectFromJson ={
    "name": "Freddy",
    "secondName": "Mercury",
    "birthDate": "1950-01-01",
    "height": 1.80,
    "address":{
        "street": "Rue Morgue",
        "zip": "12345",
        "city": "London",
        "country": "England"
    }
};

alert(objectFromJson.birthDate);
alert(objectFromJson.address.city);
