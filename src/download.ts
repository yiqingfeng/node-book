/**
 * @description 相关页面下载
 */
import browser from './browser';
import utils from './utils';
/**
 * @description 获取所有可下载列表
 * @param {string} url 包含目录的起始页面地址
 */
export async function getAllLinks(url: string): Promise<string[]> {
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle2'
  });

  const urls: unknown = await page.$$eval<Array<string>>('.sidebar-link[href]', function (els) {
    return els
      .map(el => el.href)
      .filter(url => !!url)
  });

  return urls as string[];
}

/**
 * @description 将所有可下载页面打印成PDF
 * @param url
 */
async function getPdfForPages(url: string): Promise<any[]> {
  const urls: string[] = await getAllLinks(url);

  return utils.multiRequest<void>(urls.map((url, index) => async function () {
    const page = await browser.newPage();

    await page.goto(url, {
      waitUntil: 'networkidle2'
    });

    await page.pdf({
      path: utils.getPath(`./temp/${index}.pdf`),
      format: 'A4'
    });
  }));
}

export default {
  getAllLinks,
  getPdfForPages,
}
