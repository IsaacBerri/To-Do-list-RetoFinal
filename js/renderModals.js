import { agregarTarea, filtrarTareas } from "./main2.js";
// import { editarTarea } from "./main3.js";
const containerModals = document.querySelector(".containerModal");

export const renderModalCreate = (array) => {
  if (containerModals.className != "containerModal active") {
    containerModals.classList.add("active");
    containerModals.removeChild(containerModals.children[1]);
  } else {
    containerModals.classList.remove("active");
    const modalCreate = document.createElement("section");
    modalCreate.className = "modalCreate";
    modalCreate.innerHTML = `
      <input name="nombre" type="text" autocomplete="off"/>
      <select name="prioridad">
      <option>Ninguna</option>
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>
      <select name="categoria">
      <option>Ninguna</option>
        <option>Hogar</option>
        <option>GYM</option>
        <option>Trabajo</option>
        <option>Estudio</option>
        <option>Juegos</option>
        <option>Otros</option>
      </select>
      <input type="date" name="fecha"/>
      <button id="buttonSubmit" type="submit">Agregar</button>`;

    containerModals.append(modalCreate);
    buttonSubmit.addEventListener("click", () => agregarTarea(array));
  }
};

export const renderModalEdit = (array, index) => {
  if (containerModals.className != "containerModal active") {
    containerModals.classList.add("active");
    containerModals.removeChild(containerModals.children[1]);
  } else {
    containerModals.classList.remove("active");
    const modalEdit = document.createElement("section");
    modalEdit.className = "modalEdit";
    modalEdit.innerHTML = `
        <input name="nombre" type="text" autocomplete="off"/>
        <select name="prioridad">
          <option>Ninguna</option>
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>
        <select name="categoria">
          <option>Ninguna</option>
          <option>Hogar</option>
          <option>GYM</option>
          <option>Trabajo</option>
          <option>Estudio</option>
          <option>Juegos</option>
          <option>Otros</option>
        </select>
        <input type="date" name="fecha"/>
        <button id="buttonSubmitEdit" type="submit">Editar</button>`;
    modalEdit.children[0].value = array[index].Nombre;
    modalEdit.children[1].value = array[index].Prioridad;
    modalEdit.children[2].value = array[index].Categoria;
    modalEdit.children[3].value = array[index].Fecha;

    containerModals.append(modalEdit);
    // buttonSubmitEdit.addEventListener("click", () => editarTarea(modalEdit, array, index));
  }
};

export const renderModalFilter = (array) => {
    if (containerModals.className != "containerModal active") {
        containerModals.classList.add("active");
        containerModals.removeChild(containerModals.children[1]);
      } else {
        containerModals.classList.remove("active");
        const modalFilter = document.createElement("section");
        modalFilter.className = "modalFilter";
        modalFilter.innerHTML = `
        <button>Todo</button>
        <button>Prioridad</button>
        <button>Categoria</button>
        <button>Fecha</button>
        <button>Completada</button>`;
        containerModals.append(modalFilter)
        filtrarTareas(array, "")
      }
};
