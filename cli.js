#! /usr/bin/end mode
const util = require('./util');
const validation = require('./validation');

const categoryInput = process.argv[2];
const limitInput = process.argv[3];

validation.checkCategoryInput(categoryInput);
validation.checkLimitInput(limitInput);

executeAsyncTask();

async function executeAsyncTask() {
  const entries = await util.getData(categoryInput, limitInput);
  const tableHeader = util.formatTableHeader();
  const table = await util.pushIntoTable(entries, tableHeader);
  console.log(
    `\nRequested Category is ${categoryInput} and Limited to ${limitInput}\n\n`
  );
  console.log(entries.length === 0 ? 'No Results\n' : table.toString());
}
