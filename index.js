const express = require('express');
const app = express();
const port = 9000;
app.get('/', (req, res) => {
    res.send('<h1>JENKINS-FREE-STYLE-NODEJS-SCRIPT-PROJECT!</h1>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
