const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo deseas

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});


app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
