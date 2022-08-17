#!/usr/bin/env node
const tabber = require('tabber');
const file = process.argv[2];
try {
    tabber(file);
} catch (error) {
    console.error(error);
}