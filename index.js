#!/usr/bin/env node

require('dotenv').config()
require('colors');

const upload = require('./commands/command.upload');

const { program } = require('commander');

program.version('0.1.0')

program
    .command('upload')
    .option("-s, --source [value]", "Source of folder of Images which will be resized and uploaded. Defaults to $BASE_SOURCE_FOLDER", process.env.BASE_SOURCE_FOLDER)
    .option("-t, --target [value]", "Target Folder where the resized Pictures will be saved, additionaly to being uploaded. Defaults to $BASE_TARGET_FOLDER", process.env.BASE_TARGET_FOLDER)
    .action(({ source, target }) => upload(source, target))

program.parse(process.argv);
