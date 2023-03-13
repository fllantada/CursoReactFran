// Enfoque imperativo vs declarativo

// Consigna: Quiero encontrar el primer numero par del arreglo de numeros
const numeros = [1, 3, 5, 7, 2, 9, 8, 10];
let primerPar = null;

// Enfoque declarativo

//   - Escribir código que describe el resultado que se quiere lograr
//   - Organizado de manera lógica
//   - Utilizar nombres de variables y funciones descriptivos
//   - Usar un estilo de programación que haga que el código sea fácil de seguir.

primerPar = numeros.find((num) => num % 2 === 0);
console.log(primerPar); // salida: 2

// Enfoque imperativo

//   - Escribir instrucciones paso a paso para lograr un resultado
//   - Escribir código que explícitamente describe cómo se debe realizar una tarea

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    primerPar = numeros[i];
    break;
  }
}
console.log(primerPar); // salida: 2
