const express = require('express'),
    app = express(),
    data = require('./data.json'),
    port = process.env.PORT || 3000;

// app.use('/',express.static(`${__dirname}/html/views`));
app.use(express.static(__dirname + '/html/assets'));
app.set('/', __dirname + '/html/views');
app.set('view engine', 'pug');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/dog/:id', (req, res) => {
    let id = req.params.id,
        dog = data.data.filter(e => e.id == id);

    res.render('index', {
        'd_name': dog[0].name,
        'd_txt': dog[0].text,
        'd_img': dog[0].img,
        //'dog': dog[0],
        'data': data.data,
        'length': data.data.length
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});