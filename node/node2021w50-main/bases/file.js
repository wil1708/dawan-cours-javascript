const fs = require('fs');
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello World\r\n';

// callback hell
fs.mkdir(path.dirname(pathfile), { recursive: true }, (err) => {
    if(err) {
        throw err;
    }

    console.log(`Les répertoires ${path.relative(__dirname, path.dirname(pathfile))} \
ont bien été créés`);

    fs.writeFile(pathfile, content, {flag: 'a'}, (err) => {
        if(err) throw err;

        console.log('Ecriture terminée');

        fs.readFile(pathfile, (err, contentfile) => {
            if(err) throw err;

            //console.log(contentfile.toString());
            console.log(`Contenu du fichier:
${contentfile}`);
        });
    });
});