import express from 'express';
import colors from 'colors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use( helmet() );
app.use( cors() );
// récupère les données en entête envoyées au format json
// content-type: application/json
app.use( bodyParser.json() );

app.use( routes );
app.use( (err, req, res, next) => {
    if(!err){
        return next();
    } 
    
    res.statusCode = err.status;
    res.json({  status: err.status, message: err.message });
}); 
app.use( (req, res) => {
    res.statusCode = 404;
    res.json({ status: 404, message: 'Not Found' });
}); 

const port = process.env.PORT || 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is Listening on ${colors.magenta(`http://localhost:${port}`)}`.gray);
    console.log(`Shutdown Node Server with CTRL + C`.gray);
});
