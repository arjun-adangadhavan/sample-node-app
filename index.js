const express = require('express');
const app = express();
const port = 9000;
app.get('/', (req, res) => {
    res.send('<h1>FREE-STYLE-NODEJS-SCRIPTED-PROJECT!</h1>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
