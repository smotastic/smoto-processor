#!/usr/bin/env node

require('dotenv').config()

const resizeUpload = require('./commands/command.resize');

const { program } = require('commander');

program.version('0.1.0')

program
    .command('resize')
    .option("-f, --folder [value]", "Folder of Images which will be resized. Defaults to $BASE_FOLDER", process.env.BASE_FOLDER)
    .action(({ folder }) => resizeUpload(folder))

program.parse(process.argv);
