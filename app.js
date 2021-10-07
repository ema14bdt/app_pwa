const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const views = path.join(__dirname, 'views');
app.use(express.static('public'))

const fs = require('fs');

const imagesFilePath = path.join(__dirname, '/public/data/images.json');
let images = JSON.parse(fs.readFileSync(imagesFilePath, 'utf-8'));

app.get('/', (req, res) => res.sendFile(path.join(views, 'index.html')));
app.get('/api/images', (req, res) => {
    res.json(images);
});

app.listen(port, () => console.log(`Puerto iniciado en el servidor ${port}.`));