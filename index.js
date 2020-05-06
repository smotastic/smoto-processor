#!/usr/bin/env node

require('dotenv').config()
require('colors');

const upload = require('./commands/command.upload');

const { program } = require('commander');

program.version('0.1.0')

program
    .command('upload')
    .option("-f, --folder [value]", "Folder of Images which will be resized and uploaded. Defaults to $BASE_FOLDER", process.env.BASE_FOLDER)
    .action(({ folder }) => upload(folder))

program.parse(process.argv);
