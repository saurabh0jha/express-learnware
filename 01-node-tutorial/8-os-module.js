const os = require('os');

const user = os.userInfo();

const osInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(1, user);
console.log(2, `The system is running for ${os.uptime()/3600} hours.`);
console.log(3, osInfo);