///ejercicio 10y 11------------

let usuarios = [
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
let idUse = 7;
function crearRegistro(id = "") {
  const info = prompt("ingrese su: nombre, apellido, edad, profesion");
  let dato = info.split(", ");
  let objeto = {
    id: idUse,
    nombre: dato[0],
    apellido: dato[1],
    edad: dato[2],
    profesion: dato[3],
    //EJERCICIO 11
    created_at: new Date(),
  };
  idUse++;
  //SI HAY UN ID EN EL PARAMETRO SE ACTUALIZA
  if (id) {
    const index = usuarios.findIndex((user) => user.id == id);
    usuarios[index] = {
      ...objeto,
      id,
      created_at: usuarios[index].created_at,
      modified_at: new Date(),
    };
    // SINO SE CREA UN NUEVO REGISTRO
  } else {
    usuarios.push(objeto);
  }
  renderizarTabla();
}

// informacion();

//12.
// Crear una funcion que permita ordenar la lista de usuarios por fecha de creacion, de la mas nueva a la mas antigua y viceversa
// utilizando el parametro booleano reverse (si es true se ordenaran de nuevo a antiguo)

// function fechaOrdenada(usuarios) {
//   const orderUsuario = usuarios
//     .slice()
//     .sort((a, b) => b.created_at - a.created_at);
//   console.log(orderUsuario);

//   //   orderUsuarioReversa = orderUsuario.reverse();
// }
// fechaOrdenada(usuarios);

//13. Crear una funcion que permita filtrar los usuarios por mes y año de creacion.
// function filtrarfecha(mes = "", año = "") {
//   let datedilter = usuarios.filter((item) => {
//     const getMes = item.created_at.toLocaleDateString().split("/")[1];
//     const getAnio = item.created_at.toLocaleDateString().split("/")[2];
//     if (getMes == mes || getAnio == año) {
//       return true;
//     }
//     return false;
//   });
//   let result = !datedilter.length ? "fecha no encontrada" : datedilter;
//   console.log(result);
// }
// let mes = prompt("ingrese mes: ");
// let año = prompt("ingrese año: ");
// filtrarfecha(mes, año);

// 14" Elaborar un programa que permita al admin a traves de prompts y alerts lo siguiente:"
const root = document.getElementById("root");
function renderizarTabla() {
  root.innerHTML = "";
  const tabla = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");
  for (const key in usuarios[0]) {
    const th = document.createElement("th");
    th.innerText = key;
    tr.append(th);
  }
  thead.append(tr);
  tabla.append(thead);
  tbody.innerHTML = usuarios
    .map((u) => {
      return `
    <tr>
      <td>${u.id}</td>
      <td>${u.nombre}</td>
      <td>${u.apellido}</td>
      <td>${u.edad}</td>
      <td>${u.profesion}</td>
      <td>${u.created_at}</td>
      <td>${u.modified_at || "--No ha sido moficado--"}</td>
    </tr>
    `;
    })
    .join("");
  tabla.append(tbody);
  root.append(tabla);
  const btnCrear = document.createElement("button");
  btnCrear.textContent = "Crear registro";
  const btnMoficiar = document.createElement("button");
  btnMoficiar.textContent = "Modificar registro";
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar registro";
  root.append(btnCrear);
  root.append(btnMoficiar);
  root.append(btnEliminar);
  btnCrear.addEventListener("click", crearRegistro);
  btnMoficiar.addEventListener("click", updateRegistro);
  btnEliminar.addEventListener("click", eliminarRegistro);
}
renderizarTabla();

// CREATE
// El admin debe poder crear un nuevo registro de usuario utilizando la funcion 10.

// READ
// El admin debe poder visualizar en pantalla los registros que estan siendo creados.

// UPDATE
// El admin, al presionar un boton: "Modificar registro" en la parte inferior de la lista de registros, debe
// ver un prompt que le pida que ingrese el id del registro que desea modificar, en caso no ingrese ninguno,
// debe volver a la pagina inicial. Si elige modificar alguno, debe aparecer nuevamente el prompt del ejercicio 10
// OJO: Cuando el admin modifique el registro, no se debe modificar la fecha de creacion, en su lugar debe aparecer
// un nuevo campo de fecha de modificacion.
function updateRegistro() {
  let id = prompt(
    `Ingresar ID a modificar: (${[...usuarios.map((u) => u.id)]})`
  );
  if (!id || !usuarios.map((u) => u.id).includes(Number(id))) {
    console.log("Operacion cancelada");
    return;
  }
  crearRegistro(id);
}
// DELETE
// El admin, al presionar un boton: "Borrar registro" en la parte inferior de la lista de registros, debe ver
// un prompt que le pida ingresar el id del registro que desea borrar. Al dar click, debe aparecer un prompt
// que le pregunte: "Esta usted seguro? Si/No" y al escribir Si, deberia borrarlo. En cualquier otro caso
// deberia volver a la pagina inicial sin que se haya borrado ningun registro.
function eliminarRegistro() {
  let ids = [...usuarios.map((u) => u.id)];
  let id = prompt(`Ingresar ID de regsitro a eliminar: (${ids})`);
  if (!id || !usuarios.map((u) => u.id).includes(Number(id))) {
    console.log("mal");
    return;
  }
  let opcion = prompt("Esta usted seguro? Si/No");
  if (opcion == "No") {
    return;
  }
  const usersUpdate = usuarios.filter((user) => user.id != id);
  usuarios = usersUpdate;
  renderizarTabla();
}
// OPCIONAL1: Añadir a la tabla la funcionalidad de ordenar los registros al hacer click en los encabezados
// (como en el caso de Pokemon). Sin embargo, al momento de hacer click nuevamente en el encabezado, los datos
// deben ordenarse de manera inversa. Ejemplo: Si al hacer click se ordenan de menor a mayor, al volver a hacer
// click deben ordenarse de mayor a menor.

let sort = true; //aun sin hacer xd
function ordenarEncabezados() {
  if (sort) {
    usuarios.sort("mayor a menor");
  } else {
    usuarios.sort("menor a menor");
  }
  renderizarTabla();
  sort = !sort;
}

// OPCIONAL2: Crear un selector que permita filtrar los datos por fecha.
