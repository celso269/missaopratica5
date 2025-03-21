import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/control/ControleLivros';

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'DELETE') {
        const codigo = Number(req.query.codigo);
        if (isNaN(codigo)) {
            return res.status(400).json({ message: 'Código inválido' });
        }

        try {
            const sucesso = controleLivro.excluir(codigo);
            if (!sucesso) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }
            res.status(200).json({ message: 'Livro excluído com sucesso!' });
        } catch (error) {
            console.error(error); // Logando o erro no console (para depuração)
            res.status(500).json({ message: 'Erro ao excluir o livro' });
        }
    } else {
        return res.status(405).json({ message: 'Método não permitido' });
    }
};
