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



class MenuEjec {
    constructor(entrada, principal, postre, bebida) {
        this.entrada = entrada;
        this.principal = principal;
        this.postre = postre;
        this.bebida = bebida;
    }

    mostrameQueTenes() {
        console.log(this.entrada + this.principal + this.postre + this.bebida)
    }
}

const menu1 = new MenuEjec("Ensalada, ", "ñoquis con crema, ", "flan, ", "coca-cola")
const menu2 = new MenuEjec("sopa, ", "milanesa con pure, ", "helado, ", "vino o cerveza")
const menu3 = new MenuEjec("picada, ", "hamburgesa con papas fritas, ", "brownie con helado, ", "Agua")


let opcionMenu
let eleccion
const arrayMenus = []

for (let i = 0; i < opcionPersonas; i++) {
    opcionMenu = alert("Que menu te gustaria elegir? te los muestro por consola")
    console.log(menu1.mostrameQueTenes())
    console.log(menu2.mostrameQueTenes())
    console.log(menu3.mostrameQueTenes())

    eleccion = Number(prompt("Elegiste? decime cual queres con un numero"))

    if (eleccion === 1 || eleccion === 2 || eleccion === 3) {


        arrayMenus.push(eleccion)

        let next = alert("siguiente persona " + [i + 1] + "/" + opcionPersonas)

    } else {
        alert("Ese no es un menu disponible")
    }


}

console.log(arrayMenus)
const burgers = arrayMenus.filter(menu => menu === 2)
console.log(burgers.length)

//Armador de hamburguesa 

let alertaArmadora
const arrayBurger = []
const arrayDeObjetoDeObjeto = []
class ArmadorBurger {
    constructor(id, precio, cantidad, nombre) {
        this.id = id
        this.precio = precio
        this.cantidad = cantidad
        this.nombre = nombre
    }

    nombreIngredientes() {
        console.log(this.nombre);
    }
}

const pan = new ArmadorBurger(1, 50, 1, "pan")
const carnes = new ArmadorBurger(1, 50, 1, "carnes")
const quesoCheddar = new ArmadorBurger(1, 50, 1, "cheddar")
const quesoRoque = new ArmadorBurger(1, 50, 1, "roquefort")
const lechuga = new ArmadorBurger(1, 50, 1, "lechuga")
const tomate = new ArmadorBurger(1, 50, 1, "tomate")
const cebolla = new ArmadorBurger(1, 50, 1, "cebolla")
const jamon = new ArmadorBurger(1, 50, 1, "jamon")

alertaArmadora = alert("Bienvenido al armador de hamburguesas para los que seleccionaron el menu 2, los ingredientes te los muestro por consola")

console.log(pan)
console.log(carnes)
console.log(quesoCheddar)
console.log(quesoRoque)
console.log(lechuga)
console.log(tomate)
console.log(cebolla)
console.log(jamon)


for (let i = 0; i < burgers.length; i++) {

    let ingresoIngrediente = prompt("Ingresa los ingredientes que queres separados por una ,")
    let unoPoruno = ingresoIngrediente.split(",")
    console.log(unoPoruno)


    if (unoPoruno[i] == pan.nombreIngredientes()) {
        arrayBurger.push(pan)
    } else if (unoPoruno[i] == carnes.nombreIngredientes()) {
        arrayBurger.push(carnes)

        console.log(arrayBurger)


    }
}













//lo proximo, meter un msj que sea gracias por informarme, despues meter en un array la cantidad y tipos de menu elegidos
//array de objetos para armar hamburguesa 