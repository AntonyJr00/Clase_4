///ejercicio 10y 11------------

// let users = [];
// let idUse = 0;

// function informacion() {
//   const info = prompt("ingrese su: nombre, apellido, edad, profesion");
//   let dato = info.split(", ");
//   //   let fecha = new Date();
//   let objeto = {
//     id: idUse,
//     nombre: dato[0],
//     apellido: dato[1],
//     edad: dato[2],
//     profesion: dato[3],
//     fechaCreada: new Date(año, mes, fecha),
//   };
//   idUse++;
//   users.push(objeto);
//   console.log(objeto);
// }

// informacion();

//12.
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)

const usuarios = [
  {
    id: 1,
    nombre: "Andres",
    apellido: "Pacheco",
    edad: 38,
    profesion: "developer",
    created_at: new Date("2022-09-26T06:25:21.118Z"),
  },
  {
    id: 2,
    nombre: "Andrea",
    apellido: "Sanchez",
    edad: 25,
    profesion: "profesor",
    created_at: new Date("2022-04-18T14:14:32.879Z"),
  },
  {
    id: 3,
    nombre: "Julia",
    apellido: "Ochoa",
    edad: 32,
    profesion: "musico",
    created_at: new Date("2021-12-14T11:53:38.279Z"),
  },
  {
    id: 4,
    nombre: "Samuel",
    apellido: "Martinez",
    edad: 29,
    profesion: "programador",
    created_at: new Date("2022-01-26T03:31:15.202Z"),
  },
  {
    id: 5,
    nombre: "Roberto",
    apellido: "Mattos",
    edad: 40,
    profesion: "chef",
    created_at: new Date("2022-07-27T02:06:22.760Z"),
  },
  {
    id: 6,
    nombre: "Mercedes",
    apellido: "Sanchez",
    edad: 35,
    profesion: "veterinario",
    created_at: new Date("2022-05-01T22:06:35.864Z"),
  },
];

// function fechaOrdenada(usuarios) {
//   const orderUsuario = usuarios
//     .slice()
//     .sort((a, b) => b.created_at - a.created_at);
//   console.log(orderUsuario);

//   //   orderUsuarioReversa = orderUsuario.reverse();
// }
// fechaOrdenada(usuarios);

//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.
function filtrarfecha(usuarios) {
  let datedilter = usuarios.filter((a) => a.created_at === usuarios);
  let result = datedilter.length === 0 ? "fecha encontrada" : datedilter;
  console.log(result);
} // no resuelta xd, va a ser subida al git
