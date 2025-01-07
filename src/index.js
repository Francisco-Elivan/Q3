import express from "express";
import cors from "cors";
import router from "./router/routes.js";


const app = express()
// Servir arquivos estáticos do React
app.use(express.static(path.join(__dirname, 'build')));

// Rota específica para o service-worker.js
app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'service-worker.js'));
});

// Fallback para o index.html para outras rotas
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



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
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use(router)

app.listen(3003, () => { console.log("server running") })  
