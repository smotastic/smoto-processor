#!/usr/bin/env node

require('dotenv').config()

const { program } = require('commander');

program.version('0.1.0')

program
    .command('test')
    .option("-t, --to [value]", "Test", "Default")
    .action(({ to }) => console.log(to))

program.parse(process.argv);
