import { query } from "../_database/sqlite.js"


async function list(produto) {
  let fill = []
  let sql = `SELECT * FROM produto `
  if (produto) {
    fill.push('%' + produto + '%')
    sql = sql + ' where produto like ? '
  }
  sql = sql + 'order by id_produto'
  const list_produto = await query(sql, fill)
  return list_produto 
}  

async function list_inner_join(celula) {


 let sql = `SELECT p.produto ,  p.id_produto FROM produto p inner join celula c
  where p.fk_id_celula = c.id_celula and c.celula = ? order by p.produto
  `
  const list_produtos = await query(sql, [celula])
  console.log('//////////////repository//////////////////////////')
  console.log(list_produtos)

  return list_produtos
}


async function create(produto,fk_id_celula) {

  let sql = `INSERT INTO produto (produto,fk_id_celula) VALUES(?,?) RETURNING id_produto`

  const produto_id = await query(sql, [produto,fk_id_celula])
  return produto_id[0]
}

async function update(id_produto,produto) {

  let sql = `UPDATE produto SET produto = ? WHERE id_produto = ?`

  await query(sql, [produto,id_produto])
  return produto
}

async function delet(id_produto) {

  let sql = `DELETE FROM produto WHERE id_produto = ? RETURNING produto`

  const prod = await query(sql, [id_produto])
  console.log(prod[0].produto)
  return prod[0].produto
}


export default {list_inner_join,list,create,update,delet}