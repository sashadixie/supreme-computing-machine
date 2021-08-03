import cors from 'cors';
import fetch from 'cross-fetch';
import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 3000;
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(cors());

app.get('/api', (req, res) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => res.render('api', { items: json }));
});

app.listen(port, () =>
  console.log(`App served on port 3000!`),
);