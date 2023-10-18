const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// Conecta a la base de datos MongoDB
mongoose.connect('mongodb://localhost/studenthub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verifica la conexión a la base de datos
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

app.use(express.static(path.join(__dirname, 'public')));

// Define rutas y lógica de tu aplicación aquí

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
