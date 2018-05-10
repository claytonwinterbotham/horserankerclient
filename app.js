const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app =  express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
 res.sendFile(path.join(__dirname, 'index.html'))
// // res.redirect('https://admin.horseranker.com');

});

app.listen(port);
console.log('Server started');
console.log(__dirname);