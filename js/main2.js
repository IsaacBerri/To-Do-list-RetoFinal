const formulario = document.querySelector(".modalCreate");

export function agregarTarea(array) {
  const tarea = {
    Nombre: formulario.children[0].value,
    Prioridad: formulario.children[1].value,
    Categoria: formulario.children[2].value,
    Fecha: formulario.children[3].value,
  };
  window.localStorage.setItem("List", JSON.stringify([...array, tarea]));
  array.push(tarea);
  location.reload();
}

