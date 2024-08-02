const colors = require('colors');

/** 
 * Pour executer un fichier avec node
 * node path/to/file.js
 */
console.log('Bienvenue en formation NodeJS');

const firstname = 'John';
const lastname = 'Doe';

/**
 * %s permet d'afficher des chaines de caractères
 * %d permet d'afficher les valeurs numériques
 * %j permet d'afficher des structures JSON
 * %O Affiche un objet avec au maximun 4 profondeurs
 * %o Affiche un objet avec au maximun 2 profondeurs
 */

console.log('Bonjour %s %s', firstname, lastname);

console.log('Message #1', 'Message #2');

console.log(`Bonjour ${firstname} ${lastname}
Comment allez vous aujourd'hui ?`);

// filename: adresse absolue du fichier executé
console.log(`__filename = ${__filename}`);
// dirname: adresse absolue du répertoire dans lequel se trouve le fichier executé
console.log(`__dirname = ${__dirname}`);

const duration = 2000;
setTimeout(() => {
    console.log(`Je suis executé après ${duration} ms`.red);
}, duration);

console.log('Fin du script'.underline.green);