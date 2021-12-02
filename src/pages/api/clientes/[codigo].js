export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: codigo,
        nome: `Maaria ${codigo}`,
        email: `emailmaria${codigo}valido@mariav.com.br`,
    })
}