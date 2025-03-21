import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classes/control/ControleEditora';

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const codEditora = Number(req.query.codEditora);
        const nomeEditora = controleEditora.getNomeEditora(codEditora);
        res.status(200).json({ nome: nomeEditora });
    } else {
        res.status(405).json({ message: 'Método não permitido' });
    }
};