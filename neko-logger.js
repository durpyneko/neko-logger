const c = {
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    white: '\x1b[37m',
    grey: '\x1b[30m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m',
};

exports.log = function (msg) {
    console.log(`[${time()}] ${c.grey}[MISC]${c.reset} ${msg}`);
}
exports.error = function (msg) {
    console.log(`[${time()}] ${c.red}[ERRR]${c.reset} ${msg}`);
}
exports.warn = function (msg) {
    console.log(`[${time()}] ${c.yellow}[WARN]${c.reset} ${msg}`);
}
exports.info = function (msg) {
    console.log(`[${time()}] ${c.green}[INFO]${c.reset} ${msg}`);
}

function time() {
    return `${c.white}${new Date().toLocaleTimeString()}${c.reset}`
}