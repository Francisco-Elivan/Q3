import service_celula from '../2_services/service_celula.js';



async function list(req,res) {
   const celula = req.query.celula
   const list_celulas = await service_celula.list(celula)
   res.status(200).json(list_celulas)
}

async function create(req,res) {
   const celula = req.body;
   console.log(celula)
   
   // Verifica se as propriedades name e pass estão no JSON recebido
   if (!celula ) {
      return res.status(400).json({ error: 'Campo obrigatório.' });
   }
   const celula_id = await service_celula.create(celula.celula)
   res.status(201).send(`Celula: '${celula.celula}', cadastra com sucesso `)
}  
async function update(req,res) {
   const id_celula = req.params.id_celula
   const celula = req.body;
   console.log(id_celula)
   console.log(celula)
    
   const cell = await service_celula.update(id_celula ,celula.celula)
   res.status(200).send(`Celula: '${cell}', Editada com sucesso`)
}
async function delet(req,res) {
   const id_celula = req.params.id_celula
  const cell = await service_celula.delet(id_celula)
   res.status(200).send(`Celula: '${cell}', Excluido com sucesso `)
}





export default {list,create,update,delet}