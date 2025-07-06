import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import usuarioRoutes from './routes/usuarios.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);

app.get('/', (req, res) => {
  res.send('API está rodando ✅');
});


app.listen(3001, () => {
  console.log(`Servidor rodando em http://localhost:3001`);
});
