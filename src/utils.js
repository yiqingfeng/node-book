/**
 * @description 通用方法处理
 */
const fs = require('fs');
const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..');

/**
 * @description 获取该路径拼接根目录后的绝对路径
 * @param {string} relatedPath 相对路径
 * 备注：不传值时获取的就是根目录的绝对路径
 */
function getPath(relatedPath = './') {
  return path.resolve(ROOT_PATH, relatedPath);
}

/**
 * @description 文件写入
 */
function writeFile(path, content) {

}

Object.assign(exports, {
  getPath,
})
