const express = require('express')//express foi instalado e está sendo chamado

const app = express()//renomeia função express para app

app.use(express.json())//minha aplicação vai utilizar json

const users = [
    {
    name: 'Júlia',
    email: 'julia@gmail.com',
    idade: 18,
    sexo: 'feminino'
    }
]

app.get('/usuarios', (req, res) => {//retorna as requisições
    res.json(users) // retorna os usuários, envia respostas em formato json
})

app.post('/usuario', (req,res) => { //cria aplicações web e API'S
    console.log(req.body) //retorna o corpo da requisição
    users.push(req.body) //envia mensagem para o array (users)
    res.status(201).json(users)//retorna o status 201 e os usuarios
})


app.listen(3000, () => console.log("Servidor rodando"))//executa as requisições

