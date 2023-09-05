import { eliminarTarea } from "./main3.js";
import {
  renderModalCreate,
  renderModalEdit,
  renderModalFilter,
} from "./renderModals.js";

const containerList = document.querySelector(".containerList");
const butoonCreate = document.querySelectorAll(".buttonCreate");
const butoonFilter = document.querySelector(".buttonFilter");

const task = JSON.parse(localStorage.getItem("List")) || [];

const renderizarTareas = () => {
  task.map((x, i) => {
    const createTask = document.createElement("div");
    createTask.className = "task";
    createTask.innerHTML = `
      <h3 class=${x.Completada ? "tachado" : null}>${x.Nombre}</h3>
      <p>${x.Prioridad}</p>
      <p>${x.Categoria}</p>
      <p>${x.Fecha}</p>
      <div class="contenerButtonTask">
      <button class="delete buttonStyle2"><img src="../assets/delete-fill.svg" alt=""/></button>
      <button class="edit buttonStyle2 ${
        x.Completada ? "active" : null
      }"><img src="../assets/edit-duotone.svg" alt=""/></button>
      </div>`;
    containerList.append(createTask);
    const buttonDelete = document.querySelectorAll(".delete");
    buttonDelete[i].addEventListener("click", () =>
      eliminarTarea(task, x.Nombre)
    );
    const buttonEdit = document.querySelectorAll(".edit");
    buttonEdit[i].addEventListener("click", () => renderModalEdit(task, i));
  });
};
butoonCreate.forEach((button) => {
  button.addEventListener("click", () => renderModalCreate(task));
});

butoonFilter.addEventListener("click", () => renderModalFilter());

renderizarTareas();