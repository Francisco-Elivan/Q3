import repository_produto from "../1_repository_query/repository_produto.js"


async function list(produto) {
   const list_produto = await repository_produto.list(produto)
   return list_produto
}

async function list_inner_join(celula) {
   const list_produtos = await repository_produto.list_inner_join(celula)
   console.log('//////////////service//////////////////////////')
   console.log(list_produtos)
   return list_produtos
}

async function create(produto,fk_id_celula) {
   const produto_id = await repository_produto.create(produto,fk_id_celula)
   return produto_id
}
async function update(produto, fk_id_celula, id_produto) {
   const prod = await repository_produto.update(produto, fk_id_celula, id_produto)
   return prod
}

async function delet(id_produto) {
   const prod = await repository_produto.delet(id_produto)
   return prod
}
export default{list_inner_join,list,create,update,delet}