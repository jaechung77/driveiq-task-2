const axios = require('axios');
const Table = require('cli-table');
const API = 'https://api.publicapis.org/entries';

function formatTableHeader() {
  const tableHeader = new Table({
    head: ['API', 'Description', 'Auth', 'HTTPS', 'Cors', 'Link', 'Category'],
    colWidths: [20, 50, 10, 10, 10, 50, 20],
  });
  return tableHeader;
}

async function pushIntoTable(entries, table) {
  await entries.map((row) =>
    table.push([
      row.API,
      row.Description,
      row.Auth,
      row.HTTPS,
      row.Cors,
      row.Link,
      row.Category,
    ])
  );
  return table;
}

async function getData(categoryInput, limit) {
  console.log('\nLoading...\n');
  try {
    const res = await axios.get(API);
    const entries = await res.data.entries
      .filter((entry) => entry.Category === categoryInput) //Filter by Category
      .sort((a, b) => b.API.localeCompare(a.API)) //Sort bu API decending order
      .slice(0, limit) //Limit
      .map((data) => ({
        //Save into object
        ...data,
        API: data.API,
        Description: data.Description,
        Auth: data.Auth,
        Cors: data.Cors,
        Link: data.Link,
        Category: data.Category,
      }));
    return entries;
  } catch (error) {
    console.log('Error:' + error);
  }
}

module.exports = { formatTableHeader, getData, pushIntoTable };
