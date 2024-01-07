const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/index.js', (req, res) => {
  res.send('otro');
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
