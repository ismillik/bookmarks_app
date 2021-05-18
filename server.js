const express = require('express');
const morgan = require('morgan');
[syncAndSeed, Bookmark] = require('./db');


const app = express();

app.use(morgan('dev'));

app.get('/', (req, res, next) => res.redirect('/bookmarks'));

app.get('/bookmarks', async (req, res, next) => {
    const data = await Bookmark.findAll();
    const bookmark = data[0].dataValues
    res.send (`
        <header>
        </header>
    `);
});



app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
})
