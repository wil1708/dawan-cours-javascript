import { hello } from './module/useless';
const babel = require('./module/unnecessary');
import colors from 'colors';

console.log(hello.green);
console.log(babel().magenta);