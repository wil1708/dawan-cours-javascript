// ES6 ou ES2015 => intégration des promises à Javascript
const colors = require('colors');

function getMessage() {
    // console.log(Math.random);
    const time = Math.floor(Math.random() * 5000 + 1000); // ms
    const error = Math.floor(Math.random() * 3 + 1);
    
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(3 == error){
                reject('Serveur indisponible ...');
            } else {
                resolve('Formation NodeJS');
            }
        }, time);
    } );
}

getMessage().then((message) => { // 1er demande
    console.log(message.green); 
    
    return getMessage(); // 2nd demande
}).then((message) => {
    console.log('2nd demande'); 
    console.log(message.green); 
}).catch((error) => {
    console.log(error.red);
});