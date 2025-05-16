const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json([
    {
      "id": 1,
      "nome": "Camiseta",
      "preco": 29.90,
    },
    {
      "id": 2,
      "nome": "Fone de Ouvido Bluetooth",
      "preco": 199.00,
    },
    {
      "id": 3,
      "nome": "Caderno",
      "preco": 23.60,
    },
    {
      "id": 4,
      "nome": "Livro 'O Node.js'",
      "descricao": "livro escrito por J. M.",
      "preco": 39.90,
    }
  ]
  )
}
)

  app.listen(3000, () => {
    console.log('Servidor rodando no http:/localhost:3000')
  });