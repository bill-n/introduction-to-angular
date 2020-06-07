
const express = require('express');

const app = express();

app.use(express.static('./dist/intro'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/intro/'}),
);

app.listen(process.env.PORT || 8080);