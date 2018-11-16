const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const fs = require('fs');

//para definir la carpeta publica
app.use(express.static('public'));
//para registrar el motor de render handlebars
app.engine('handlebars', hbs());
//para setear el motor de render a utilizar
app.set('view engine', 'handlebars');

var homeTime = 0;
var landingTime = 0;
var shopTime = 0;

function calculatePagesTimes() {
    var message = "Home Page: "+homeTime+" visits\n"+"Landing Page: "+landingTime+" visits\n"+"Shop Page: "+shopTime+" visits";
    console.log(message);
    /*
    console.log("Home Page: "+homeTime+" visits");
    console.log("Landing Page: "+landingTime+" visits");
    console.log("Shop Page: "+shopTime+" visits");
    */

    const data = new Uint8Array(Buffer.from(message));
    fs.writeFile('message.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

app.get('/',function(req , res){
    res.render('home');
    homeTime++;
    calculatePagesTimes();
});

app.get('/landing',function(req , res){
    res.render('landing');
    landingTime++;
    calculatePagesTimes();
});

app.get('/shop',function(req , res){
    res.render('shop');
    shopTime++;
    calculatePagesTimes();
});

app.listen(5000);