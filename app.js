const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/hello', (req, res) => {
  res.send('Task manager app');
});

app.listen(port, () => {
  console.log('Server is started on 3000');
});
