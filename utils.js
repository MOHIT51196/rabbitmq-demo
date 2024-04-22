function sleep(secs) {
    return new Promise((res, rej) => setTimeout(res, secs * 1000))
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptClose() {
    readline.question(`Please any key to close`, (_) => readline.close())
}

exports.sleep = sleep
exports.promptClose = promptClose