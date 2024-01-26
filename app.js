// let numeroSecreto = 0;
// let intentos = 0;
// let listaNumerosSorteados = [];
// let numeroMaximo = 10;

// function asignarTextoElemento(elemento, texto) {
//     let elementoHTML = document.querySelector(elemento);
//     elementoHTML.innerHTML = texto;
//     return;
// }

// function verificarIntento() {
//     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//     if (numeroDeUsuario === numeroSecreto) {
//         asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         //El usuario no acertó.
//         if (numeroDeUsuario > numeroSecreto) {
//             asignarTextoElemento('p','El número secreto es menor');
//         } else {
//             asignarTextoElemento('p','El número secreto es mayor');
//         }
//         intentos++;
//         limpiarCaja();
//     }
//     return;
// }

// function limpiarCaja() {
//     document.querySelector('#valorUsuario').value = '';
// }

// function generarNumeroSecreto() {
//     let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
//     console.log(numeroGenerado);
//     console.log(listaNumerosSorteados);
//     //Si ya sorteamos todos los números
//     if (listaNumerosSorteados.length == numeroMaximo) {
//         asignarTextoElemento('p','Ya se sortearon todos los números posibles');
//     } else {
//         //Si el numero generado está incluido en la lista 
//         if (listaNumerosSorteados.includes(numeroGenerado)) {
//             return generarNumeroSecreto();
//         } else {
//             listaNumerosSorteados.push(numeroGenerado);
//             return numeroGenerado;
//         }
//     }
// }

// function condicionesIniciales() {
//     asignarTextoElemento('h1','Juego del número secreto!');
//     asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
//     numeroSecreto = generarNumeroSecreto();
//     intentos = 1;
//     console.log(numeroSecreto);
// }

// function reiniciarJuego() {
//     //limpiar caja
//     limpiarCaja();
//     //Indicar mensaje de intervalo de números 
//     //Generar el número aleatorio
//     //Inicializar el número intentos
//     condicionesIniciales();
//     //Deshabilitar el botón de nuevo juego
//     document.querySelector('#reiniciar').setAttribute('disabled','true');
    
// }
// condicionesIniciales();

//1.Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];

//2.Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3.Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesProgramacion.push('Java', 'Ruby', 'GoLang');

//4.Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
function mostrarLenguages() {
    for (let i=0; i<lenguagesProgramacion.length; i++) {
      console.log(lenguagesProgramacion[i]);
    }
  }
  mostrarLenguages();

//5.Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReverso() {
    for (let i=lenguagesProgramacion.length-1; i>=0; i--) {
      console.log(lenguagesProgramacion[i]);
    }
  }
  mostrarLenguagesReverso();

//6.Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
  let suma = 0;
  for (let i=0; i<lista.length; i++) {
    suma += lista[i];
  }
    return suma/lista.length;
}
let numeros = [10, 0, 20, 15, 5];
let media = calcularMedia(numeros);
console.log('Media:', media);

//7.Crea una función que muestre en la consola el número mayor y menor en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];
  for (let i=1; i<lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
      console.log('Mayor:', mayor);
    }
    if (lista[i] < menor) {
      menor = lista[i];
      console.log('Menor:', menor);
    }
  }
}
encontrarMayorMenor(numeros);

//8.Crea una función que retorne la suma de todos los elementos en una lista.
function calcularSuma(lista) {
    let suma = 0;
    for (let i=0; i<lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  let suma = calcularSuma(numeros);
  console.log('Suma:', suma);

//9.Crea una función que reciba una lista como parámetro y retorne el índice de un elemento también pasado como parámetro. Si ese elemento no existe en la lista, retorna -1.
function encontrarIndice(lista, elemento) {
  for (let i=0; i<lista.length; i++) {
    if (lista[i] === elemento) {
        return(console.log('Indice es: ' + i));
    }
  }
  return(console.log('No esta en la lista'));
}

//10.Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let total = [];
let lista2 = [25, 30, 35, 40, 0];
    for (let i=0; i<numeros.length; i++) {
      total[i] = numeros[i] + lista2[i];
    }
console.log('Suma de 2 listas: ', total);

//11.Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let cuadrado = [];
    for (let i=0; i<lista2.length; i++) {
      cuadrado[i] = lista2[i] * lista2[i];
    }
  console.log('El cuadrado es: ', cuadrado);


