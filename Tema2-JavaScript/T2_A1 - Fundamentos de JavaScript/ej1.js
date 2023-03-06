"use strict";

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no sea string.
 */

console.log("--------------- APARTADO 1 -----------------");
{
  function cadenaMasLarga(cadena1, cadena2) {
    //Control variables no son string
    if (typeof cadena1 !== "string" || typeof cadena1 !== "string") {
      console.error("Los dos parámetros han de ser de tipo string");
      return;
    }

    //Determinar si las cadenas son iguales o cual es la mayor
    if (cadena1.length == cadena2.length) {
      console.log("Las dos cadenas son iguales");
    } else if (cadena1.length > cadena2.length) {
      console.log('La cadena: "' + cadena1 + '" es más larga');
    } else {
      console.log('La cadena: "' + cadena2 + '" es más larga');
    }
  }
  cadenaMasLarga("Hola que tal", "Como va"); //1 Mayor
  cadenaMasLarga("Hola", "Que tal"); //2 Mayor
  cadenaMasLarga(5, "adios"); //Error
}
/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el segundo
 * por pantalla, pero en cada iteración muestra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log("--------------- APARTADO 2 -----------------");
{
  function multiplicaNumero(veces, numero) {
    //Variable del string del resultado
    let stringResult = "";

    //Control variables no son numero
    if (typeof numero != "number" || typeof veces != "number") {
      console.error("Los dos parámetros han de ser de tipo numero");
      return;
    }

    //añadir el primer numero como string(concatenado a string vacío)
    stringResult += numero;
    //para cada iteración multiplico el numero por 2. Y concateno un espacio con el resultado
    for (let i = 1; i < veces; i++) {
      numero *= 2;
      stringResult += " " + numero;
    }
    console.log(stringResult);
  }

  multiplicaNumero(4, 6);
  multiplicaNumero(8, 6);
  multiplicaNumero("4", 6);
}
/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemplo: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log("--------------- APARTADO 3 -----------------");

{
  function vecesCharEnString(cadena, char) {
    let contador = 0;

    //Control variables no son numero o mas de un caracter
    if (typeof cadena != "string" || typeof char != "string") {
      console.error("Los dos parámetros han de ser de tipo string");
      return;
    } else if (char.length > 1 || char.length < 1) {
      console.error("El segundo parámetro ha de ser 1 caracter");
      return;
    } else if (cadena === undefined) {
      console.log("La cadena no puede estar vacía");
    }

    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] == char) {
        contador++;
      }
    }
    console.log(
      'El carácter "' +
        char +
        '" aparece ' +
        contador +
        " veces" +
        ' en: "' +
        cadena +
        '"'
    );
  }
  vecesCharEnString("holaa", "a");
  vecesCharEnString("En un lugar de la mancha", "a");
  vecesCharEnString(3, "a");
}
/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser: "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número. Si el precio o el impuesto no son
 *   números válidos (NaN) muestra un error. Si son válidos, muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros, y pasándo algún valor no numérico en el precio o impuesto.
 */

console.log("--------------- APARTADO 4 -----------------");

{
  //comprobar parametros por defecto . '' mal!
  function precioMasIva(nombre = "Producto genérico", precio = 100, iva = 21) {
    let nombreProducto = String(nombre);
    let numberPrecio = +precio;
    let numberIva = +iva;

    //Si precio o iva no son numeros o 0,  muestro error y salgo
    if (
      Number.isNaN(numberPrecio) ||
      !numberPrecio ||
      Number.isNaN(numberIva) ||
      !numberIva
    ) {
      console.error("El precio y el iva han de ser numeros");
      return;
    }

    let preciofinal = numberPrecio + numberPrecio * (iva / 100);

    console.log(
      "Producto: " +
        nombreProducto +
        ". Precio: " +
        numberPrecio +
        ". Precio mas iva(" +
        iva +
        "%): " +
        preciofinal +
        "€"
    );
  }
  precioMasIva("Patatas", 5, "5");
  precioMasIva("Manzanas", 100);
  precioMasIva();
  precioMasIva("Peras", "", "");
}
/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas, por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log("--------------- APARTADO 5 -----------------");

{
  let buscarSlice = (cadena, slice) => {
    if (
      typeof cadena == "string" &&
      typeof slice == "string" &&
      cadena.length &&
      slice.length
    ) {
      //Search slice in lower case in string in lower case
      let exist = cadena
        .toLocaleLowerCase()
        .includes(slice.toLocaleLowerCase());
      console.log(
        exist ? slice + " SI está " + cadena : slice + " No está " + cadena
      );
    } else {
      console.error("Los dos parámetros han de ser cadenas");
    }
  };
  buscarSlice("Santiago de Compostela", "COMPO");
  buscarSlice("12345", "5");
  buscarSlice(5, 5);
  buscarSlice("", "");
}
