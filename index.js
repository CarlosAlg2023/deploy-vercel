// Importa el módulo express
const express = require('express');

// Crea una instancia de la aplicación Express
const app = express();
const port = process.env.PORT || 3001;

// Define una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Hola, este es un servidor Express!');
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
