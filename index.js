//Importando o Express no modelo ES6
import express from "express";

//Importando as rotas que poderão ser lidas
import cadastroRouter from "./routers/cadastro_medico.js";

//Instanciando o Framework para a váriavel app
const app = express();

//Rotas
app.use("/", cadastroRouter);

//Convertendo para JSON sem precisar sempre de um parse
app.use(express.json());

//Dando um get na requisição e enviando mensagem
app.get("/", (req, res) => {
    res.send("Testando...");
})

//liberando acesso através do Endpoint
app.listen(5050, () =>{
    console.log("Servidor rodando na porta 5050");
});

//Mandando mensagem de erro ao usuário caso ele acesse uma rota diferente das que definimos
app.use((req, res) =>{
    res.send("Rota não encontrada");
});









