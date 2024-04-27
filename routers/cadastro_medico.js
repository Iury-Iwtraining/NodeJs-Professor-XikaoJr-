import express from "express";

const app = express();

const cadastroRouter = express.Router();

cadastroRouter.use(express.json());

//Criei este Array de objetos para testar minha aplicação
const medicos = [
    {nome: "Iury", crm: 2020, hospital: "Hospital X", telefone: 1111111111},
    {nome: "João", crm: 2070, hospital: "Hospital Y", telefone: 2222222222},
    {nome: "Maria", crm: 2090, hospital: "Hospital Z", telefone: 333333333},
    {nome: "José", crm: 20150, hospital: "Hospital XYZ", telefone: 444444444}
]

//Função para Filtrar o médico pelo CRM
function buscarMedicoPeloCrm(crm){
    return medicos.filter(medico => medico.crm == crm);
}

//Função para pegar o índice do Array
function buscarIndexdoMedico(crm){
    return medicos.findIndex( medico => medico.crm == crm);
}

//Usando o verbo Get
cadastroRouter.get("/cadastro_medico",(req, res) =>{
    res.send(medicos)
})

//Usando o get conforme a função check CRM, para pegar apenas o médico com o CRM devido
cadastroRouter.get("/cadastro_medico/:crm",(req, res) =>{  
  res.json(buscarMedicoPeloCrm(req.params.crm));
})


//Usando o verbo Post - Acrescentando objetos no Array conforme envio do Usuário
cadastroRouter.post("/cadastro_medico",(req, res) =>{
    medicos.push(req.body);
    res.send("Médico Cadastrado Com Sucesso")

})

//Criando Verbo Put
cadastroRouter.put("/cadastro_medico/:crm", (req, res) =>{
    let i = buscarIndexdoMedico(req.params.crm);
    medicos[i].nome = req.body.nome;
    medicos[i].hospital = req.body.hospital;
    medicos[i].telefone = req.body.telefone;
    res.json(medicos);

})

//Criando o Verbo Delete
cadastroRouter.delete("/cadastro_medico/:crm",(req, res) =>{
    let i = buscarIndexdoMedico(req.params.crm);
    //metodo splice usado para remover o medico do array passando a posição e depois passando a quantidade
    medicos.splice(i, 1)
    res.send("Médico " + req.params.crm + " Excluído com sucesso!")

})

//Só vou conseguir importar a rota se eu declarar a exportação padrão
export default cadastroRouter;





