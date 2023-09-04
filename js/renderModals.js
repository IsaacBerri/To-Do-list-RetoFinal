import { agregarTarea, filtrarTareas } from "./main2.js";
import { editarTarea } from "./main3.js";
const containerModals = document.querySelector(".containerModal");

export const renderModalCreate = (array) => {
  if (containerModals.className != "containerModal active") {
    containerModals.classList.add("active");
    containerModals.removeChild(containerModals.children[1]);
  } else {
    containerModals.classList.remove("active");
    const modalCreate = document.createElement("form");
    modalCreate.className = "modalCreate modalStyle";
    modalCreate.innerHTML = `
      <input required class="inputNombre" placeholder="Nombre" type="text" autocomplete="off"/>
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
      <button class="buttonStyle1" id="buttonSubmit" type="submit">Agregar</button>`;

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
    const modalEdit = document.createElement("from");
    modalEdit.className = "modalEdit modalStyle";
    modalEdit.innerHTML = `
        <input required name="nombre" type="text" autocomplete="off"/>
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
        <select>
          <option>Pendiente</option>
          <option>Completada</option>
        </select>
        <input type="date" name="fecha"/>
        <button class="buttonStyle1" id="buttonSubmitEdit" type="submit">Editar</button>`;
    modalEdit.children[0].value = array[index].Nombre;
    modalEdit.children[1].value = array[index].Prioridad;
    modalEdit.children[2].value = array[index].Categoria;
    modalEdit.children[4].value = array[index].Fecha;
    console.log(array);
    containerModals.append(modalEdit);
    buttonSubmitEdit.addEventListener("click", () => editarTarea(modalEdit, array, index));
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
        <h3>Filtros</h3>
        <div class="filtros">
        <button class="buttonStyle1">Todo</button>
        <button class="buttonStyle1">Prioridad</button>
        <button class="buttonStyle1">Fecha</button>
        <button class="buttonStyle1">Completada</button>
        </div>
        <h3>Categorias</h3>
        <div class="filtrosCategoria">
        <button class="buttonStyle1">Hogar</button>
        <button class="buttonStyle1">GYM</button>
        <button class="buttonStyle1">Trabajo</button>
        <button class="buttonStyle1">Estudio</button>
        <button class="buttonStyle1">Juegos</button>
        <button class="buttonStyle1">Otros</button>
        </div>`;
    const filtros = [...modalFilter.children[1].children];
    const todosLosFiltros = filtros.concat([
      ...modalFilter.children[3].children,
    ]);
    todosLosFiltros.map((x) => {
      x.addEventListener("click", () => filtrarTareas(array, x.innerText));
    });
    containerModals.append(modalFilter);
  }
};
