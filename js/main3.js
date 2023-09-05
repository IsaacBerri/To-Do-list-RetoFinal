export function eliminarTarea(array, id) {
  let delateTask = array.filter(function (tarea) {
    return tarea.Nombre !== id;
  });

  localStorage.removeItem("List");
  localStorage.setItem("List", JSON.stringify([...delateTask]));
  location.reload();
}

export function editarTarea(formulario, array, index) {
  let validation = formulario.children[3].value === "Completada"
console.log(validation);
  let newTask = {
    Nombre: formulario.children[0].value,
    Prioridad: formulario.children[1].value,
    Categoria: formulario.children[2].value,
    Completada: validation,
    Fecha: formulario.children[4].value,
  };
  array.splice(index, 1, newTask);

  localStorage.removeItem("List");
  localStorage.setItem("List", JSON.stringify([...array]));
  location.reload();
}