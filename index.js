const express = require('express'),
    app = express(),
    data = require('./data.json'),
    // bodyParser = require('body-parser'),
    //hiptopController = require('./controllers/hiptopController'),
    //itunesController = require('./controllers/itunesController'),
    //youtubeController = require('./controllers/youtubeController'),
    port = process.env.PORT || 3000;
    //path = require("path");



/*
 * app usages
 */
app.use('/',express.static(`${__dirname}/html/views`)); //for API
app.use(express.static(__dirname+'/html/assets'));
app.set('view engine', 'pug');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : true}));
app.use( (req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.set("Content-Type", "application/json");
    next();
});

/*
 * default rout
 */
// app.all('*', (req,res,next)=>{  // Global handler
//     req.next();
// });

// app.get('/', (req,res,next) => {
//     res.send(`${__dirname}/index.views`);
//     req.next();
// });

// app.get('/', (req, res) => {
//     res.render('index');
// });

app.get('/json',(req,res)=>{
    console.log('json');

    res.json(data);
});

app.get('/dog/:id', async (req,res)=>{
   let id = req.params.id;

   let dog = data.data.filter((e,d)=>{
       if(e.id == id)
           return e;
   });

   // console.log(1111);
   // console.log(dog[0]);

   //res.json(dog);
    //res.set('Content-Type', 'text/html');
    res.render('index',{
        dog : dog[0],
        data : data.data
    });
});

app.get('/',  (req, res) => {
    // const query = await axios.get('http://localhost:3001/results');
    const query = data;
    console.log(query);
    res.render('index', { animals: [{},{}] });
});


app.get('/type/dog' , async (req,res)=>{
    console.log('dogs');

    //const dogs = data.type

    //let response = await fetch(data);

    //const response = query.json();

    res.json(data);
});

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
    console.log(req);
    console.log(data);
    const count = 5;

    // Generate some passwords
    // const passwords = Array.from(Array(count).keys()).map(i =>
    //     generatePassword(12, false)
    // )

    let json = {
        a : 'b'
    };
    // Return them as json
    res.json(json);

    // console.log(`Sent ${count} passwords`);
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});