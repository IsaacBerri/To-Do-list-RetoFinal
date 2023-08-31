const formulario = document.querySelector(".containerModal");

export function agregarTarea(array) {
  const tarea = {
    Nombre: formulario.children[1].children[0].value,
    Prioridad: formulario.children[1].children[1].value,
    Categoria: formulario.children[1].children[2].value,
    Fecha: formulario.children[1].children[3].value,
    Completada: false
  };
  window.localStorage.setItem("List", JSON.stringify([...array, tarea]));
  array.push(tarea);
  location.reload();
}

export function filtrarTareas(){
  console.log("Puto");
}

