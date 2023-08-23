import { agregarTarea } from "./main2.js";

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
    <button class="delete">Eliminar</button>`;
  containerList.append(createTask);
  console.log(x);
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

console.log(task);


// main2.js

// const Formulaio = document.querySelector(".modalCreate");

// export function agregarTarea(array) {
//   const tarea = {
//     Nombre: Formulaio.children[0].value,
//     Categoria: Formulaio.children[1].value,
//     Prioridad: Formulaio.children[2].value,
//     Fecha: Formulaio.children[3].value,
//   };
//   window.localStorage.setItem("List", JSON.stringify([...array, tarea]))
//   array.push(tarea);
//   location.reload()
// }