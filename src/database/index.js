import mongoose from "mongoose";

export const conectarAoDatabase = ()=>{
    mongoose.connect('mongodb://localhost:27017/ElGeladon_db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Banco de Dados conectado")
    }).catch((error)=>{
        console.log("Falaha na conexão com o banco de dados")
    })
}