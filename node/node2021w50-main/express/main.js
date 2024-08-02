import express from 'express';
import colors from 'colors';
import nunjucks from 'nunjucks';
import path from 'path';
import cowsay from 'cowsay';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import router from './router';

const app = express();
nunjucks.configure(path.join(__dirname, 'template'), {
    autoescape: true, // xss Cross Site Scripting
    express: app
});

app.use(helmet());
app.use( express.static(path.join(__dirname, 'public')) );
// met les valeurs d'un formulaire dans un variable body de l'objet req
app.use( bodyParser.urlencoded({ extended: true })); 
app.use( (req, res, next) => {
    console.log(req.url);
    next(); // permet de passer au middleware suivant
} );

app.use( router );
app.use( (req, res) => {
    const c = cowsay.say({
        text: "Oups !",
        r: true
    });
    res.statusCode = 404;
    res.render('errors/404.html', { c });
}); 

/*app.get('/', (req, res) => {
    let html = '<h1>Bienvenue sur notre application ExpressJS</h1>';

    res.send(html);
});*/

const port = 5000;
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is Listening on ${colors.magenta(`http://localhost:${port}`)}`.gray);
    console.log(`Shutdown Node Server with CTRL + C`.gray);
});
