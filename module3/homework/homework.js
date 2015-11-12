// -- --------------------------------------------------------------------------------------------------------------- --
// Crea una función de calendario perpetuo que al pasarle una fecha te diga en que día de la semana cae,
// pudiéndole pasar cualquier fecha del pasado o del futuro. El día deberá devolverlo en formato textual, es
// decir, Lunes, Martes, etc... Una pregunta interesante que debes plantearte: ¿ocurrirá algo extraño si le pasas
// una fecha anterior al epoch, es decir, anterior a 1972? Prueba con la fecha del descubrimiento de América, a ver si
// te dice en qué día de la semana cayó ;-)
// -- --------------------------------------------------------------------------------------------------------------- --

/**
 * @param {Date} date
 */
function dayOfWeekNamesOf(date){
    var dayOfWeekNames = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    return dayOfWeekNames[date.getDay()];
}

// -- --------------------------------------------------------------------------------------------------------------- --
// Crea una función capaz de convertir una cadena con la fecha y hora en formato corto como este "dd/mm/yyyy hh:mm:ss",
// en una variable de tipo fecha en JavaScript. Esta función implica sobre todo el procesamiento de cadenas con una
// posterior conversión a fecha partiendo de sus partes.
//
// Ten en cuenta que
//   a) Puede faltar la hora o la propia fecha (ser solo la hora, pero sin fecha delante, con lo cual sería el día de
// hoy a esa hora)
//
//   b) que el año podría estar expresado con 2 o 4 números.
//
// Recomendación: Utilizar expresiones regulares para analizar la cadena y validarla.
// -- --------------------------------------------------------------------------------------------------------------- --
