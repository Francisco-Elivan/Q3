function headerRes(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Authorization, Accept,X-PINGOTHER,x-content-type-options');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.removeHeader('X-Powered-By');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  
}

export default {headerRes}