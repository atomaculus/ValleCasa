let opcionPersonas;
let opcionHora;

function escogerCantidadPersonas() {
    const personas = parseInt(prompt('Que bueno! Cuantas personas van a ser? Por el Covid-19 permitimos mesas de hasta 10 personas'));

    if (personas === 0 || personas > 10 || !personas) {
        prompt('Lo siento, solo aceptamos hasta 10 personas y 1 como mínimo. Ingresa un numero valido');
        return personas;

    }

    switch (true) {
        case personas > 0:
            alert(`Revisamos si hay mesas para ${personas} persona(s)`);
            break;
        default:
            alert('No hay mesas!');
            break;
    }

    opcionPersonas = personas;
}

function escogerHorarios() {
    const horario = prompt('Estas pensando venir al mediodia o a la noche?');
    let hora;

    if (horario.toLowerCase() === 'mediodia' || horario.toLowerCase() === 'mediodía') {

        let opciones = prompt('Los horarios disponibles al mediodia son 13hs, 13.30hs, 14hs y 14.30hs. Indicame cual te gustaria con el formato hh.mm  (horas.minutos)');

        switch (true) {
            case opciones === '13.00':
                hora = 13;
                break;
            case opciones === '13.30':
                hora = (13 + " y media");
                break;
            case opciones === '14.00':
                hora = 14;
                break;
            case opciones === '14.30':
                hora = (14 + " y media");
                break;
            default:
                hora = 'A verificar';
                break;
        }
    } else {
        let opciones = prompt('Los horarios disponibles a la noche son 20.30hs, 21hs, 21.30hs y 22hs. Indicame cual te gustaria con el formato hh.mm  (horas.minutos)');

        switch (true) {
            case opciones === '20.30':
                hora = (20 + " y media");
                break;
            case opciones === '21.00':
                hora = 21;
                break;
            case opciones === '21.30':
                hora = (21 + " y media");
                break;
            case opciones === '22.00':
                hora = 22;
                break;
            default:
                hora = 'A verificar';
                break;
        }
    }

    opcionHora = hora;
}

const saludo = prompt('Hola, como estas? Benvenido a Casa del Valle. Si queres reservar en nuestro restaurant escribi RESERVA, si no, escribi ESTOY MIRANDO');

if (saludo.toLowerCase() === 'reserva') {
    escogerCantidadPersonas();

    alert('Gracias, ahora escogemos un horario');
    escogerHorarios();
    postResumen();



} else {
    alert('Siga mirando!');
}

function postResumen() {
    let confirmacion = confirm(`Resumiendo, tenes una reserva para ${opcionPersonas} persona(s) para las ${opcionHora} hs`);


    if (confirmacion) {
        let menuEjec = confirm("Te gustaria consumir nuestro menu ejecutivo? El mismo tiene un valor de $500 por persona")

        if (menuEjec && descuento(opcionPersonas)) {

            alert("Felicitaciones! Por ser una mesa grande y utilizar el menu ejecutivo, te otorgamos un 10% de descuento sobre el total de tu mesa. Tu descuento es de -" + descuento(opcionPersonas) + " ARS")

        } else if (menuEjec) {

            alert("Perfecto te esperamos!")

        } else {

            alert("Perfecto te esperamos!")
        }

    } else {

        alert("Volve a cargar los datos")
    }

}


function descuento(num1) {
    if (num1 > 4) {

        let descuentoAplicado = ((500 * num1) * 10) / 100;
        return descuentoAplicado;
    }
}