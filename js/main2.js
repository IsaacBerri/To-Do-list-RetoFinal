const formulario = document.querySelector(".containerModal");
const container = document.querySelector(".containerList");

export function agregarTarea(array) {
  if (formulario.children[1].children[0].value !== "") {
    const newValorPrioridad = formulario.children[1].children[1].value == "Prioridad" ? "Ninguna" : formulario.children[1].children[1].value
    const newValorCategoria = formulario.children[1].children[2].value == "Categoria" ? "Ninguna" : formulario.children[1].children[2].value
    const tarea = {
      Nombre: formulario.children[1].children[0].value,
      Prioridad: newValorPrioridad,
      Categoria: newValorCategoria,
      Fecha: formulario.children[1].children[3].value,
      Completada: false,
    };
    window.localStorage.setItem("List", JSON.stringify([...array, tarea]));
    location.reload();
  }
}

export function filtrarTareas(tipoFiltro) {
  const convercionArray = [...container.children];

  function eliminarActive() {
    convercionArray.map((x) => {
      x.classList.remove("active");
      x.classList.add("task");
    });
  }

  if (tipoFiltro === "Todo") {
    eliminarActive();
  } else if (tipoFiltro === "Prioridad") {
    eliminarActive();
    const filtro = convercionArray.filter(
      (x) => x.children[1].innerText == "Ninguna"
    );
    eliminarActive();
    filtro.map((x) => {
      x.classList.remove("task");
      x.classList.add("active");
      console.log(x);
    });
  } else if (tipoFiltro === "Fecha") {
    console.log(tipoFiltro);
    const filtro = convercionArray.filter((x) => x.children[3].innerText == "");
    console.log(filtro);
    eliminarActive();
    filtro.map((x) => {
      x.classList.remove("task");
      x.classList.add("active");
    });
  } else if (tipoFiltro === "Completada") {
    const filtro = convercionArray.filter(
      (x) => x.children[0].className !== "tachado"
    );
    eliminarActive();
    filtro.map((x) => {
      x.classList.remove("task");
      x.classList.add("active");
    });
  } else {
    const filtro = convercionArray.filter(
      (x) => x.children[2].innerText !== tipoFiltro
    );
    eliminarActive();
    filtro.map((x) => {
      x.classList.remove("task");
      x.classList.add("active");
    });
  }
}
