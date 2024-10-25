function crearJugador(nombre, edad, altura) {
    return {
        nombre: nombre,
        edad: edad,
        altura: altura
    };
};

function sumarNotasEntrenamiento(nota1, nota2) {
    return (nota1 + nota2) / 2;
};

function pedirDatosJugador() {
    let nombre = "";
    let edad;
    let altura;

    while (!nombre || isNaN(edad) || isNaN(altura)) {
        nombre = prompt("Ingrese su nombre");
        edad = parseInt(prompt("Ingrese su edad"));
        altura = parseFloat(prompt("Ingrese su altura en metros (por ejemplo, 1.75)"));

        if (!nombre || isNaN(edad) || isNaN(altura)) {
            alert("Por favor, complete todos los campos correctamente.");
        };
    };

    return crearJugador(nombre, edad, altura);
};

function agregarJugadorALaLista(jugador, resultado) {
    let lista = document.getElementById('listaJugadores');
    lista.innerHTML += `<li>Nombre: ${jugador.nombre}, Edad: ${jugador.edad}, Altura: ${jugador.altura}, Resultado: ${resultado}</li>`;
};

while (true) {
    let jugador = pedirDatosJugador();
    alert(`Bienvenido ${jugador.nombre}`);

    let sumarNotas = confirm("A continuación podrás ver si te encuentras entre los citados al partido, para eso debes tener más de 8 puntos. ¿Quieres agregar tu nota?");
    let resultadoEntrenamiento = 0;

    if (!sumarNotas) {
        alert(`¡¡${jugador.nombre} te esperaremos la próxima vez!!`);
    } else {
        let nota1, nota2;

        while (isNaN(nota1) || isNaN(nota2)) {
            nota1 = parseInt(prompt("Ingrese la primera nota"));
            nota2 = parseInt(prompt("Ingrese la segunda nota"));

            if (isNaN(nota1) || isNaN(nota2)) {
                alert("Por favor, ingrese sus notas");
            };
        };

        resultadoEntrenamiento = sumarNotasEntrenamiento(nota1, nota2);

        if (resultadoEntrenamiento < 8) {
            alert(resultadoEntrenamiento);
            alert(`¡¡A seguir entrenando para la próxima ${jugador.nombre}!!`);
        } else {
            alert(resultadoEntrenamiento);
            alert(`¡¡Felicitaciones ${jugador.nombre}!! Nos vemos el domingo 19:15hrs`);
        };
    };

    agregarJugadorALaLista(jugador, resultadoEntrenamiento);

    let continuar = confirm("¿Quieres agregar otro jugador?");
    if (!continuar) {
        break;
    };
};