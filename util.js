const fs = require('fs');
const axios = require('axios');
const Table = require('cli-table');
// const API = 'https://api.publicapis.org/entries';

function getAllEntries(categoryInput, limit) {
  const rawData = fs.readFileSync('./public/data.json');
  const jsonData = JSON.parse(rawData);

  console.log('Loading...');
  const entries = jsonData.entries
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
}

function formatTableHeader() {
  const tableHeader = new Table({
    head: ['API', 'Description', 'Auth', 'HTTPS', 'Cors', 'Link', 'Category'],
    colWidths: [20, 80, 10, 10, 10, 80, 20],
  });
  return tableHeader;
}

function pushIntoTable(entries, table) {
  entries.map((row) =>
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

module.exports = { getAllEntries, formatTableHeader, pushIntoTable };

// axios
//   .get(file)
//   .then((response) => {
//     console.clear();
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
