/** Ecmascript
 - Normes pour les langages de type script
    -> Javascript
 - Ecmascript 2015 => ES6
    - Classes
    - Meilleur gestion des objets
    - Sucre syntaxique
    - Nouvelle façon de déclarer les variables
    - ...
 **/

// Déclaration des variables :
let foo = "Ma variable modifiable";
const bar = ['Pomme', 'Poire', 'Abricot'];

foo = "Nouvelle valeur";
// bar = "Nouvelle valeur"; -> Pas bien
foo = 23;
bar.push('Peche');

// Objet

class User {
    nom;
    email;
}

const u1 = new User();
u1.nom = 'Toto';
u1.email = 'toto@mail.fr';

// Objet littéral
const u2 = { nom: 'Jane Doe', email: 'jdoe@mail.fr' };

const cat = {
    nom: 'Mistigri',
    age: 1,
    friends: ['Banzaï', 'Cactus', 'Tigrou'],
    miauler() {
        console.log(this); // cat
    },
    miauler2 : function () {
        console.log(this); // cat
    },
    miauler3: () => console.log(this)  // contexte global
}

function sum(a, b) {
    return a + b;
}

sum(2, 78); // 80

const sum2 = (a, b) => a + b;

const sum3 = (a, b) => {
    // instructions
    return a + b;
}

const sum4 = function (a, b) {
    return a + b;
}

cat.miauler3();



const users = [
    {nom : '', email: ''},
    {},

];
