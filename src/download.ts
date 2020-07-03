/**
 * @description 相关页面下载
 */
import browser from './browser';
/**
 * @description 获取所有可下载列表
 * @param {string} url 包含目录的起始页面地址
 */
async function getAllUrls(url: string) {
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle2'
  });

  const urls = await page.$$eval('.sidebar-link[href]', els => els.map(el => el.href));

  return urls;
}


// async function getAllPages(url) {
//   const urls = await getAllUrls(url);


// }

Object.assign(exports, {
  getAllUrls,
});
