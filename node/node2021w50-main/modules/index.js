const colors = require('colors');
const myModule = require('./module/myModule');
const myJSONModule = require('./module/myJSONModule');
const { sayHello } = require('./module/myJSONModule');
const User = require('./module/myClassModule');

console.log(myModule().magenta);

console.log(myJSONModule.getName().blue)
console.log(myJSONModule.sayHello('Maelle').green);

console.log(sayHello('Ludovic').random);

let user = new User('admin', 'admin');
if(user.checkUsername('admin')) {
    console.log(`Bonjour ${user.username}`.bgBrightYellow);
}