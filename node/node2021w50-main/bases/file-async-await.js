const fs = require('fs').promises;
const path = require('path');

const pathfile = path.join(__dirname, 'assets', 'content', 'hello.txt');
const content = 'Hello Async await\r\n';

//iife = Immediately Invoked Function Expression
(async () => {
    
    try {
        await fs.mkdir(path.dirname(pathfile), { recursive: true });
        console.log(`Les répertoires ${path.relative(__dirname, path.dirname(pathfile))} \
ont bien été créés`);

        await fs.writeFile(pathfile, content, {flag: 'a'});
        console.log('Ecriture terminée');

        const contentfile = await fs.readFile(pathfile);
        console.log(`Contenu du fichier:
${contentfile}`);

    } catch(err) {
        console.log(err);
    }

})();
        