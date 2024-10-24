import express from 'express'
import diaryroutes from './routes/diaries'

const app = express()

app.use(express.json())
const PORT = 3000



// Definir una ruta
app.get('/', (_req, res) => {
    res.send('¡Hola, mundo!');
    console.log('App get')
  });

app.use('/api/diaries', diaryroutes)

  
  // Iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });

