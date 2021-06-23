const {
    readFile,
    writeFile
} = require('fs');
console.log('starting task 1');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return null;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return null;
        }
        const second = result;
        writeFile('./content/result.txt',
            `result is ${first} and ${second}`, (err, result) => {
                if (err) {
                    console.log(err);
                    return null;
                }
                console.log('done with task 1');
            });
    });
});

console.log('starting task 2');
