import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/:cpf', async (req, res) => {
  const { cpf } = req.params;

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { cpf },
      include: { presencas: true }
    });

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar usuário' });
  }
});

export default router;
