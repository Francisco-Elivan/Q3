import { query } from "../_database/sqlite.js"


async function list(celula) {
  let fill = []
  let sql = `SELECT * FROM celula `
  if (celula) {
    fill.push('%' + celula + '%')
    sql = sql + ' where celula like ? '
  }
  sql = sql + 'order by id_celula desc'
  const list_celulas = await query(sql, fill)
  return list_celulas 
}


async function create(celula) {

  let sql = `INSERT INTO celula (celula) VALUES(?) RETURNING id_celula`

  const celula_id = await query(sql, [celula])
  return celula_id[0]
}

async function update(id_celula,celula) {

  let sql = `UPDATE celula SET celula = ? WHERE id_celula = ?`

  await query(sql, [celula,id_celula])
  return celula
}

async function delet(id_celula) {

  let sql = `DELETE FROM celula WHERE id_celula = ? RETURNING celula`

  const cell = await query(sql, [id_celula])
 
  return cell[0].celula
}


export default { list,create,update,delet}