"use strict";

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (ambas incluidas)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */

console.log("--------------- APARTADO 1 -----------------");

{
  //Crear y mostrar array
  let array = Array(1, 2, 3, 4);
  console.log(array);
  //Añadir dos al final y dos al principio y mostrar
  array.push(5, 6);
  array.unshift(-1, 0);
  console.log(array);
  //eliminar de la posición 3 hasta la 5 y mostrar
  array.splice(3, 3);
  console.log(array);
  //añade "siete", 'ocho' delante en la ultima posición(-1) sin eliminar nada(0) y muestra
  array.splice(-1, 0, 7, 8);
  console.log(array);
  //Muestra array con separador personalizado
  console.log(array.join(" ==> "));
  //salto de linea para mejor visualizacion en la consola
  console.log();
}

/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa spread para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> printMedia("Pepe", 4.25, 6, 8.5, 9)
 */

console.log("--------------- APARTADO 2 -----------------");

{
  function printMedia(nombre, ...notas) {
    //Validar nombre
    if (typeof nombre != "string") {
      return "ERROR -> Name has to be a string";
    }

    //Validar notas. Recorro arraycomprobando que son numeros y guardandolos como numbers
    let numbers = notas.map((nota) => {
      if (isNaN(+nota)) {
        return nota;
      } else {
        return +nota;
      }
    });

    //Aquí se comprueba si todos son number(***si hay un string no numérico retornara false)
    let areAllNumbers = numbers.every((num) => typeof num == "number");
    //Calculos
    if (areAllNumbers && numbers.length >= 1) {
      let total = numbers.reduce((total, numbers) => total + numbers, 0);
      let average = total / numbers.length;
      return "Average grades of: : " + nombre + " is: " + average;
    } else {
      return "ERROR -> grades are not correct";
    }
  }
  //Correcto
  console.log(printMedia("Pepe", 4.25, 6, 8.5, 9));
  console.log(printMedia("Ivan", 8, 6, 6, 6));
  //Correcto si introduces números en string
  console.log(printMedia("Juan", "9", 6, 8.5, 9));
  //Error nombre != 'string'
  console.warn(printMedia(6545, 4.25, 6, 8.5, 9));
  //Error si introduces algún string no numérico
  console.warn(printMedia("Juan", "844d", 6, 8.5, 9));
  //Error si no introduces notas
  console.warn(printMedia("Juan"));
  //salto de linea para mejor visualizacion en la consola
  console.log();
}
/**
 * Apartado 3
 * Crea un array de cadenas y ordenarlo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado
 */

console.log("--------------- APARTADO 3 -----------------");

{
  //crear y mostrar array de strings
  let array = ["En", "Un", "Lugar", "de", "la", "Mancha", "d", 5, "53"];
  let array2 = ["De", "cuyo", "nombre", "no", "quiero", "acordarme"];
  let array3 = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur"];

  function ordenaCadenas(array) {
    //Validación que son cadenas de texto; Si hay un valor que sea numeérico o string numérico no lo añado al arrayCadenas
    let arrayCadenas = [];
    array.forEach((element) => {
      if (isNaN(+element)) {
        arrayCadenas.push(element);
      } else {
        //continue
      }
    });
    //Ordena de mayor a menor
    arrayCadenas.sort((c1, c2) => c2.length - c1.length);
    return (
      "Array de strings ordenado de mayor a menor: " + arrayCadenas.join(", ")
    );
  }

  console.log("Array antes: " + array.join(", "));
  console.log(ordenaCadenas(array));
  console.log("***********************");
  console.log("Array antes: " + array2.join(", "));
  console.log(ordenaCadenas(array2));
  console.log("***********************");
  console.log("Array antes: " + array3.join(", "));
  console.log(ordenaCadenas(array3));
  //salto de linea para mejor visualizacion en la consola
  console.log();
}
/**
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número. No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) la transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado
 */

console.log("--------------- APARTADO 4 -----------------");

{
  //Crear array
  let numeros = [5855, 29, 775, 5, 63588, 414, 85, 22, "345", "222a"];
  let numeros2 = [44, 853, 123, 55, 6, 55, "hola"];
  let numeros3 = [1, 11, 1, 123, 1, 1, 111111111111111];

  function sumaNumeros(array) {
    //Validar que sean numeros;los strings numericos tambien valen
    let arrayNumeros = [];
    array.forEach((element) => {
      if (!isNaN(+element)) {
        arrayNumeros.push(+element);
      } else {
        //continue
      }
    });
    //Mapeo el array para que sean strings
    arrayNumeros = arrayNumeros.map((num) => String(num));
    //Creo array bidimensional en que los subArrays son arrays de caracteres de cada numero mediante spread
    let arrayCaracteres = Array.from(arrayNumeros, (num) => [...num]);
    //mapeo el array de caracteres de forma que cada posición es la suma, mediante reduce; de sus caracteres parseados a number
    let suma = arrayCaracteres.map((num) =>
      num.reduce((total, num) => total + +num, 0)
    );
    return "Array sumatorios: " + suma.join(", ");
  }
  console.log("Array original: " + numeros.join(", "));
  console.log(sumaNumeros(numeros));
  console.log("***********************");
  console.log("Array original: " + numeros2.join(", "));
  console.log(sumaNumeros(numeros2));
  console.log("***********************");
  console.log("Array original: " + numeros3.join(", "));
  console.log(sumaNumeros(numeros3));
  //salto de linea para mejor visualizacion en la consola
  console.log();
}

