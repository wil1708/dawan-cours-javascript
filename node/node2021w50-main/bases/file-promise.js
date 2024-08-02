const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello Promise\r\n';

fs.mkdir(path.dirname(pathfile), { recursive: true }).then(() => { // resultat mkdir
    console.log(`Les répertoires ${path.relative(__dirname, path.dirname(pathfile))} \
ont bien été créés`);

    return fs.writeFile(pathfile, content, {flag: 'a'});
}).then(() => { // résultat writeFile
    console.log('Ecriture terminée');

    return fs.readFile(pathfile);
}).then((contentfile) => { // résultat readFile
    console.log(`Contenu du fichier:
${contentfile}`);

}).catch((err) => { // erreur pour mkdir, writeFile et readFile
    throw err;
});
        