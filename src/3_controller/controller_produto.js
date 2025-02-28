
import service_produto from '../2_services/service_produto.js';


async function list(req,res) {
   const produto = req.query.produto
   const list_produto = await service_produto.list(produto)
   res.status(200).json(list_produto)
}

async function list_inner_join(req,res) {
   const celula = req.query.celula
   console.log(celula)
   const list_produtos = await service_produto.list_inner_join(celula)
   if(list_produtos.length == 0 ){
      res.status(200).send('Nenhum Produto Associado a essa Celula')
   }else
      res.status(200).json(list_produtos)
}

async function create(req,res) {
   const produto = req.body;

   // Verifica se as propriedades name e pass estão no JSON recebido
   if (!produto ) {
      return res.status(400).json({ error: 'Campo obrigatório.' });
   }
    await service_produto.create(produto.produto,produto.fk_id_celula)
   res.status(201).send(`Produto cadastra com sucesso`)
}

async function update(req,res) {
   const id_produto = req.params.id_produto
   const {produto, fk_id_celula} = req.body;
   const prod = await service_produto.update(produto ,fk_id_celula,id_produto)
   res.status(200).send(`Produto: '${prod}', atualizada com sucesso`)
}

async function delet(req,res) {
   const id_produto = req.params.id_produto
  const prod = await service_produto.delet(id_produto)
   res.status(200).send(`Produto: '${prod}', deletada com sucesso `)
}




export default {list_inner_join,list,create,update,delet}