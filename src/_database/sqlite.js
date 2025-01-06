import sqlite from 'sqlite3'

const SQLite = sqlite.verbose()

function query(command,params,method = 'all'){
    return new Promise(function(resolve,reject){
        db[method](command,params,function(error,result){
            if(error)
                reject(error)
            else
                resolve(result)
        })
    })
}


const db = new SQLite.Database("./src/_database/auditoriaQ3.db",SQLite.OPEN_READWRITE,(err)=>{
if(err)
    return console.log('erro ao conectar com banco: '+ err.message)
})

export {db,query} 