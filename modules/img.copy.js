const fs = require('fs');
const colors = require('colors/safe');

const copy = (source, target) => {
    fs.copyFileSync(source, target);
    console.log(`${colors.green('Copied')} to \t ${colors.cyan(target)}`);
}

module.exports = copy;