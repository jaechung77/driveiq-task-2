#! /usr/bin/end mode
const util = require('./util');

const categoryInput = process.argv[2];
const limit = process.argv[3];
if (limit < 0) {
  console.error('\nPlease type fourth value greater than 0\n');
  process.exit();
}

const entries = util.getAllEntries(categoryInput, limit);
const tableHeader = util.formatTableHeader();
const table = util.pushIntoTable(entries, tableHeader);

console.clear();

console.log(
  `Requested Category is ${categoryInput} and Limited to ${limit}\n\n`
);
console.log(entries.length === 0 ? 'No Results\n' : table.toString());
