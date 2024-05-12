const { log } = require('console');
const os = require('os')

console.log(`Arcitechture: ${os.arch()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`upTime: ${os.uptime()}`);
console.log(`freeMemory: ${os.freemem()}`);
console.log(`Machine: ${os.machine()}`);
console.log(`totalMemory: ${os.totalmem}`);
console.log(`release: ${os.release()}`);
console.log(`Version: ${os.version()}`);

const userInfo = os.userInfo()

console.log(userInfo.username);
console.log(userInfo.homedir);

const CPI = os.cpus()

console.log(CPI[0].model);
console.log(CPI[0].speed);
console.log(CPI[0].times);

