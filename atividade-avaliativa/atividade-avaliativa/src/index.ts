/*
ATIVIDADE PRÁTICA AVALIATIVA
Turma: 3A1
Alunos:
Alice Lunardi Dutra Figueiredo
Ana Clara Camargos Lima
*/

import express from "express";
import cors from "cors";
import errorHandler from "./middleware/error-handler";
import influencersRouter from "./router/influencers-router";

const port = process.env.WS_PORT ?
    parseInt(process.env.WS_PORT) :
    3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/influencers", influencersRouter);
app.use(errorHandler());

app.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}!`);
});