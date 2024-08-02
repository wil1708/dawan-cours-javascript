const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const mime = require('mime-types');

const server = http.createServer();

server.on('request', async (request, response) => {

    const url = new URL(request.url, `http://${request.headers.host}`);

    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.statusCode = 200;
    let html = null;

    switch(url.pathname) {
        case '/':
            html = await fs.readFile(path.join(__dirname, 'pages', 'accueil.html'));
            break;
        default:
            try {
                const resource = path.join(__dirname, 'public', url.pathname);
                html = await fs.readFile(resource);

                response.setHeader('Content-Type', mime.lookup(url.pathname) || 'text/plain');
            } catch(e) {
                html = await fs.readFile(path.join(__dirname, 'pages', 'errors', '404.html'));
                response.statusCode = 404;
            }
    }
    
    response.end(html);
});

const port = 5000;
server.listen(port);
console.log(`Personal Node Server is Listening on http://localhost:${port}`);
console.log(`Shutdown Node Server with CTRL + C`);