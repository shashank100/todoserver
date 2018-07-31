const express = require('express')
const app = express()
const port = process.env.PORT || 3999;
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const data = JSON.stringify(req.body);

  fs.writeFile('./todo.json', data, function(err, data) {
    res.sendStatus(200);
  });
})


app.get('/', (req, res) => {
  fs.readFile('./todo.json', 'utf-8', function(err, data) {
    const json = JSON.parse(data)
    res.json(json);
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
