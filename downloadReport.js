const fs = require('fs');
const puppeteer = require('puppeteer');

module.exports = async (html) => {
  console.log('entra?');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const styles = fs.readFileSync(__dirname + '/public/styles/index.css', 'utf-8');
  html = `<style>${styles}</style>${html}`;
  await page.setContent(html);
  const screenshot = await page.screenshot({ path: 'hola.png' });
  await browser.close();
  return screenshot;
};
