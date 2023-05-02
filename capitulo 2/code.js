/*
let pc1 = {
    nombre: "DaltoPc",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];


let frase = `el nombre de mi pc es: <b>${nombre}</b> <br>
             el procesador es: <b>${procesador}</b> <br>
             la memoria ram es: <b>${ram}</b> <br>
             el espacio en disco es de: <b>${espacio}</b>`;



document.write(frase);
*/




/*
let numero = 0;

while (numero < 6) {
    
    numero++;

    document.write(numero + "<br>");
}
*/




/*

//el break de siempre de java

for (let i = 0; i < 20; i++) {

    if(i == 12) {
        break;
    }

    document.write(i + "<br>");
}


saltea numeros

for (let i = 0; i < 20; i++) {

    if(i == 12) {
        continue;
    }

    document.write(i + "<br>");
}
*/




/*
//FOR IN Y FOR OF

let animales = ["gato","perro","rex"];
animales.edad = 20; //decalaracion de un atributo

//for in muestra la posicion en la que se encunetran los elementos
//tambien se puede usar para operar con esos elementos
//y muestra el nombre de las propiedades que le demos si trabajamos con POO
//el for in guarda en la variable animal el índice del array

for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>");

//for of muestra el valor de estos elementos
//(recorre todo exceptuando los atributos)
//el for of guarda en la variable animal el valor del array

for (animal of animales){
    document.write(animal + "<br>");
}

*/




/*
//LABELS

array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1, "josefina"];

forRancio: //esto es un label
for (let array in array2) {
    if (array == 2) {

        for (let array of array1) {
            document.write(array + "<br>")
            continue forRancio;

        }

    } else {
        document.write(array2[array] + "<br>");
    }
}

//la 1ra vuelta entra en el else y devuelve el valor "pedro" dentro del array2
//la 2da vuelta entra en el else y devuelve el valor "marcelo" dentro del array2
//la 3ra vuelta entra en el if (array == 2) {en la posicion 2 está el array1} , a su vez entra en el for que recorre el array1, al recorrer una vez lo muestra en pantalla y saltea el resto del array1 con el label "forRancio", haciendo uso del continue
//en la 4ta vuelta sale del if y entra en el else otra vez para mostrar el valor "josefina" dentro del array2

//el label lo que hace es identificar entre un bucle y otro, al poner continue forRancio significa que el primer bucle for que puse debiera empezar otra vez, en tal caso de que pusiera solamente continue saltaría la iteracion (repeticion) del bucle for de adentro, y no del anterior, el principal, mi forRancio


*/



/*
//FUNCIONES

function saludar() {

respuesta = prompt("como fue tu día?");
if (respuesta == "bien") {
    alert("me alegro");
} else {
    alert("una pena");
}

}

saludar();


//las de abajo son las funciones flecha


const saludar = (nombre)=>{
    document.write("hola como estás? " + nombre);
}

saludar("pedro");

//las funciones flecha se pueden declarar de esa forma o sin parentesis si es que solo es una variable, de tal forma que:
// const saludar = nombre => document.write("hola como estás? " + nombre)

*/




/*
//EJERCICIOS

// A) Un joven muy afortunado logró ganar el primer premio de la lotería... exacto, estamos hablando del pobre al que cofla le dió una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con este millonario compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas...
// - Dejar pasar solo a los mayores de edad
// - La primer persona que entre después de las 2 AM, no paga.


let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿Cuál es tu edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis compa, sos la primer persona despues de las 2");
        } else {
            alert(`Son las ${time}:00Hrs y podes pasar, pero tenes que pagar la entrada`);
        }

    } else {
        alert("maestro, sos menor, no te dejo pasar ni en pedo");
    }
}

validarCliente(23);
validarCliente(0);
validarCliente(1.2);
validarCliente(2.2);
validarCliente(3);

*/

// B) Cofla vuelve de la comisaría exausto y por lo cansado que estaba se fue a dormir...       Al otro día comienzan las clases del ciclo básico de la universidad (porque cofla quiere ser programador y se inscribió en la facultad de ingeniería para estudiar desarrollo de software).         En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la facultad: Se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de ningún tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.
// - Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase.
// - Pasados los 30 días mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
// - Se puede tener un máximo de 10% de ausencias por semestre, si se tienen mas aclarar que será reprobado


let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}
