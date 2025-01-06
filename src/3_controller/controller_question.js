import service_list_question from "../2_services/service_question.js"

async function listQuestion(req,res) {
    
     const list = await service_list_question.listQuestion()
     
     res.status(200).json(list)
 }
 export default {listQuestion}