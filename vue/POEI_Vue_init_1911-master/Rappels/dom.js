let nom = "Toto";
const movies  =  ['Le Seigneur des anneaux', 'Là haut', 'Le Silence des Agneaux'];


document.addEventListener('DOMContentLoaded', () => {
    changeTitle();

    /* Afficher les films :
    Une boucle
     */
    movies.forEach(m => {
        const p = document.createElement('p');
        p.textContent = m;
        document.querySelector('body').appendChild(p);
    })


});

function changeName() {
    const input = document.querySelector('#form');
    nom = input.value;
    changeTitle();

}

function changeTitle() {
    const h1 = document.querySelector('#title');
    h1.textContent = `Bonjour ${nom}`;
}

