/**
 * @description 浏览器相关操作
 */
import puppeteer from 'puppeteer';
import utils from './utils';
// 浏览器实例 - 单例模式
let browserInstance : puppeteer.Browser | null | undefined;

/**
 * @description 创建一个新的浏览器窗口
 * @param {boolean} isCreate 是否强制创建一个新的
 */
async function createBrowser(isCreate ?: boolean): Promise<puppeteer.Browser> {
  if (!isCreate && browserInstance) return browserInstance;

  let browser = await puppeteer.launch({
    // executablePath: './chrome-mac/Chromium.app/Contents/MacOS/Chromium'
    executablePath: utils.getPath('./chrome-mac/Chromium.app/Contents/MacOS/Chromium'),
  });

  if (!isCreate) {
    browserInstance = browser;
  }

  return browser;
}

/**
 * @description 创建新标签页面
 * @param {browser} browser 指定浏览器
 */
async function createNewPage(browser ?: puppeteer.Browser | null): Promise<puppeteer.Page> {
  browser = browser || browserInstance;
  if (!browser) {
    browser = await createBrowser();
  }

  const page = await browser.newPage();

  return page;
}

/**
 * @description 销毁当前浏览器
 */
async function destroyBrowser() {
  if (!browserInstance) return;

  await browserInstance.close();

  browserInstance = null;
}

export default {
  create: createBrowser,
  newPage: createNewPage,
  destroy: destroyBrowser,
}
