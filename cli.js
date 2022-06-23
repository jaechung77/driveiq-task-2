#! /usr/bin/end mode
const util = require('./util');
const validation = require('./validation');

const category = process.argv[2];
const limit = process.argv[3];

validation.checkCategoryInput(category);
validation.checkLimitInput(limit);

executeAsyncTask();

async function executeAsyncTask() {
  const entries = await util.getData(category, limit);
  const tableHeader = util.formatTableHeader();
  const table = await util.pushIntoTable(entries, tableHeader);
  console.log(
    `\nRequested Category is ${category} and Limited to ${limit}\n\n`
  );
  console.log(entries.length === 0 ? 'No Results\n' : table.toString());
}
