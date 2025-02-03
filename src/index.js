import https from "https"; //já pertencem integrados no Node.js
import fs from "fs";//já pertencem integrados no Node.js
import express from "express";
import cors from "cors";
import router from "./router/routes.js";
import path from 'path';
import { fileURLToPath } from 'url';


const app = express()

const corsOptions = {
  origin: '*', // Permitir todas as origens (ou substitua pelo domínio específico)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitido
  
};

app.use(cors(corsOptions))
app.use(express.json())



app.disable('x-powered-by');
app.use((req, res, next) => {
  res.removeHeader('X-Powered-By');
  res.header('Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type,Authorization, Accept,X-PINGOTHER');
  res.header('Access-Control-Allow-Methods', 'GET, PUT,POST, DELETE');
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use(router)


// Carregar os certificados
const options = {
  key: fs.readFileSync("src/.cert/key.pem"),
  cert: fs.readFileSync("src/.cert/cert.pem"),
};

// Criar servidor HTTPS
https.createServer(options, app).listen(3003, () => {
  console.log("Servidor rodando em https://192.168.0.114:3003");
});

// Ajuste para usar __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, '/build')));

// Capturar todas as rotas e redirecionar para o index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

//app.listen(3003, () => { console.log("server running, port 3003") })  
