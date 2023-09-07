const formulario = document.querySelector(".containerModal");
const container = document.querySelector(".containerList");

export function agregarTarea(array) {
  if (formulario.children[1].children[0].value !== "") {
    const newValorPrioridad =
      formulario.children[1].children[1].value == "Prioridad"
        ? "Ninguna"
        : formulario.children[1].children[1].value;
    const newValorCategoria =
      formulario.children[1].children[2].value == "Categoria"
        ? "Ninguna"
        : formulario.children[1].children[2].value;
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

  function agregarActive(x) {
    x.classList.remove("task");
    x.classList.add("active");
  }

  function eliminarActive() {
    convercionArray.map((x) => {
      x.classList.remove("active");
      x.classList.add("task");
    });
  }
  
  if (tipoFiltro === "Todo") {
    eliminarActive();
  } else if (tipoFiltro === "Prioridad") {
    const filtro = convercionArray.filter(
      (tareaPrioridad) => tareaPrioridad.children[1].innerText == "Ninguna"
    );
    eliminarActive();
    filtro.map((x) => {
      agregarActive(x);
    });
  } else if (tipoFiltro === "Fecha") {
    const filtro = convercionArray.filter(
      (tareaFecha) => tareaFecha.children[3].innerText == ""
    );
    eliminarActive();
    filtro.map((tareaFecha) => {
      agregarActive(tareaFecha);
    });
  } else if (tipoFiltro === "Completada") {
    const filtro = convercionArray.filter(
      (tareaCompletada) => tareaCompletada.children[0].className !== "tachado"
    );
    eliminarActive();
    filtro.map((tareaCompletada) => {
      agregarActive(tareaCompletada);
    });
  } else {
    const filtro = convercionArray.filter(
      (tareaCategoria) => tareaCategoria.children[2].innerText !== tipoFiltro
    );
    eliminarActive();
    filtro.map((tareaCategoria) => {
      agregarActive(tareaCategoria);
    });
  }
}
