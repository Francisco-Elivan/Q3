import service_auditor from '../2_services/service_auditor.js'


async function list(req, res) {
   const name = req.query.name
   const list = await service_auditor.list(name)
   res.status(200).json(list)
}

async function create(req, res) {
   const usuario = req.body;

     
   // Verifica se as propriedades name e pass estão no JSON recebido
   if (!usuario.name || !usuario.pass || !usuario.email) {
      return res.status(400).json({ error: 'Campos são obrigatórios.' });
   }
   const user_id = await service_auditor.create(usuario.name, usuario.email, usuario.pass)
   res.status(201).json(user_id)
}

async function login(req, res) {
   const { name, pass } = req.body;
   const user = await service_auditor.login(name, pass)
   if (user.length == 0) {
      res.status(401).json({error:"E-mail ou senha invalida"})
   } else {
      res.status(200).json(user)
   }
}

         

export default { list, create, login }