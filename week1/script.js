const _ = require('lodash');

//const or let
//never use var

//Ex. 1
console.log('Hello World, I\'m Node');
console.log('Something else, this got changed');
console.log('testing');

//Ex. 2
let output = "testing lodash to convert text to camel case 'this camel case'";
console.log(output);

output = _.camelCase(output);
console.log(output);
