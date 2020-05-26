#!/usr/bin/env node

require('dotenv').config()
require('colors');

const backup = require('./commands/command.backup');

const { program } = require('commander');

program.version('0.1.0')

program
    .command('backup')
    .option("-s, --source [value]", "Source of folder of Images which will be resized and uploaded. Defaults to $BASE_SOURCE_FOLDER", process.env.BASE_SOURCE_FOLDER)
    .option("-t, --target [value]", "Target Folder where the resized Pictures will be saved, additionaly to being uploaded. Defaults to $BASE_TARGET_FOLDER", process.env.BASE_TARGET_FOLDER)
    .option("-n, --no-upload", "If this option is set, the upload to drive will be prevented. Defaults to false", false)
    .action(({ source, target, upload }) => backup(source, target, upload))

program.parse(process.argv);
