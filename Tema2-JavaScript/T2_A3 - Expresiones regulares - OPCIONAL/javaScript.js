"use strict";

//Valida si una cadena introducida es un número entero.
console.log("--------------- APARTADO 1 -----------------");

function isNumber(number) {
  //expReg: ^empieza; números de 0-9  1 o más veces(+); $fin
  let expReg = new RegExp(/^[0-9]+$/);

  if (expReg.test(number)) {
    return "Si es Número";
  } else {
    return "No es Número";
  }
}
//Correcto
console.log(isNumber(123));
console.log(isNumber("254"));
//Error letras
console.warn(isNumber("52sd"));

//Validar DNI, 8 números y una letra al final.
console.log("--------------- APARTADO 2 -----------------");
//Letras para formar un dni correcto
let letras = Array.from("TRWAGMYFPDXBNJZSQVHLCKET");

function validaDni(dni) {
  //expReg: empieza^ exactamente 8 números; 0 o más espacios; una letra /explora toda la cadena + case insensitive
  let expReg = new RegExp(/^([0-9]{8})\s*([a-z])$/gi);
  //valida si el dni es válido
  let isValid =
    dni.charAt(dni.length - 1).toUpperCase() ==
    letras[dni.substring(0, 8) % 23];
  //validación si cumple formato y es un dni válido
  if (expReg.test(dni) && isValid) {
    return "Dni correcto";
  } else {
    return "Dni incorrecto";
  }
}
//bien
console.log(validaDni("45113560A"));
console.log(validaDni("45235687tt"));
console.log(validaDni("48635287 Q"));
//Error no letra
console.warn(validaDni("48635287"));
//Error menos números
console.warn(validaDni("45258A"));
//Error mas números
console.warn(validaDni("452583743433A"));

//Validar una matrícula de un coche con formato 0000XXX
console.log("--------------- APARTADO 3 -----------------");

function validaMatricula(matricula) {
  //expReg: empieza^ exactamente 4 números; 3 letras fin$
  let expReg = new RegExp(/^[0-9]{4}\D\D\D$/);

  if (expReg.test(matricula)) {
    return "Matricula correcta";
  } else {
    return "Matricula incorrecta";
  }
}
//bien
console.log(validaMatricula("1234AAA"));
//mal menos números; diferente de 3 letras
console.warn(validaMatricula("12AAA"));
console.warn(validaMatricula("1234AA"));

/*Valida nombre de usuario en twitter, debe de empezar por @ y puede
contener, números, letras mayúsculas y minúsculas, “-“ y “_”.*/
console.log("--------------- APARTADO 4 -----------------");

function validaUser(user) {
  //expReg: empieza^ símbolo @; alfanumérico _ y - uno o varios caracteres;  fin$ /explora toda la cadena + case insensitive
  let expReg = new RegExp(/^[\x40][\w-]+$/gi);

  if (expReg.test(user)) {
    return "user correcto";
  } else {
    return "user incorrecto";
  }
}
//Correcto
console.log(validaUser("@sdaAGB987asjg_sdg-sdg__--"));
//Error no @
console.warn(validaUser("sdaasjg_sdg-sdg"));
//Error símbolos incorrectos o espacio
console.warn(validaUser("@sdaasjg_sdg -sdg!."));

/*Crear una expresión regular que valide una fecha en formato "XX/XX/XXXX",
donde cada "X" es un dígito. Se puede probar con expresiones tipo: "El día
29/11/2019 tenemos examen.".*/
console.log("--------------- APARTADO 5 -----------------");

function validaFecha(fecha) {
  //expReg: empieza^ exactamente 2 números; símbolo /; exactamente 2 números; símbolo /; exactamente 4 números fin$ /explora toda la cadena + case insensitive
  let expReg = new RegExp(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/gi);

  if (expReg.test(fecha)) {
    return "El dia " + fecha + " tenemos un examen";
  } else {
    return "La fecha no está en formato XX/XX/XXXX";
  }
}
//Correcto
console.log(validaFecha("12/03/2022"));
//Error
console.warn(validaFecha("45 45 2159"));
console.warn(validaFecha("45.45.2159"));
//Error año primero
console.warn(validaFecha("2020/09/25"));

/*Crear una expresión regular para la validación de direcciones de correo
electrónico. Para simplificar, los valores anteriores a @ pueden contener
cualquier carácter alfanumérico, y los caracteres “.” y “-”, mientras que los
valores después de la @ pueden contener caracteres alfanuméricos, y el tipo
de dominio tendrá una longitud de 2 o 3 caracteres.*/
console.log("--------------- APARTADO 6 -----------------");

