const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));
