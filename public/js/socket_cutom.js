  
        var socket = io();

        //.on ----- Escuchar informacion
        socket.on('connect', function(){
            console.log('Conectado al servedor');
        });

        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor');
        })

        socket.on('enviarMensaje', function(mensaje){
            console.log("Sevidor:", mensaje);
        })

        //.emit ---- Enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Daniel',
            mensaje: 'Hola prras'
        }, function(resp){
            console.log('respuesta: ', resp);
        });
