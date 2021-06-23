// const {readFile, writeFile, read} = require('fs');

// Approach 1

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

// // approach 2
// const util = require('util');
// readFilePromise = util.promisify(readFile);
// writeFilePromise = util.promisify(writeFile);

// readFilePromise('./content/first.txt', 'utf-8').then((result) => {
//   console.log(result);
//   // writeFilePromise('./content/result.txt', `result is ${result}`).catch(err => console.log(err));
// }).catch((err) => {
//   console.log(err);
// });

// approach 3

const { readFile, writeFile } = require('fs').promises

const start = async () => {
  try{
    const firstFileContent = await readFile('./content/first.txt');
    const secondFileContent = await readFile('./content/second.txt');
    await writeFile('./content/result-aa.txt',
     `content of ${firstFileContent} and ${secondFileContent}`,
     {flag: 'a'}
     );
    console.log(firstFileContent, secondFileContent);
  } catch(error) {
    console.log(error);
  }
}

start();