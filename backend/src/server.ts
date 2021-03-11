import express from 'express';

const app = express();

app.get('/aqui', (request, response)=>{

    return response.json({
        message: "Estou aqui padrin"
    })
})

app.listen(3333);