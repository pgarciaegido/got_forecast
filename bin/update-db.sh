#!/usr/bin/env node

const puppeteer = require('puppeteer');
const { cloneDeep } = require('lodash');
const { writeFileSync } = require('fs');
const path = require('path');
const characters = require('../db/characters.json');

// const charactersCopy = cloneDeep(characters);

const urlBase = 'https://gameofthrones.fandom.com/wiki/';
const selector = '[data-source="Status"] .pi-data-value a';

const getStatus = async () => {

  for (const character of characters) {
    const status = await scrap(character);
    character.status = status === 'Alive' ? '1' : '0';
  }

  writeDB(characters);

  console.log('Se acabó!');
}

const scrap = async (char) => {
  console.log(`Starting scraping for ${char.name}`);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`${urlBase}${char.wikiName}`);
  const status = await page.$eval(selector, el => el.innerText);
  console.log(char.name, status);
  await browser.close();
  return status;
};

const writeDB = (toWrite) => {
  writeFileSync(path.join(__dirname, '../db/characters.json'), JSON.stringify(toWrite, null, 4), 'utf8');
}
 
getStatus();
