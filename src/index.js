import express from "express";
import cors from "cors";
import router from "./router/routes.js";



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

app.listen(3003, () => { console.log("server running, port 3003") })  
