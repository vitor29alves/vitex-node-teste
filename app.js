import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res)=>{
    res.status(200).send('Oi, sua aplicacao esta ok')
})

app.get('/carros', (req, res)=>{
    res.status(200).send('Oi, sua aplicacao esta ok na rota CARROS')
})


app.get('/outra', (req, res)=>{
    res.status(200).send('Oi, sua aplicacao esta ok na rota OUTRA')
})


app.listen(process.env.PORT || 8082 , ()=>{
    console.log(`Servidor rodando na porta || ${process.env.PORT}}`)
})