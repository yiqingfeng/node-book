# node-book

导出 VuePress构建的网站为 PDF

https://www.cnblogs.com/leetao94/p/10840552.html

https://blog.pushstack.com/export-html-to-pdf-in-node.html


## 使用说明

- 如果 [puppeteer](https://github.com/puppeteer/puppeteer) 安装过程过慢或者报错，我们可以选择跳过 Chromium 的下载，因为它本身就将近 200M，稍后可以手动下载。

```bash
env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true" npm i --save puppeteer
```

然后到 https://download-chromium.appspot.com/ 手动下载 Chromium，解压到项目根目录（可以在 .gitignore 里忽略它）。
