    // Realizado por: Brayan Hernandez
    /*
    Esta funcion se encarga se leer, organizar e imprimir los elementos en la tabla general
    obtenidos a partir del archivo JSON suministrado
    */
    function printTable() {
        // Mostramos la division que nos indica que el documento se esta cargando
        $('#loading').show();
        // Definimos la url del archivo json
        var url = "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json";
        $.getJSON(url, function(data) {
            // Creamos una tabla para organizar los archivos leidos del archivo JSON
            var $table = $('<table class="table"></table>');
            var $trh = $('<tr></tr>');
            // Definimos los encabezados de la tabla
            var encabezados = ["Atleta", "Edad", "País", "Año", "Fecha", "Deporte", "Oro", "Plata", "Bronce", "Total"];
            $.each(encabezados, function(k, v) {
                // añadimos los encabezados 
                $trh.append('<th>' + v + '</th>');
            });            
            $table.append($trh);
            // Usando un ciclo each y JSON.parse iteramos el archivo JSON para obtener y 
            // organizar la información
            $.each(data, function(key, val) {
                var $tr = $('<tr></tr>');
                var jsonRow = JSON.stringify(val);
                // creamos un indice para no añadir el elemento vacio a la tabla
                var i = 0;
                JSON.parse(jsonRow, function(k, v) {
                    if (i < 10) {
                        $tr.append('<td>' + v + '</td>');
                        i++;
                    }
                })
                // añadimos los elementos y formamos una fila, esto se repite el numero de filas 
                // que suministra el archivo JSON
                $table.append($tr);
            });
            // Una vez cargado y organizado el archivo JSON ocultamos la pantalla de carga 
            $('#loading').hide();
            $('#loading').css('margin-top', '0px');
            // Añadimos la tabla a nuestro html en la div #table 
            $('#table').append($table);
        });
    }