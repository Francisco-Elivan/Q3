import repository_response from "../1_repository_query/repository_response.js"

async function set(auditor, celula, produto, turno, ok, nok , na, observation, img, data, section, questionId, question) {
    const id_response = await repository_response.set(auditor, celula, produto, turno, ok, nok , na, observation, img, data, section, questionId, question)
   // console.log('/////////////SERVICE////////////')
   // console.log(auditor, celula, produto, turno, ok, nok , na, observation, img, data, section, questionId, question)
    return id_response                               //        auditor,          celula,         produto,          turno,          ok,         nok,          na,          observation, img,          date,          section,          indice_question,     question)
 }
 
 export default{set}