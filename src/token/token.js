import  jwt from "jsonwebtoken";




const hashSecret = 'zf_corporation';

function CreateToken(token){
    const key = jwt.sign({token},hashSecret,{
        expiresIn: 999999999
    });
    return key;
}

function ValidateToken(req,res,next){
    const authToken = req.headers.authorization;
    if(!authToken) return res.status(401).json({error:"Token não informado"});
    //por padrao o "req.heaers.authorization", retorna uma string "Bearer 00000000000"//
    //
    const [bearer,token ] = authToken.split(" ");//fatia a string quando escontrar o espaço " "
     
    jwt.verify(token,hashSecret,(err,tokenDecoded)=>{
        if(err) return res.status(401).json({error:"Token invalido"});
    
    req.id_auditor = tokenDecoded.id_auditor;
    next();
    });
};

export default {CreateToken,ValidateToken};