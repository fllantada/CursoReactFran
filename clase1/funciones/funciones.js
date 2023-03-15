function Sumar(numero1, numero2) {
  return numero1 + numero2;
}

function Multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

let mivariable = Sumar;

console.log("Mi variable 1 es?", mivariable);

let mivariable2 = Sumar(2, 3);

console.log("Mi variable 2 es ? ", mivariable2);

GuardarSumas();

function GuardarSumas(variableFuncion) {
  console.log(variableFuncion(2, 3));

  let sumasGuardadas = [];

  sumasGuardadas.push(variableFuncion(2, 3));

  return sumasGuardadas;
}
