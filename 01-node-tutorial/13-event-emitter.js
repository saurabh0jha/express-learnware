const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('knockknock', ()=>{
    console.log('Knock Knock! Who is there!');
});

customEmitter.on('knockknock', (name, id)=>{
    console.log(`Hello! i am ${name} and my id is ${id}`);
});

customEmitter.emit('knockknock', 'Johnny', 6996);