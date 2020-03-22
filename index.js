const express = require('express'),
    app = express(),
    data = require('./data.json'),
    port = process.env.PORT || 3000;

/*
 * app usages
 */
app.use('/',express.static(`${__dirname}/html/views`)); //for API
app.use(express.static(__dirname+'/html/assets'));
app.set('view engine', 'pug');

app.use( (req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/dog/:id', async (req,res)=>{
   let id = req.params.id;

   let dog = data.data.filter((e,d)=>{
       if(e.id == id)
           return e;
   });
    res.render('index',{
        dog : dog[0],
        data : data.data
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});