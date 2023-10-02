const readline = require('readline-sync');

const colors = require('colors')

// Definir la lista de tareas
const tareas = [];

// Función para agregar una tarea
function agregarTarea() {
  const id = readline.question('Indicador de la tarea: '.blue);
  const descripcion = readline.question('Descripción de la tarea: '.blue);
  const estado = 'incompleta';

  const tarea = {
    id,
    descripcion,
    estado,
  };
   //Tarea
  tareas.push(tarea);
  console.log('Tarea agregada con éxito.');
}

// Función para eliminar una tarea por indicador
function eliminarTarea() {
  const id = readline.question('Indicador de la tarea a eliminar: ');
  const tareaIndex = tareas.findIndex((t) => t.id === id);

  if (tareaIndex !== -1) {
    tareas.splice(tareaIndex, 1);
    console.log('Tarea eliminada con éxito.');
  } else {
    console.log('No se encontró una tarea con ese indicador.');
  }
}

// Función para marcar una tarea como completada
function completarTarea() {
  const id = readline.question('Indicador de la tarea a marcar como completada: ');
  const tarea = tareas.find((t) => t.id === id);

  if (tarea) {
    tarea.estado = 'completa';
    console.log('Tarea marcada como completada.');
  } else {
    console.log('No se encontró una tarea con ese indicador.');
  }
}

// Función principal mostrar menu
function main() {
  while (true) {
    console.log('\nLista de Tareas');
    console.log('1. Agregar tarea'.green);
    console.log('2. Eliminar tarea'.green);
    console.log('3. Completar tarea'.green);
    console.log('4. Mostrar lista de tareas'.green);
    console.log('5. Salir'.green);

    const opcion = readline.question('Elija una opción: ');

    switch (opcion) {
      case '1':
        agregarTarea();
        break;
      case '2':
        eliminarTarea();
        break;
      case '3':
        completarTarea();
        break;
      case '4':
        console.log('\nLista de tareas:');
        tareas.forEach((t, index) => {
          console.table(tareas)
         // console.log(`${index + 1}. Indicador: ${t.id}, Descripción: ${t.descripcion}, Estado: ${t.estado}`);
        });
        break;
      case '5':
        console.log('Saliendo del programa.');
        return;
      default:
        console.log('Opción no válida. Intente de nuevo.');
    }
  }
}

// Ejecutar la función principal
main();
