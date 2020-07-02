/**
 * @description 相关页面下载
 */
const browser = require('./browser');
/**
 * @description 获取所有可下载列表
 * @param {url} startUrl 包含目录的起始页面地址
 */
async function getAllUrls(startUrl) {
  const page = await browser.newPage();

  await page.goto(startUrl, {
    waitUntil: 'networkidle2'
  });

  const urls = await page.$$eval('.sidebar-link[href]', els => els.map(el => el.href));

  return urls;
}

Object.assign(exports, {
  getAllUrls,
});
