#!/usr/bin/env node

const { get } = require('axios');
const characters = require('../db/characters.json');

characters.forEach(async (char) => {

  const response = await get(`https://www.anapioficeandfire.com/api/characters/${char.apiId}`);
  const data = response.data;
  console.log(char.name);
  console.log(data.died);
});
