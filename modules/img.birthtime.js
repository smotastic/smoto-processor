const fs = require('fs')
const colors = require('colors/safe');

const getBirthtime = (img) => {

    const { birthtime } = fs.statSync(img)

    console.log(`${colors.green('Read Birthtime')} ${colors.cyan(birthtime)}`);
    return birthtime;
}

module.exports = getBirthtime;