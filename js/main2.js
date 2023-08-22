//creaer nueva tarea;
//crear objeto dentro de un array para agregar tarea;
const Formulaio = document.querySelector(".modalCreate");

function agregarTarea(array) {
    Formulaio.addEventListener("submit", (e) => {

        const tarea = {
            Nombre: e.target.nombre.value,
            Categoria: e.target.categoria.value,
            Prioridad: e.target.prioridad.value,
            Fecha: e.target.fecha.value
        }
        array.push(tarea)
    })


}

agregarTarea();

