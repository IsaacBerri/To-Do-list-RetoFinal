
# ToDo List

Esta es una aplicacion que permite agregar cualquier tipo de tarea o quehaceres que tengas pendientes para que lleves un control en tus obligaciones, esta app permine agregar, eliminar, editar, filtrar (Se puede firtrar por categoria, prioridad o fecha) y tachar tareas como completadas.

## Primer Split

En el primer split que tenia una duracion de 5 dias mi equipo de trabajo y yo nos pusimos los objetivos que crear los archivos iniciales del proyecto (HTML, CSS y JavaScript), ademas de eso tambien decidimos crear las 2 funcionalidades principales, la funcionalidad de agregar y eliminar tareas.

### Agregar tarea

![App Screenshot](https://i.postimg.cc/MTyRB4CH/Agregar-tarea.png)

Esta funcion se encarga de agregar una tarea a la app,
la funcionalidad de esta es sencilla.

1. Llama a el contenedor identificado con la calse ".modalCreate" este hace referencia al formulario en el que el usuario ingresa toda la informacion relacionada a la tarea que va a crear en ese momento

2. Despues la funcion "agregarTarea()" se ejecuta cuando se le da click a un boton en el main1 y lo que hace esta funcion es crear un objeto con todos los datos que trajo desde los hijos de el formulario y despues hace un push a el array de las tareas y al mismo tiempo un seteo a el localStorage

### Eliminar Tarea

![App Screenshot](https://i.postimg.cc/pXdw0tqw/Eliminar-tarea.png)

Esta funcion se encarga de eliminar la tarea a la que el usuario le da click.

1. Primero crea una variable que filtra todas las tareas que tengan un nombre diferente al que le llega por parametros a la funcion

2. Despues remueve lo que esta en el localStorage para setear la nueva lista filtrada de tareas


## Authors

- [IsaacBerri](https://github.com/IsaacBerri)
- [dhiego1510](https://github.com/dhiego1510)
- [deiberjerez](https://github.com/deiberjerez)
