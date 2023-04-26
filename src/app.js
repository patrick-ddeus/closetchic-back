import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import ConnectDatabase from './database/connect.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const porta = process.env.PORT || 5000;

ConnectDatabase()
app.listen(porta, () => console.log(`
    Servidor iniciado na porta ${porta}
`));