#!/usr/bin/env node
'use strict'

var ver = process.versions.node
var majorVer = parseInt(ver.split('.')[0], 10)
var argv = require('minimist')(process.argv.slice(2))

if (majorVer < 8) {
    console.error('Node version ' + ver + ' is not supported, please use Node.js 8.0 or higher')
    process.exit(1)
} else {
    require('../dist/cli').default(argv)
}
