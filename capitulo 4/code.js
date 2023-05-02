/*

Soluciones Cofla 4. Requisitos:

A)

Calculadora con :

- suma
- resta
- multiplicacion
- division
- potencia
- raiz cuadrada
- raiz cúbica

B)

- Que la funcion nos devuelva
    *Profesor asignado
    *Nombre de los alumnos
- Funcion que nos indique en cuantas clases está Cofla
- Nombre de esas clases y sus profesores    

C)

- Preguntarle en que materia se quiere inscribir
- Si ya hay 20 inscriptos, negarle la inscripción
- Si hay menos de 20, inscribirlo y añadirlo a la lista de alumnos

*/

// R: A) `

class Calculadora {
    constructor(){

    }
    sumar(num1,num2){
        return parseInt(num1) + parseInt(num2);
    }
    restar(num1,num2){
        return parseInt(num1) - parseInt(num2);
    }
    dividir(num1,num2){
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar(num1,num2){
        return parseInt(num1) * parseInt(num2);
    }
}

const calculadora = new Calculadora();

alert("¿Qué operación desea realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación");

if (operacion == 1) {
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (opcion == 2) {
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = calculadora.restar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (opcion == 3) {
    let numero1 = prompt("Primer número para dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (opcion == 4) {
    let numero1 = prompt("Primer número para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`tu resultado es ${resultado}`);
}
else {
    alert("La opción elegida no es correcta.")
}

