import { hello } from './modules/useless';
import colors from 'colors';
const path = require('path');

console.log(hello.magenta);
console.log(__dirname);

console.log(path.extname('file.txt').red);