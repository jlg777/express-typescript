import express from 'express'

const app = express()

app.use(express.json())
const PORT = 3000

// Definir una ruta
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
  });
  
  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });