import express from 'express';
import 'dotenv/config';

const app = express();
const port = parseInt(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('static'));

app.get('/api/isEven', async (req, res) => {
  res.json(parseInt(req.query.number) % 2 === 0);
});

app.listen(port, () => {
  console.log(`IsEven server listening on port ${port}`);
});