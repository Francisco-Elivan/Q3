import bcrypt, { hash } from 'bcrypt'
import repository_auditor from "../1_repository_query/repository_auditor.js"
import jwt from "../token/token.js";

async function list(name) {
   const list = await repository_auditor.list(name)
   return list
}

async function create(name, email, pass) {
   let date_create = new Date()
   date_create = date_create.toLocaleDateString()
   
   const hash_pass = await bcrypt.hash(pass, 11)
   const user = await repository_auditor.create(name, email, hash_pass, date_create)
   user.token = jwt.CreateToken(user.id_auditor)
   return user
}

async function login(name, pass) {

   const user = await repository_auditor.byname(name)
   if (user.length == 0) {
      return []
   } else {
      if (await bcrypt.compare(pass, user.pass)) {
         delete user.pass

         user.token = jwt.CreateToken(user.id_auditor)
         return user
      } else
         return [];

   }

}
export default { list, create, login }