// este script tiene la función de verificar los datos ingresados por el usuario en la 
// ventana de login
// verificamos si se da el evento click en el boton de nuestro formulario
$('#envio').click(function name() {
    var values = {};
    // Obtenemos los valores de los inputs del formulario
    $.each($('#logform').serializeArray(), function (i, field) {
        values[field.name] = field.value;
    });   
    // Verificamos que el campo usuario no sea vacio, para que el navegador envie
    // un mensaje por nosotros, ya que los inputs tienen la propiedad required activada 
    if (values['user'] != "") {
        // verificamos bajo que rol se esta haciendo el login y segun esto 
        // verificamos los datos de usuario y contraseña para este caso, solo se toman
        // 2, 1 para administrador y 1 para coordinador
        if (values['role'] == "Admin") {
            if (values['user'] == "Admin" && values['pass'] == "admin123") {
                // Si los datos de ingreso son correctos, modificamos el atributo
                // action de nuestro formulario a la pagina correspondiente y usamos
                // el link para enviar la información del usuario para que pueda ser visualizada
                var ruta = "./public/html/adminGeneral.html?user=" + values['user'];
                $('#logform').attr('action', ruta);
            }
            // En caso de que los datos ingresados sean incorrectos enviamos un mensaje de alerta
            else {
                alert('Los datos ingresados son incorrectos.');
            }
        }
        else {
            if (values['user'] == "Coord" && values['pass'] == "coord123") {
                // Si los datos de ingreso son correctos, modificamos el atributo
                // action de nuestro formulario a la pagina correspondiente y usamos
                // el link para enviar la información del usuario para que pueda ser visualizada
                var ruta = "./public/html/coordIndex.html?user=" + values['user'];
                $('#logform').attr('action', ruta);
            }
            else {
                // En caso de que los datos ingresados sean incorrectos enviamos un mensaje de alerta
                alert('Los datos ingresados son incorrectos.');
            }
        }
        // Si los datos de ingreso no son correctos no se modifica el action del formulario que 
        // por defecto redirecciona a la pagina principal.
    }
})