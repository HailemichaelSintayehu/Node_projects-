const os = require("os");


const user = os.userInfo()

console.log(user);
console.log(`the system uptime:${os.uptime()}`);


currentOs = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOs);
