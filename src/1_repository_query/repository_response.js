
import { query } from "../_database/sqlite.js"

// const list = await repository_response.set(response.questionId, response.question, response.ok ,response.na, response.section, response.observation, response.auditor, response.turno, response.celula, response.produto, response.data,img)

async function set(auditor, celula, produto,turno, ok, nok, na, observation, img,date,section,indice_question,question) {

    let sql = `INSERT INTO response_question (
    auditor,
    celula,
    produto,
    turno,
    ok,
    nok,
    na,
    observation,
    img,
    date,
    section,
    indice_question,
    question
)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)

returning id_response;
`
//console.log('/////////////////REPOSITORY////////////////////')
//console.log(auditor, celula, produto,turno, ok, nok, na, observation, img,date,section,indice_question,question)
const id_response = await query(sql, [auditor, celula, produto,turno, ok, nok, na, observation, img,date,section,indice_question,question])
return id_response[0]



}
//{ questionId, question, ok, nok, na, section, observation, auditor, turno, celula, produto, data }
export default { set }





























































































/*
async function listResponseQuestion() {
    let sql = `SELECT 
     ct.id_category,ct.category AS section,
     JSON_GROUP_ARRAY(
         JSON_OBJECT(
             'id', qt.indice,
             'question', qt.question
         )
     ) AS questions
 FROM 
     question qt
     INNER JOIN question_category ct ON qt.id_ques_category = ct.id_category
 GROUP BY 
     ct.id_category;
 
  `
     const data = await query(sql,[])
 
 
 
 
 // Transformar o campo 'questions' de string para um array JSON
 const transformedResult = data.map(item => ({
     ...item,
     questions: JSON.parse(item.questions)
 }));
 
 //return transformedResult;
 
  const dados = [
     {
         "1.1": "OK", "1.2": "OK", "2.1": "OK", "2.2": "OK",
         "3.1": "OK", "4.1": "OK", "4.2": "OK", "4.3": "OK",
         "5.1": "OK", "5.2": "OK", "5.3": "NOK", "6.1": "OK",
         "7.1": "OK", "7.2": "OK", "8.1": "OK", "9.1": "OK",
         "9.2": "OK", "10.1": "OK", "10.2": "OK"
     },
     {
         "1.1": "OK", "1.2": "OK", "2.1": "OK", "2.2": "OK",
         "3.1": "OK", "4.1": "OK", "4.2": "OK", "4.3": "OK",
         "5.1": "OK", "5.2": "OK", "5.3": "OK", "6.1": "OK",
         "7.1": "NOK", "7.2": "OK", "8.1": "OK", "9.1": "OK",
         "9.2": "OK", "10.1": "OK", "10.2": "OK"
     },
     {
         "1.1": "OK", "1.2": "OK", "2.1": "OK", "2.2": "OK",
         "3.1": "NOK", "4.1": "OK", "4.2": "OK", "4.3": "OK",
         "5.1": "OK", "5.2": "OK", "5.3": "OK", "6.1": "OK",
         "7.1": "OK", "7.2": "OK", "8.1": "OK", "9.1": "OK",
         "9.2": "OK", "10.1": "OK", "10.2": "OK"
     },
     {
         "1.1": "OK", "1.2": "OK", "2.1": "OK", "2.2": "OK",
         "3.1": "NOK", "4.1": "OK", "4.2": "OK", "4.3": "OK",
         "5.1": "OK", "5.2": "OK", "5.3": "OK", "6.1": "OK",
         "7.1": "OK", "7.2": "OK", "8.1": "OK", "9.1": "OK",
         "9.2": "OK", "10.1": "OK", "10.2": "OK"
     },
     {
         "1.1": "NOK", "1.2": "OK", "2.1": "OK", "2.2": "OK",
         "3.1": "OK", "4.1": "OK", "4.2": "OK", "4.3": "OK",
         "5.1": "OK", "5.2": "OK", "5.3": "OK", "6.1": "OK",
         "7.1": "OK", "7.2": "OK", "8.1": "OK", "9.1": "OK",
         "9.2": "OK", "10.1": "OK", "10.2": "OK"
     },
     {
         "1.1": "OK", "1.2": "OK", "2.1": "OK", "2.2": "OK",
         "3.1": "NOK", "4.1": "OK", "4.2": "OK", "4.3": "OK",
         "5.1": "OK", "5.2": "OK", "5.3": "OK", "6.1": "OK",
         "7.1": "OK", "7.2": "OK", "8.1": "OK", "9.1": "OK",
         "9.2": "OK", "10.1": "OK", "10.2": "OK"
     }
 ]
 const dat = [
     // Seu JSON de exemplo aqui
   ];
   
   const tableData = dados.flatMap(item => item
     /*item.questions.map(question => ({
       id_category: item.id_category,
       section: item.section,
       question_id: question.id,
       question: question.question
       
     }))
    );
    
    //return dados
    return transformedResult
}
*/
