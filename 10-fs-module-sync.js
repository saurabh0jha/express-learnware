const {
    readFileSync,
    writeFileSync
} = require('fs');

console.log('starting task 1');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(`first file output is ${first} and second file output is ${second}`);

writeFileSync(
    './content/result.txt',
    `result is ${first} and ${second}`, {
        flag: 'a'
    }
);

console.log('done task 1');
console.log('starting task 2');

