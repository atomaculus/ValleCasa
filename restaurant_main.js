// funcion para guardar en local storage
function saveLocalStorage(key, item) {
    let stringifiedItem = JSON.stringify(item);
    localStorage.setItem(key, stringifiedItem);
}

// funcion para traer el elemento del local storage
function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// function getLocalStorageString(key) {
//     return JSON.stringify(localStorage.getItem(key));
// }

let selectorPersonas = document.querySelector('#selectorPersonas')
let amPm = document.querySelectorAll('.amPm')
let horarioEspecificoAm = document.querySelectorAll('.horarioEspecificoAm')
let horarioEspecificoPm = document.querySelectorAll('.horarioEspecificoPm')
let btnArmador = document.querySelector('#btnArmador')
let comensales = document.querySelector('#comensales')
let btnCantidadBurgas = document.querySelector('#btnCantidadBurgas')
let seccionIngredientes = document.querySelectorAll('.seccionIngredientes')
let aclaraciones = document.querySelector('textarea')
let btnSubmit = document.querySelector('#btnSubmit')
let btnreset = document.querySelector('#btnreset')
let seccionPrueba = document.querySelector('sectionPrueba')
let arrayIngr = []
let arrayHamburgesas = []



selectorPersonas.addEventListener('change', () => saveLocalStorage("cantidad", selectorPersonas.value))

// //Aca llevo el valor al LS
// amPm.forEach(amPm => amPm.addEventListener('change', () => saveLocalStorage("momento", amPm.value)))
// //Aca me lo traigo para el if
// amPm = getLocalStorage("momento")

amPm.forEach(element => {
    element.addEventListener("click", function () {
        console.log(element)
        if (element.value === "mediodia") {
            horarioEspecificoPm.forEach(horario => {
                horario.classList.add("claseDisable")
            })
            horarioEspecificoAm.forEach(horario => {
                horario.classList.remove("claseDisable")
            })
        } else if (element.value === "noche") {
            horarioEspecificoAm.forEach(horario => {
                horario.classList.add("claseDisable")
            })
            horarioEspecificoPm.forEach(horario => {
                horario.classList.remove("claseDisable")
            })
        }
    })
})

btnArmador.addEventListener("click", () => {

    seccionArmadora.classList.remove("claseDisable")
    seccionIngredientes.forEach(ingrediente => {
        ingrediente.checked = false
    })
})



comensales.innerHTML = `${selectorPersonas.value} hamburguesas`

btnCantidadBurgas.addEventListener("click", () => saveLocalStorage("cantidad brgr", btnCantidadBurgas.value))
let amntBrgrEnNum = Number(getLocalStorage("cantidad brgr"))
console.log(amntBrgrEnNum)

//events listeners de la seleccion de ingredientes 




seccionIngredientes.forEach(element => {
    element.addEventListener("change", function () {
        console.log(element)
        if (element.checked == true) {

            arrayIngr.push(element.value)


        }
    })
})
if (getLocalStorage("hambur") != null) {
    arrayHamburgesas = getLocalStorage("hambur");
}



btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<h4> los ingredientes elegidos son ${arrayIngr}</h4>`
    document.body.appendChild(contenedor);

    arrayHamburgesas.push(new hamburgesasAlVapor(arrayIngr));

    saveLocalStorage("hambur", arrayHamburgesas);



})

btnreset.addEventListener("click", function (event) {
    arrayIngr = [];
})

class hamburgesasAlVapor {
    constructor(ingredientes) {

        this.ingredientes = [...ingredientes]


    }
}