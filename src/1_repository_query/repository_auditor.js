import { query } from "../_database/sqlite.js"


async function list(name) {
  let fill = []
  let sql = `SELECT id_auditor, name,email,date_create FROM auditor `
  if (name) {
    fill.push('%' + name + '%')
    sql = sql + ' where name like ? '
  }
  sql = sql + 'order by name'
  const user = await query(sql, fill)
  return user
}


async function create(name, email, password,date_create) {

  let sql = `INSERT INTO auditor (name,email,pass,date_create) VALUES(?,?,?,?) RETURNING id_auditor, name , email, date_create`

  const user_id = await query(sql, [name, email, password,date_create])
  return user_id[0]
}

async function byname(name) {

  let sql = `SELECT * FROM auditor where name = ?`

  const user = await query(sql, [name])
  if (user.length == 0) {
    return []
  } else {
    return user[0]
  }

}



export default { list, create, byname }