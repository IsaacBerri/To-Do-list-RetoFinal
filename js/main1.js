const containerList = document.querySelector(".containerList");
const section = document.querySelector(".modalCreate")
const butoonCreate = document.querySelector("#buttonCreate")

const task = [];

task.map((x, i) => {
  const createTask = document.createElement("div");
  createTask.className = "Task";
  createTask.id = `taks-${i}`;
  createTask.innerHTML = `
    <h3>${x}</h3>
    <button class="delete">Eliminar</button>`;
  containerList.append(createTask);
});

butoonCreate.addEventListener('click', () => active())

const active = () => {
  if (section.className != "modalCreate active") {
    section.classList.add("active")
  }else {
    section.classList.remove("active")
  }
}

console.log(task);