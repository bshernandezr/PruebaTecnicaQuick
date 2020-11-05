// Realizado por: Brayan Hernandez
/*
Función para obtener el nombre de usuario por medio 
de la url
*/
function getUser() {
    // definimos una constante que sera la url de la ventana actual
    const a = window.location.href;
    // definimos una variable para decodificar nuestro usuario
    var username = null;
    var flag = 0;
    // definimos una variable bandera que se volvera 1 a partir del indice que tenga el caracter "="
    for (var index = 0; index < a.length; index++) {   
        // Tenemos en cuenta si es la primera asignación de username comprobando si es o no nulo.  
        // en caso de que sea nulo asignamos el a[indice] y en el caso de que no conformamos 
        // el nombre de usuario haciendo concatenaciones   
        if (flag == 1 && username != null) {      
            username = username + a[index];
        }
        if (flag == 1 && username == null) {
            username = a[index];
        }
        if (a[index] == "=") {
            flag = 1;
        }
    }
    // retornamos el nombre de usuario 
    return username;
}