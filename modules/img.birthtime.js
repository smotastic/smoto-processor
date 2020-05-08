const fs = require('fs')
const colors = require('colors/safe');

const getBirthtime = (img) => {
    const { mtime } = fs.statSync(img);

    console.log(`${colors.green('Read Birthtime')} \t ${colors.cyan(mtime)}`);
    return mtime;
}

module.exports = getBirthtime;