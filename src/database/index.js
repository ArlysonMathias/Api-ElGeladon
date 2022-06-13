import mongoose from "mongoose";

export const conectarAoDatabase = ()=>{
    mongoose.connect(process.env.DATABASE_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Banco de Dados conectado")
    }).catch((error)=>{
        console.log("Falaha na conexão com o banco de dados")
    })
}