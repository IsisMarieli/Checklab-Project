import express from 'express';

const app = express();
app.use(express.json());


app.get('/login', (req, res) => {
    res.json('Rota inicial')
    console.log('Usuário logado')
});

app.get('/user', (req, res) => {
    res.json('Rota usuários')
});

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001')
})