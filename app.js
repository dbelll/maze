const express = require('express');
const app = express();
const PORT = 3000

app.get('/', (req, res) => res.send('Hello aMazing World!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
