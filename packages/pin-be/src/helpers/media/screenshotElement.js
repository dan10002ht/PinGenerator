export async function screenshotElement({html, id}) {
  try {
    const css = fs.readFileSync(
      path.resolve(__dirname, '../../../templates/templateThumbnail.css'),
      'utf8'
    );
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setContent(`
        <html>
          <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter&amp;display=swap">
            <style>${css}</style>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `);
    const element = await page.$(`#${id}`);
    console.log('Find element');
    const imageBuffer = await element.screenshot({omitbackground: true});
    await browser.close();
    return imageBuffer;
  } catch (e) {
    console.log('Error in screenshotElement', e);
    return null;
  }
}
