const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/tareas' && req.method === 'GET') {
    // Define una lista de tareas en formato JSON
    const listaDeTareas = [
      {
        id: 1,
        tarea: 'Hacer la compra',
        descripcion: 'Comprar víveres para la semana',
        completado: false
      },
      {
        id: 2,
        tarea: 'Estudiar para el examen',
        descripcion: 'Preparar para el examen de matemáticas',
        completado: true
      },
      {
        id: 3,
        tarea: 'Hacer ejercicio',
        descripcion: 'Ir al gimnasio durante 1 hora',
        completado: false
      }
    ];

    // Configura la respuesta como JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(listaDeTareas));
  } else {
    // Ruta no encontrada
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

// Escucha en el puerto 3000

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});