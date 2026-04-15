// split_seed.js — splits seed_output.sql into 3 smaller files
const fs = require('fs');

const content = fs.readFileSync('seed_output.sql', 'utf8');
const lines = content.split('\n').filter(l => l.trim());

// Separate comments, user updates, and goal inserts
const comments = lines.filter(l => l.startsWith('--'));
const userLines = lines.filter(l => l.startsWith('UPDATE users'));
const goalLines = lines.filter(l => l.startsWith('INSERT'));

// Split goals into two halves
const mid = Math.ceil(goalLines.length / 2);
const goals1 = goalLines.slice(0, mid);
const goals2 = goalLines.slice(mid);

// Write 3 files
fs.writeFileSync('seed_part1.sql', [...comments, ...userLines].join('\n'));
fs.writeFileSync('seed_part2.sql', goals1.join('\n'));
fs.writeFileSync('seed_part3.sql', goals2.join('\n'));

console.log(`Part 1: ${userLines.length} user updates`);
console.log(`Part 2: ${goals1.length} goal inserts`);
console.log(`Part 3: ${goals2.length} goal inserts`);
console.log('Done — run each part separately.');
