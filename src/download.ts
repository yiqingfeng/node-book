/**
 * @description 相关页面下载
 */
import browser from './browser';
import utils from './utils';
/**
 * @description 获取所有可下载列表
 * @param {string} url 包含目录的起始页面地址
 */
async function getAllUrls(url: string) {
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle2'
  });

  const urls = await page.$$eval<Array<string>>('.sidebar-link[href]', function (els) {
    return els
      .map(el => el.href)
      .filter(url => !!url)
  });

  console.log(Array.isArray(urls));
  // return urls.map();
}

/**
 * @description 将所有可下载页面打印成PDF
 * @param url
 */
// async function getPdfForPages(url: string) {
//   const tempPath = utils.getPath('./temp/');
//   const urls: string[] = await getAllUrls(url);

//   utils.multiRequest<void>(urls.map(url => function () {
//     console.log(url);
//   }));
// }

Object.assign(exports, {
  getAllUrls,
  // getPdfForPages,
});