function validaEmail(email) {
  //expReg: empieza^ alfanuméricos y . o - uno o varios; símbolo @; uno o mas alfanuméricos; símbolo punto; dos o tres caracteres fin$ /explora toda la cadena + case insensitive
  let expReg = new RegExp(/^[a-z0-9\.-]+\x40[a-z0-9]+[\.]([a-z0-9]{2,3})$/gi);

  if (expReg.test(email)) {
    return "Email correcto";
  } else {
    return "Email incorrecto";
  }
}
//Correctas
console.log(validaEmail(".-asdasd2.-343.-dfg@sdfdgdf.com"));
console.log(validaEmail(".-asdasd2.-343.-dfg@sdfdgdf.co"));
//Incorrectas
console.warn(validaEmail(""));
//Error underscore no permitido
console.warn(validaEmail("user54_sd@gmail.com"));
//Error no poner @
console.warn(validaEmail("user54sdgmail.com"));
//Error no poner .
console.warn(validaEmail("user54sd@gmailcom"));
//Error dominio de 1
console.warn(validaEmail("user54sdgmail.c"));
//Error dominio de mas de 3
console.warn(validaEmail("user54sd@gmail.coms"));

/*Crear una expresión regular que elimine las etiquetas potencialmente
peligrosas (<script>...</script>) y todo su contenido de una cadena HTML.*/
console.log("--------------- APARTADO 7 -----------------");

function removeScript(text) {
  //\x3c = <   ;   script = script   ;   \s+ = admite 1 o más espacios  ;  \w+ = una o varias letras o números
  //\x3d = =  ;  \x22 = "  ;  \x3e = >  ;  \x2f = /  ;  \x2e = .
  //expReg: símbolo <; palabra script; uno o más espacios; no o varios alfanuméricos; acepta símbolos = " . ; 0 o varios espacios; uno o varios alfanuméricos
  // símbolo >; uno o varios alfanuméricos; símbolo <; símbolo /; palabra script; símbolo >; todo buscado 0 o varias veces en el texto /explora toda la cadena + case insensitive fin$
  let expReg = new RegExp(
    /.[\x3cscript\s+[\w]*\x3d*\x22*[\s*\w+\x22\.]+\x3e[\w]*\x3c\x2fscript\x3e]*/gi
  );

  let existScript = expReg.test(text);

  if (existScript) {
    return text.replace(expReg, "¡SCRIPT ELIMINADO!");
  } else {
    return "No se ha detectado script";
  }
}
//correcto
let html =
  '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge">' +
  '<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Expresiones regulares</title></head>' +
  '<body style="background-color: lightgray;"><section><h1>Abrir Consola</h1>' +
  /*!!!*/
  '<script src="javaScript.js">ffdf</script>' +
  '<script src="js2.js"></script>' +
  '<script src="js3.js">ffdf</script>' +
  "<script></script>" +
  /*!!!*/
  "</section></body></html>";

console.log(removeScript(html));
//Error no etiqueta
console.warn(
  removeScript(
    '<body style="background-color: lightgray;"><section><h1>Abrir Consola</h1>'
  )
);
console.warn(
  removeScript(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate qui saepe! Tempora possimus id voluptas veniam adipisci nihil maiores sed corrupti molestiae! Pariatur dolores eaque nostrum amet fugit consequuntur."
  )
);

/*Crea una expresión regular que dado un número de cuenta IBAN en formato
ESXXXXXXXXXXXXXXXXXXXXXX nos lo devuelva en porciones de 4
dígitos separado por un “-“.*/
console.log("--------------- APARTADO 8 -----------------");

function editIban(iban) {
  //expReg: empieza^ es-ES; seguido de exactamente 22 números fin$ /explora toda la cadena + case insensitive
  let regex = /^ES[0-9]{22}$/gi;

  let isOk = regex.test(iban);

  if (isOk) {
    //Creo array con bloques de 4 dígitos
    let array = iban.toUpperCase().match(/.{1,4}/gi);
    //uno los bloques con separados -
    return array.join("-");
  } else {
    return "ERROR: IBAN incorrecto";
  }
}

//Correctos
let iban = "ES1223456789012345678901";
console.log(editIban(iban));
let iban2 = "es1223456789012345678901";
console.log(editIban(iban2));
//Incorrectos falta 'es' o 'ES'
let iban3 = "1223456789012345678901";
console.warn(editIban(iban3));
//Incorrectos menos números
let iban4 = "ES6789012345678901";
console.warn(editIban(iban4));
//Incorrectos más números
let iban5 = "ES1223456789012345678901345673456";
console.warn(editIban(iban5));
