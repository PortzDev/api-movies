import express from 'express';

// rest of the code remains same
const app = express();
const PORT = 8000;

interface Data {
  Nome: String,
  Sobrenome: String,
  id: Boolean
}

app.get('/', (req, res) => res.send('Projeto Inicial Rob'));
app.get('/api', (req, res) => res.json({Nome: 'Rob', Sobrenome: 'Puert'}));

app.get('/api/:id', (req, res) => {
  const data: Data = {
    Nome: 'Rob',
    Sobrenome: 'Puert',
    id: req.params.id.length < 3 ? true : false
  }
  console.log(`valor do id: ${data.id}`)
  if (!data.id) console.log('É falso')

  res.json(data)
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server rodando no caminho: http://localhost:${PORT}`);
});
