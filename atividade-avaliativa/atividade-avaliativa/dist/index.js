"use strict";
/*
ATIVIDADE PRÁTICA AVALIATIVA
Turma: 3A1
Alunos:
Alice Lunardi Dutra Figueiredo
Ana Clara Camargos Lima
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const influencers_router_1 = __importDefault(require("./router/influencers-router"));
const port = process.env.WS_PORT ?
    parseInt(process.env.WS_PORT) :
    3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/influencers", influencers_router_1.default);
app.use((0, error_handler_1.default)());
app.listen(port, () => {
    console.log(`Servidor sendo executado na porta ${port}!`);
});
