#! /usr/bin/end mode

const axios = require('axios');
const Table = require('cli-table');
// const API = 'https://api.publicapis.org/entries';

const categoryInput = process.argv[2];
const noOfData = process.argv[3];

const fs = require('fs');

const table = new Table({
  head: ['API', 'Description', 'Auth', 'HTTPS', 'Cors', 'Link', 'Category'],
  colWidths: [20, 80, 10, 10, 10, 80, 20],
});

console.log('Loading...');

const getAllEntries = () => {
  const rawData = fs.readFileSync('./public/data.json');
  const jsonData = JSON.parse(rawData);
  const entries = jsonData.entries.map((data) => ({
    ...data,
    API: data.API,
    Description: data.Description,
    Auth: data.Auth,
    Cors: data.Cors,
    Link: data.Link,
    Category: data.Category,
  }));
  const output = entries
    .filter((entry) => entry.Category === 'Animals')
    .sort((a, b) => b.API.localeCompare(a.API))
    .slice(0, 5);
  console.clear();

  output.map((row) =>
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
  console.log(`\n Category: ${categoryInput}, No. of Data: ${noOfData}\n\n`);
  console.log(table.toString());
};

getAllEntries();
// axios
//   .get(file)
//   .then((response) => {
//     console.clear();
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
