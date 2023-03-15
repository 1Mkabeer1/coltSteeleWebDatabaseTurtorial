const express = require('express');
const app = express()

const port = 6006;

app.get('/', (req, res) => {
    res.send('HomePage')
});

app.listen(port, () => console.log(`listening on port: ${port}`));