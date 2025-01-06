import repository_celula from "../1_repository_query/repository_celula.js"


async function list(celula) {
   const list_celulas = await repository_celula.list(celula)
   return list_celulas
}

async function create(celula) {
   const celula_id = await repository_celula.create(celula)
   return celula_id
}
async function update(id_celula,celula) {
   const cell = await repository_celula.update(id_celula,celula)
   return cell
}

async function delet(id_celula) {
   const cell = await repository_celula.delet(id_celula)
   return cell
}

export default{list,create,update,delet}