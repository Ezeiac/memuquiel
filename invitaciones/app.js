const express = require('express');
const app = express();
const port = 4200;

// Servir archivos estáticos como HTML, CSS, JS
app.use(express.static('public'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
