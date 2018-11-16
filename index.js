const express = require('express');
const hbs = require('express-handlebars');
const app = express();

//para definir la carpeta publica
app.use(express.static('public'));
//para registrar el motor de render handlebars
app.engine('handlebars', hbs());
//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');

app.get('/home',function(req , res){
    res.render('home');
});

app.get('/landing',function(req , res){
    res.render('landing');
});

app.get('/shop',function(req , res){
    res.render('shop');
});


app.listen(5000);