/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto.
 * - Recorre el objeto Map mostrando, para cada producto, que errores tiene asociados.
 */

console.log("--------------- APARTADO 5 -----------------");

{
  let mensajes = [
    ["Silla", "ERROR: Stock no coincide"],
    ["Mesa", "Pedido de 2 unidades"],
    ["Silla", "ERROR: El precio no puede ser menor a 1"],
    ["Mesa", "ERROR: No se pueden enviar 0 unidades"],
    ["Cama", "ERROR: El fabricante no tiene ese modelo"],
    ["Silla", "Se ha borrado el producto de la base de datos"],
    ["Mesa", "ERROR: El stock no puede ser negativo"],
  ];

  function muestraErrores(mensajes) {
    //recorrer array mensajes como 'mensaje' y si el mensaje empieza por ERROR filtra y guarda esa linea
    let errores = mensajes.filter(
      (mensaje) => (mensaje = mensaje[1].startsWith("ERROR"))
    );

    //Creación Objeto map
    let mapObject = new Map();
    //Recorrer el array de errores y comprobar si existen en el objeto map
    errores.forEach((element) => {
      if (mapObject.has(element[0])) {
        //Si existe añade el mensaje de error al array de errores del elemento
        mapObject.set(element[0], [mapObject.get(element[0]), element[1]]);
      } else {
        //Si no existe añade el elemento
        mapObject.set(element[0], element[1]);
      }
    });

    //Guardos los resultados en el array resultados
    let result = [];
    mapObject.forEach((error, object) => {
      result.push(
        object + " ==> " + (error === Array ? error.join(", ") : error)
      );
    });
    return result;
  }
  console.log(muestraErrores(mensajes).join("\n"));
  //salto de linea para mejor visualizacion en la consola
  console.log();
}

/**
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log("--------------- APARTADO 6 -----------------");

{
  function areaTriangulo(lado1 = 0, lado2 = 0, grados = 0) {
    //Validacion de datos
    if (isNaN(lado1)) {
      return "Error en lado1: " + lado1;
    } else if (isNaN(lado2)) {
      return "Error en lado2: " + lado2;
    } else if (isNaN(grados)) {
      return "Error en grados: " + grados;
    } else if (grados <= 0 || grados > 360) {
      return "Los grados tienen que estar entre 0 - 360";
    } else {
      //continue
    }
    //calculo
    let radianes = (grados * Math.PI) / 180;
    let area = (1 / 2) * lado1 * lado2 * Math.sin(radianes);

    return "Area del triangulo: " + area.toFixed(4); //4 decimales
  }
  //Correcto
  console.log(areaTriangulo(5, 10, 1));
  console.log(areaTriangulo(5, 10, 45.5));
  console.log(areaTriangulo(5, "10", 50));
  //Error lado2
  console.warn(areaTriangulo(5, "10s", 45.5));
  //error grados > 360
  console.warn(areaTriangulo(5, "10", 500));
  //Error grados no numéricos
  console.warn(areaTriangulo(5, "10", "setentaycinco"));
  //salto de linea para mejor visualizacion en la consola
  console.log();
}

/**
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log("--------------- APARTADO 7 -----------------");

{
  function date(fecha) {
    let date = new Date(fecha);

    let isValidDate = Date.parse(fecha);

    if (!isValidDate) {
      return "Error en la fecha";
    } else {
      let dia = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
      ];
      let mes = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];

      return (
        dia[date.getDay()] +
        ", " +
        date.getDate() +
        " de " +
        mes[date.getMonth()] +
        " de " +
        date.getFullYear()
      );
    }
  }
  //Correctos
  console.log(date("2019-02-28"));
  console.log(date("2050/02/28"));
  console.log(date("2000 02 12"));
  //Error dia-mes-año
  console.warn(date("28/02/2019"));
  //Error de formato
  console.warn(date(Date.now()));
  console.warn(date(1));
  //Error mes mas de 12
  console.warn(date("2019-15-28"));
  //Error dia mas de 31
  console.warn(date("2050/02/32"));
}
