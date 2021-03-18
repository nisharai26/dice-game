const express = require('express');
const hbs = require('express-handlebars');
const path =require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs',hbs({
    extname: '.hbs'
}));
app.set('view engine','.hbs');
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/getNumber', (req, res) => {
    let randNum = Math.ceil(Math.random() * 6);
    res.send(randNum.toString());
});

app.listen(3000,()=>{
    console.log("Listening to port 3000");
})