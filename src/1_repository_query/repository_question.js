
import { query } from "../_database/sqlite.js"


async function listQuestion() {
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
    
  const data = await query(sql, [])
  
  


    // Transformar o campo 'questions' de string para um array JSON
    const transformedResult = data.map(item => ({
        ...item,
        questions: JSON.parse(item.questions)
    }));

    return data;

}

export default { listQuestion }