//Realizado por: Brayan Hernandez
/*
Esta función sera encargada de obtener, organizar e imprimir
el archivo json suministrado
*/
function printCategory() {
    // mostramos la pantalla de carga mientras recibimos y organizamos el archivo json.
    $('#loading').show();
    //definimos la url del archivo
    var url = "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json";
    $.getJSON(url, function (data) {
        // creamos una tabla usando jquery asiganando un estilo de bootstrap
        var $table = $('<table class="table"></table>');
        var $trh = $('<tr></tr>');
        var $tr = $('<tr></tr>');
        // definimos las tres categorias
        var gold = 0;
        var silver = 0;
        var bronze = 0;
        // hacemos un arreglo con los 3 encabezados 
        var encabezados = ["Oro", "Plata", "Bronce"];
        // Hacemos un ciclo  $.each en donde asignamos el encabezado y su respectivo boton,
        // ademas de esto realizamos la asignación del veneto onclick, que en este caso será
        // abrir una ventana emergente 
        $.each(encabezados, function (k, v) {
            var onclick = "window.open('../html/descripciones/" + v + ".html','descripcion','width=250,height=300,scrollbars=NO')";
            $trh.append('<th> <button id="' + v + 'button" onclick="' + onclick + '"></button>' + v + '</th>');
        });
        $table.append($trh);
        // Añadimos la fila a la tabla y leemos el archivo JSON usando un ciclo each y 
        // JSON.parse, en cada iteración del ciclo each obtenemos una fila, y en la 
        // iteracion del ciclo parse una celda.
        $.each(data, function (key, val) {
            var jsonRow = JSON.stringify(val);
            JSON.parse(jsonRow, function (k, v) {
                // verificamos el key devuelto por la función y en caso de que coincida con nuestros
                // encabezados los vamos sumando para hallar el total
                if (k == "gold") {
                    gold = gold + v;
                }
                if (k == "silver") {
                    silver = silver + v;
                }
                if (k == "bronze") {
                    bronze = bronze + v;
                }
            })
        });
        $tr.append("<td>" + gold + "</td><td>" + silver + "</td><td>" + bronze + "</td>");
        // una vez teniendo el acumulado de cada categoria lo añadimos a la tabla
        $table.append($tr);
        // Ocultamos el div que se muestra cuando se esta cargando la tabla
        $('#loading').hide();
        $('#loading').css('margin-top', '0px');
        // Añadimos al elemento div #tablecat la tabla correspondiente a las categorias 
        $('#tablecat').append($table);
    });
}