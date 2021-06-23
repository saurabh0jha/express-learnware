const {readFile} = require('fs');

console.log('started the first task');

readFile('./content/first.txt', 'utf-8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('completed first task', result);
});

console.log('starting next task');