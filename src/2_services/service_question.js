import repository_list_question from "../1_repository_query/repository_question.js"
import work_shift from "../scritp_useful/work_shift.js"
async function listQuestion() {
    let turno =  work_shift.obterTurnoAtual()
    let list = await repository_list_question.listQuestion()
    let data = new Date()
     data = data.toLocaleDateString(),

    // Transformar o campo 'questions' de string para um array JSON
    list = list.map(item=> ({
        ...item,
        'data': data,
        'turno':turno,
        questions: JSON.parse(item.questions),
    }
    
) );

    return list
 }
 export default{listQuestion}