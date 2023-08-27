import { agregarTarea } from "./main2.js";
import { eliminarTarea } from "./main3.js";

const containerList = document.querySelector(".containerList");
const section = document.querySelector(".modalCreate")
const butoonCreate = document.querySelector("#buttonCreate")
const buttonSubmit = document.querySelector('#buttonSubmit')

const task = JSON.parse(localStorage.getItem("List")) || []

task.map((x, i) => {
  const createTask = document.createElement("div");
  createTask.className = "Task";
  createTask.id = `taks-${i}`;
  createTask.innerHTML = `
    <h3>${x.Nombre}</h3>
    <p>${x.Prioridad}</p>
    <p>${x.Categoria}</p>
    <p>${x.Fecha}</p>
    <button class="delete">Eliminar</button>`;
  containerList.append(createTask);
  const buttonDelete = document.querySelectorAll(".delete")
  buttonDelete[i].addEventListener('click', () => eliminarTarea(task, x.Nombre))
});

butoonCreate.addEventListener('click', () => active())

const active = () => {
  if (section.className != "modalCreate active") {
    section.classList.add("active")
  }else {
    section.classList.remove("active")
  }
}

buttonSubmit.addEventListener('click', () => {agregarTarea(task)})