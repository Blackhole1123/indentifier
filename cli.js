#!/usr/bin/env node
const indentify = require('indentifier');
const file = process.argv[2];
try {
    indentify(file);
} catch (error) {
    console.error(error);
}