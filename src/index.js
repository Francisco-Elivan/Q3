import https from 'https';
import fs from 'fs';


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


// Ajuste para usar __dirname em módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos da build do React
app.use(express.static(path.join(__dirname, '/build')));
    
// Capturar todas as rotas e redirecionar para o index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});   

  app.listen(3003, () => { console.log("serve running") })  

 
