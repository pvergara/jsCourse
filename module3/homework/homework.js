//Crea una función de calendario perpetuo que al pasarle una fecha te diga en que día de la semana cae,
// pudiéndole pasar cualquier fecha del pasado o del futuro. El día deberá devolverlo en formato textual, es
// decir, Lunes, Martes, etc... Una pregunta interesante que debes plantearte: ¿ocurrirá algo extraño si le pasas
// una fecha anterior al epoch, es decir, anterior a 1972? Prueba con la fecha del descubrimiento de América, a ver si
// te dice en qué día de la semana cayó ;-)

/**
 * @param {Date} date
 */
function dayOfWeekNamesOf(date){
    var dayOfWeekNames = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    return dayOfWeekNames[date.getDay()];
}