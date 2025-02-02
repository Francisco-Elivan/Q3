import  { Router } from "express";
import controller_auditor from '../3_controller/controller_auditor.js';
import controller_question from '../3_controller/controller_question.js';
import controller_response from '../3_controller/controller_response.js';
import controller_celula from '../3_controller/controller_celula.js';
import controller_produto from '../3_controller/controller_produto.js';
import header_response from "../scritp_useful/header_response.js";
import jwt from '../token/token.js'

const router = Router()
//////////////////rotas login/////////////
router.post('/auditoria/login',header_response.headerRes,controller_auditor.login)


//////////////////rotas auditor/////////////
router.post('/auditoria/resgister/auditor',header_response.headerRes,controller_auditor.create)
router.get('/auditoria/auditor',header_response.headerRes,jwt.ValidateToken,controller_auditor.list)


//////////////////rotas question e response/////////////
router.get('/auditoria/question',header_response.headerRes,jwt.ValidateToken,controller_question.listQuestion)
router.post('/auditoria/question/response',controller_response.set)
router.get('/auditoria/response/response',controller_response.listResponse)

    
//////////////////rotas celula/////////////
router.get('/auditoria/celula',header_response.headerRes,jwt.ValidateToken,controller_celula.list)
router.post('/auditoria/resgister/celula',header_response.headerRes,jwt.ValidateToken,controller_celula.create)
router.put('/auditoria/update/celula/:id_celula',header_response.headerRes,jwt.ValidateToken,controller_celula.update)
router.delete('/auditoria/drop/celula/:id_celula',header_response.headerRes,jwt.ValidateToken,controller_celula.delet)

   
//////////////////rotas produto/////////////
router.get('/auditoria/produto',header_response.headerRes,jwt.ValidateToken,controller_produto.list)
router.get('/auditoria/produto/list',header_response.headerRes,jwt.ValidateToken,controller_produto.list_inner_join)
router.post('/auditoria/resgister/produto',header_response.headerRes,jwt.ValidateToken,controller_produto.create)
router.put('/auditoria/update/produto/:id_produto',header_response.headerRes,jwt.ValidateToken,controller_produto.update)
router.delete('/auditoria/drop/produto/:id_produto',header_response.headerRes,jwt.ValidateToken,controller_produto.delet)




export default router    
