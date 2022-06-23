#! /usr/bin/end mode

const axios = require('axios');
// const API = 'https://api.publicapis.org/entries';
const file = 'data.json';
const category_input = process.argv[2];
const limit = process.argv[3];
const fs = require('fs');

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
  console.log(output);
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
