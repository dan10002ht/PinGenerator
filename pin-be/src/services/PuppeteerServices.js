import puppeteer from 'puppeteer';

export default class PuppeteerServices {
  constructor() {
    this.browser = null;
    this.page = null;
  }
  async initBrowser() {
    this.browser = await puppeteer.launch({headless: true, args: ['--no-sandbox']});
    this.page = await this.browser.newPage();
  }
  async getSiteByUrl(url) {
    await this.page.goto(url);
  }
  async getAllImages() {
    return await this.page.evaluate(() => {
      const images = document.querySelectorAll('img');

      return Array.from(images).map((x) => x.getAttribute('src'));
    });
  }
  async getTitle() {
    try {
      return await this.page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1.textContent.trim();
      });
    } catch (e) {
      console.error(e);
      return '';
    }
  }
  async initialize(
    url = 'https://viblo.asia/p/kien-truc-huong-su-kien-event-driven-architecture-zXRJ8n2dVGq',
  ) {
    try {
      await this.initBrowser();
      await this.getSiteByUrl(url);
      const [images, title] = await Promise.all([this.getAllImages(), this.getTitle()]);
      return {images, title};
    } catch (e) {
      console.log(e);
    } finally {
      this.browser.close();
    }
  }
}
