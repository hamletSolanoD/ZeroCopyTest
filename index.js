import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import apiRouter from './routes/api.js';

// Configuración de __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuración de middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de la carpeta pública para servir el frontend
app.use(express.static(path.join(__dirname, 'client')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Endpoint para la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Usar el enrutador principal para todas las rutas de la API
app.use('/api', apiRouter);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
