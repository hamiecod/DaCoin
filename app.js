const express = require('express');
const path = require('path');

const app = express();
const port = 80;

app.use('/static', express.static('static'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res)=>{
    res.status(200).render('index.pug');
});

app.use((req, res,nxt)=>{
    res.status(404).send('<h1> Page not found </h1>');
});

app.listen(port, ()=>{
    console.log(`The application is running on port ${port}`);
});