console.log ("Hola mundo");

let condicion = false;

// if (condicion) {
//     console.log ("La condición es verdadera");
// }
// else {
//     console.log ("La condición es falsa");
// }
let pedro =  condicion? "pedro picapiedra" : "pedro gomez";


let arr1= [1,2,3,4,5,6,7,8,9,10];

let arr2 = [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10];

//let arr3 = arr1.concat(arr2);
arr3 = [...arr1,"pedro",  ...arr2];
//console.log(arr3);

let props ={
nombre1: "Pedro",
nombre2: "Juan"
}

function listarNombres (objeto) {
    console.log(objeto.nombre1);
    console.log(objeto.nombre2);
}

function listarNombresDestructuring ({nombre10, nombre2}) {
    let nombre10 = objeto.nombre10;
    let nombre2 = objeto.nombre2;

    console.log(nombre10);
    console.log(nombre2);
}



listarNombresDestructuring(props);








