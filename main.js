//              -----------------Condicionales, ciclos y funciones JAVASCRITP--EJERCICIOS-----------------------


// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// function verificador(numero) {
//     numero % 2 === 0 ? console.log(`El número ${numero} es un número par`) : console.log(`El número ${numero} es un número impar`);
// }

// verificador();

// const verificador = (numero) => {
//     numero % 2 === 0 ? console.log(`El número ${numero} es un número par`) : console.log(`El número ${numero} es un número impar`);
// }

// verificador();

//              --------------------------------------SIGUIENTE EJERCICIO------------------------------------

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
// function verificador(num1, num2) {
//     if (num1 !== num2) {
//         num1 > num2 ? console.log(`${num1} es mayor que ${num2}`) : console.log(`${num2} es mayor que ${num1}`)
//     } else {
//         console.log(`${num1} es igual que ${num2}`)
//     }
// }

// verificador();

// const verificador = (num1, num2) => {
//     if (num1 !== num2) {
//         num1 > num2 ? console.log(`${num1} es mayor que ${num2}`) : console.log(`${num2} es mayor que ${num1}`)
//     } else {
//         console.log(`${num1} es igual que ${num2}`)
//     }
// }

// verificador();

//              --------------------------------------SIGUIENTE EJERCICIO------------------------------------


// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
// function verificador(num) {
//     num % 5 == 0 ? console.log(`El número ${num} es multiplo de 5.`) : console.log(`El número ${num} no es multiplo de 5.`);
// }

// verificador();

// const verificador = (num) => {
//     num % 5 == 0 ? console.log(`El número ${num} es multiplo de 5.`) : console.log(`El número ${num} no es multiplo de 5.`);
// }

// verificador();

//              --------------------------------------SIGUIENTE EJERCICIO------------------------------------


// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// function rellenar(num) {
//     for (let i = 0; i <= num; i++) {
//     console.log(i);
//     }
// }

// rellenar();

// const rellenar = (num) => {
//     for (let i = 0; i <= num; i++) {
//     console.log(i);
//     }
// }

// rellenar();

//              --------------------------------------SIGUIENTE EJERCICIO------------------------------------


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
// function repetidor (palabra, num) {
//     for (let i = 0; i < num; i++) {
//         console.log(palabra)
//     }
// }

// repetidor(``, )

// const repetidor = (palabra, num) => {
//     for (let i = 0; i < num; i++) {
//         console.log(palabra)
//     }
// }

// repetidor(``, );

//              --------------------------------------SIGUIENTE EJERCICIO------------------------------------


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
// let array = [1,2,3,4,5,6,7,9];

// function mostrar (mostrar) {
//     mostrar.forEach(parametro => {
//     console.log(parametro);
//     });
// }

// mostrar(array);

// let array = [1,2,3,4,5,6,7,9];

// function mostrar (mostrar) {
//     mostrar.forEach(parametro => console.log(parametro));
// }

// mostrar(array);

// let array = [1,2,3,4,5,6,7,9];

// const mostrar = (mostrar) =>  mostrar.forEach(parametro => console.log(parametro))

// mostrar(array);

//              --------------------------------------SIGUIENTE EJERCICIO------------------------------------


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
// let array = [1,2,3,4,5,6,7,8,9,10];

// function valores(excepto) {
//     let resultado = 0;
//     excepto.splice(5,1)
//     console.log(excepto);
// }

// valores(array)


// let array = [1,2,3,4,5,6,7,8,9,10];

// const valores = excepto => {
//     excepto.splice(5,1); console.log(excepto);
// }

// valores(array)

//              --------------------------------------SIGUIENTE EJERCICIO------------------------------------


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

// let array =[1,2,3,4,5]

// function multiplicador(numeros,parametro) {
//     numeros.forEach(elemento => {
//         console.log(elemento*parametro);
//     });
// }

// multiplicador(array,5);

// let array =[1,2,3,4,5]

// const multiplicador = (numeros,parametro) => {
//     numeros.forEach(elemento => {
//         console.log(elemento*parametro);
//     });
// }

// multiplicador(array,2);


//                        --------------------------------------FIN------------------------------------
