const {writeFileSync} = require('fs');

for(let i = 0; i < 15000; i++){
    writeFileSync('./content/big.txt', `Hello The World ${i+1} \n`, {flag:'a'})
}

