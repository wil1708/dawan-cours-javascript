// async -> crée une promise
// return -> promesse en réussite
async function success() {
    return 'Bravo !';
}

// throw -> promesse en échec
async function fail() {
    throw 'Dommage ...';
}

// success().then( (param) => {} );
success().then( console.log );
fail().catch( console.log );

function getNumber() {
    const number = Math.floor(Math.random() * 10);
    const time = Math.floor(Math.random() * 5000 + 1000);

    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(number);
        }, time)
    });
}

// await 
async function main() {
    /*console.log('Récupération de la valeur de a');
    const a = await getNumber();
    console.log('Récupération de la valeur de b');
    const b = await getNumber();*/

    console.log('Récupération de la valeur de a et de b');
    const [a, b] = await Promise.all([getNumber(), getNumber()]);

    console.log('Somme de a + b');
    console.log(`${a} + ${b} = ${a+b}`);
}

main();

// destructuration es6
const prenoms = ['Jean', 'Jeanne'];
/*const x = prenoms[0];
const y = prenoms[1];*/
const [x, y] = prenoms;

console.log(`Bonjour ${x} et ${y}`);