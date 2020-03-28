"use strict";

const express = require('express'),
    app = express(),
    data = require('./data.json'),
    dogs_controller = require('./src/services/controllers/dogs'),
    port = process.env.PORT || 3000;

const dogs_list = data.data;

app.use(express.static(__dirname + '/html/assets',{
    maxAge: "1h"
}),);
app.set('/', __dirname + '/html/views');
app.set('view engine', 'pug');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/dog/:id', async (req, res) => {
    let id = req.params.id,
        dog = await data.data.filter(e => e.id == id),
        dog_images = await dogs_controller.getImages(id),
        arr_dog_images = await dog_images.data.map((e,d)=>{
        return {
            url : e.url,
            width : e.width,
            height : e.height
        };
    });

    return res.render('index', {
        dog : dog[0],
        dogs_list : dogs_list,
        arr_dog_images : arr_dog_images,
    });
});

app.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});

app.get('*', (req, res) => {
    res.redirect('/dog/1');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});