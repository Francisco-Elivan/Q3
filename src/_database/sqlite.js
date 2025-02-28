// Tornando o caminho mais robusto usando path
import path from 'path';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';

//pega o caminho do aquivo, EX: "C:\Users\admin\Desktop\auditoriaQ3\backEnd\Audirotia_API\src\_database\sqlite.js"
const __filename = fileURLToPath(import.meta.url);

//pega o caminho do diretorio, EX: "C:\Users\admin\Desktop\auditoriaQ3\backEnd\Audirotia_API\src\_database" 
const __dirname = path.dirname(__filename);

// Definindo o caminho absoluto para o banco
const dbPath = path.resolve(__dirname, 'auditoriaQ3.db');

const SQLite = sqlite3.verbose();

// Função de query permanece igual
function query(command, params, method = 'all') {
    return new Promise(function(resolve, reject) {
        db[method](command, params, function(error, result) {
            if(error)
                reject(error)
            else
                resolve(result)
        });
    });
}


// Criando a conexão com o banco
const db = new SQLite.Database(dbPath,SQLite.OPEN_READWRITE,(err) => {
        if(err)
            return console.log('Erro ao conectar com banco: ' + err.message);
        
    }
);

export { db, query };




// import sqlite from 'sqlite3'

// const SQLite = sqlite.verbose()

// function query(command,params,method = 'all'){
//     return new Promise(function(resolve,reject){
//         db[method](command,params,function(error,result){
//             if(error)
//                 reject(error)
//             else
//                 resolve(result)
//         })
//     })
// }


// const db = new SQLite.Database("./src/_database/auditoriaQ3.db",SQLite.OPEN_READWRITE,(err)=>{
// if(err)
//     return console.log('erro ao conectar com banco: '+ err.message)
// })

// export {db,query} 