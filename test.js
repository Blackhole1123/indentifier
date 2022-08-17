const file = process.argv[2];

function fix(file) {
const fs = require('fs');
const data = fs.readFileSync(file, 'utf-8').split('\n').map(line => {
for (let i = 0; i < line.length; i++) {
                                    if (line[i] !== ' ') {
line = line.slice(i);
break;
}
for (let i = line.length - 1; i >= 0; i--) {
if (line[i] !== ' ') {
line = line.slice(0, i + 1);
break;
}
}
}
return line;
}).join('\n');

fs.writeFileSync(file, data);
}

if (require.main === module) {
fix(file);
}
module.exports = fix;