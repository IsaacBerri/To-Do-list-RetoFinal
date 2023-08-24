export function eliminarTarea(array, id) {
  let delateTask = array.filter((tarea) => tarea.Nombre !== id);

  localStorage.removeItem("List");
  localStorage.setItem("List", JSON.stringify([...delateTask]));
  location.reload();
}
