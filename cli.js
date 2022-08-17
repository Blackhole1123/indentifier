#!/usr/bin/env node
const tabfix = require('tabfix');
const file = process.argv[2];
try {
    tabfix(file);
} catch (error) {
    console.error(error);
}