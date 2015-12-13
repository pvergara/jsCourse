/*
 *      Crea una página que contenga un botón. Cada vez que pulses el botón abre una nueva ventana mediante código que
 * muestra una página tuya, propia, dentro de la misma carpeta (necesitarás llamar a una función JavaScript desde el
 * evento onclick del botón. Ya lo hemos visto anteriormente aunque no hayamos estudiado los eventos).
 *
 *      Realiza las siguientes variaciones del ejercicio probándolas al menos en Chrome, Firefox e Internet Explorer
 * (si trabajas con Windows):
 *
 *   · Simplemente abre una ventana, con el tamaño y elementos por defecto.
 *   · Abre la ventana dándole un tamaño determinado.
 *   · Ahora quítale la barra de herramientas, la de direcciones y la de estado. ¿Varía su tamaño al retirar estos
 * elementos o queda el mismo que antes?
 *   · Desde la ventana que la ha abierto (la original del botón), intenta cambiar por código el título de la nueva
 * ventana, justo después de haberla abierto. ¿Te permite hacerlo? ¿Y si abres una página ajena, por ejemplo
 * www.google.com?
 *   · Haz que si la ventana auxiliar está abierta, al pulsar el botón de nuevo se cierre. Si lo vuelves a pulsar que
 * se abra otra vez. Es decir, que el mismo botón sirva para abrir o cerrar la ventana en función de si esta ya existe
 * o no.
 *   · Como de momento no sabemos crear eventos bien, utiliza un temporizador que, tras haber abierto la ventana,
 * monitorice cada segundo si la ventana auxiliar está abierta o no. Si se ha cerrado, que cancele el temporizador y
 * que llame a la función original para que vuelva a mostrar la ventana y reinicie el temporizador.
 * ¿Te lo permite el navegador? Si no te lo permite ¿a qué es debido? ¿cómo detectas que no te lo ha permitido?
 * (Pista: ¿qué devuelve window.open en ese caso?). Sustituye lo de volver a abrir la ventana por que simplemente se
 * muestre un alert indicando que la ventana auxiliar se ha cerrado, para comprobar que, efectivamente lo estás
 * haciendo bien.
 *   · En la página que carga dentro de la venta auxiliar deberás detectar con el mismo método (temporizadores) si se
 * ha cerrado la página original que la abrió, cerrando automáticamente la ventana auxiliar en dicho caso.
 * De este modo te aseguras de que la ventana auxiliar no va a quedar colgando por ahí sin su "madre".
 *   · En la página que se abrirá en la ventana auxiliar crea una variable global de nombre "nombreASaludar" con una
 * cadena vacía, y un método "saludar" que mostrará un simple alert con un "Hola " + nombreASaludar. Accede a la
 * variable global desde la ventana que la ha abierto e introduce un nombre cualquiera. Luego llama al método de
 * saludar y comprueba si se muestra el nombre apropiado. Haz algo similar con la ventana "madre" pero desde la
 * ventana hija (puedes hacerlo al pulsar un botón en esta última).
 */


document.getElementById("button").onclick = function(){
    window.open("http://develandbeyond.wordpress.com");
};