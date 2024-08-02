const path = require('path'); // Module Node
const colors = require('colors'); // Module npm (dépendance)

const file = './assets/content/hello.txt';

console.log(`dirname(): ${path.dirname(file).green}`); // affiche le répertoire parent
console.log(`basename(): ${path.basename(file).green}`); // affiche le nom du fichier
console.log(`extname(): ${path.extname(file).green}`); // affiche l'extension du fichier

console.log(`Séparateur système: ${path.sep}`);

console.log(`Chemin relatif vers image.png: ${path.join('assets', 'images', 'image.png').red}`);
console.log(`Chemin absolue vers image.png: ${path.join(__dirname, 'assets', 'images', 'image.png').red}`);

console.log(path.join(__dirname, '..', 'assets'));

console.log( `Resolve: ${path.resolve(__dirname, path.join('..', 'assets', 'images')).magenta}` );
console.log( `Resolve 2: ${path.resolve(__dirname, path.join('assets', 'images')).magenta}` );

/**
 * assets
 *  |_ files
 *  |_ images
 *      |_ image.png
 */

const origin = path.join('assets', 'files');
const dest = path.join('assets', 'images', 'image.png');

console.log(`Pour passer du répertoire ${origin.green} au répertoire ${dest.green}, \
il faut faire ${path.relative(origin, dest).magenta}`);