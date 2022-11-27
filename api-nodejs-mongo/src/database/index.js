const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rfdecc:rfdecc@clustenodecr0.6kl7pg7.mongodb.net/api-nodejs-mongodb?retryWrites=true&w=majority", {}, (error)=>{
    if(error){
        console.log('Falha ao autenticar com mongodb');
        console.log(error);
        return;
    }

    console.log('Conexão com mongodb estável');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;