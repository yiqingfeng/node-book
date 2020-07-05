// const puppeteer = require('puppeteer');

// (async () => {
//   const browser = await puppeteer.launch({
//     // executablePath: './chrome-mac/Chromium.app/Contents/MacOS/Chromium'
//     executablePath: "./chrome-mac/Chromium.app/Contents/MacOS/Chromium",
//     headless: true
//   });
//   const page = await browser.newPage();
//   await page.goto('https://ustbhuangyi.github.io/vue-analysis/v2/prepare/', {
//     waitUntil: 'networkidle2'
//   });
//   await page.pdf({
//     path: './test.pdf',
//     format: 'A4'
//   });

//   await browser.close();
// })()
import browser from './browser';
import download from './download';

(async () => {

  const urls = await download.getPdfForPages('https://ustbhuangyi.github.io/vue-analysis/v2/prepare/');

  await browser.destroy();
})();
